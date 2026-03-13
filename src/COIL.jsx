import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import * as THREE from "three";

// ─────────────────────────────────────────────
// COIL — Thought Pattern Mapper
// a lirio labs instrument
// Planetary Terrain Edition v0.3
// ─────────────────────────────────────────────

const COLORS = {
  bg: "#0f0d0b",
  surface: "#1e1b17",
  surfaceLight: "#2d2a25",
  surfaceMid: "#3a3530",
  amber: "#d4a574",
  amberBright: "#f0c896",
  amberDim: "#8b6b4a",
  textPrimary: "#ede5d8",
  textSecondary: "#8a8278",
  textMuted: "#4a4540",
  glowAmber: "rgba(212,165,116,0.25)",
};

// ─── Emotion Color Spectrum ───
// Based on Plutchik's wheel of emotions + warmth mapping.
// Each emotion family gets a distinct hue so the planet becomes
// a living mood map you can read at a glance.
const EMOTION_COLORS = {
  // Warm stress spectrum (reds, oranges)
  anger:       { hex: "#d94f4f", r: 0.85, g: 0.31, b: 0.31, label: "anger" },
  frustration: { hex: "#e06b45", r: 0.88, g: 0.42, b: 0.27, label: "frustration" },
  anxiety:     { hex: "#d98a3d", r: 0.85, g: 0.54, b: 0.24, label: "anxiety" },
  fear:        { hex: "#8b5fbf", r: 0.55, g: 0.37, b: 0.75, label: "fear" },
  sadness:     { hex: "#5b7fbf", r: 0.36, g: 0.50, b: 0.75, label: "sadness" },
  loneliness:  { hex: "#6b6b9e", r: 0.42, g: 0.42, b: 0.62, label: "loneliness" },
  exhaustion:  { hex: "#7a6b5a", r: 0.48, g: 0.42, b: 0.35, label: "exhaustion" },
  overwhelm:   { hex: "#c75a7a", r: 0.78, g: 0.35, b: 0.48, label: "overwhelm" },
  // Cool resolved spectrum (greens, blues, golds)
  joy:         { hex: "#d4b84f", r: 0.83, g: 0.72, b: 0.31, label: "joy" },
  peace:       { hex: "#7ab89e", r: 0.48, g: 0.72, b: 0.62, label: "peace" },
  hope:        { hex: "#8fc98f", r: 0.56, g: 0.79, b: 0.56, label: "hope" },
  confidence:  { hex: "#c9a84f", r: 0.79, g: 0.66, b: 0.31, label: "confidence" },
  clarity:     { hex: "#8ecae6", r: 0.56, g: 0.79, b: 0.90, label: "clarity" },
  gratitude:   { hex: "#a3d9a5", r: 0.64, g: 0.85, b: 0.65, label: "gratitude" },
  excitement:  { hex: "#e8b84f", r: 0.91, g: 0.72, b: 0.31, label: "excitement" },
  love:        { hex: "#e07aa5", r: 0.88, g: 0.48, b: 0.65, label: "love" },
  // Neutral
  neutral:     { hex: "#d4a574", r: 0.83, g: 0.65, b: 0.46, label: "neutral" },
};

// Maps keywords/tones to emotion families
const EMOTION_DETECT = {
  anger: ["angry","rage","furious","pissed","mad","hatred","resentment","bitter"],
  frustration: ["frustrated","annoyed","irritated","stuck","blocked","failing","wrong"],
  anxiety: ["anxious","worried","nervous","panic","racing","restless","uneasy","stress","stressed","overthink"],
  fear: ["fear","scared","afraid","terrified","dread","paranoid","unsafe"],
  sadness: ["sad","crying","depressed","grief","loss","heartbroken","empty","numb"],
  loneliness: ["lonely","alone","isolated","disconnected","nobody","abandoned"],
  exhaustion: ["tired","exhausted","drained","burnout","depleted","fatigued","worn"],
  overwhelm: ["overwhelm","overwhelmed","drowning","too much","chaotic","scattered"],
  joy: ["happy","joy","joyful","fun","laughing","wonderful","amazing","delighted"],
  peace: ["calm","peace","peaceful","serene","still","quiet","centered","grounded","present"],
  hope: ["hope","hopeful","optimistic","better","improving","growth","progress","forward"],
  confidence: ["confident","strong","capable","proud","powerful","bold","certain"],
  clarity: ["clarity","clear","insight","understand","realize","breakthrough","focus"],
  gratitude: ["grateful","thankful","blessed","appreciate","fortunate","lucky"],
  excitement: ["excited","thrilled","eager","alive","inspired","energized","motivated","built","building","create","creating"],
  love: ["love","loving","connected","intimate","warm","tender","cherish","caring"],
};

function detectEmotion(text) {
  const lo = text.toLowerCase();
  let best = "neutral", bestScore = 0;
  for (const [emotion, words] of Object.entries(EMOTION_DETECT)) {
    const score = words.filter(w => lo.includes(w)).length;
    if (score > bestScore) { bestScore = score; best = emotion; }
  }
  return best;
}

function emotionToTrend(emotion) {
  const stressEmotions = ["anger","frustration","anxiety","fear","sadness","loneliness","exhaustion","overwhelm"];
  const resolvedEmotions = ["joy","peace","hope","confidence","clarity","gratitude","excitement","love"];
  if (stressEmotions.includes(emotion)) return "stress";
  if (resolvedEmotions.includes(emotion)) return "resolved";
  return "neutral";
}

function getEmotionColor(emotion) {
  return EMOTION_COLORS[emotion] || EMOTION_COLORS.neutral;
}

// ─── Audio Engine ───
class SoundEngine {
  constructor() { this.ctx = null; this.initialized = false; }
  init() {
    if (this.initialized) return;
    try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); this.initialized = true; } catch(e) {}
  }
  play(type) {
    if (!this.ctx) { this.init(); }
    if (!this.ctx) return;
    // Resume if browser suspended the AudioContext
    if (this.ctx.state === "suspended") { this.ctx.resume(); }
    const now = this.ctx.currentTime;
    if (type === "zoom") {
      const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); const filter = this.ctx.createBiquadFilter();
      osc.type = "sawtooth"; osc.frequency.setValueAtTime(40, now); osc.frequency.exponentialRampToValueAtTime(120, now + 2.5);
      filter.type = "lowpass"; filter.frequency.setValueAtTime(200, now); filter.frequency.exponentialRampToValueAtTime(2000, now + 2.5);
      gain.gain.setValueAtTime(0, now); gain.gain.linearRampToValueAtTime(0.12, now + 0.8); gain.gain.linearRampToValueAtTime(0, now + 3);
      osc.connect(filter).connect(gain).connect(this.ctx.destination); osc.start(now); osc.stop(now + 3);
      const o2 = this.ctx.createOscillator(); const g2 = this.ctx.createGain();
      o2.type = "sine"; o2.frequency.setValueAtTime(440, now + 1); o2.frequency.exponentialRampToValueAtTime(880, now + 2.5);
      g2.gain.setValueAtTime(0, now + 1); g2.gain.linearRampToValueAtTime(0.03, now + 1.8); g2.gain.linearRampToValueAtTime(0, now + 3);
      o2.connect(g2).connect(this.ctx.destination); o2.start(now + 1); o2.stop(now + 3);
    }
    if (type === "reveal") {
      const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
      osc.type = "sine"; osc.frequency.setValueAtTime(660, now); osc.frequency.exponentialRampToValueAtTime(440, now + 0.6);
      gain.gain.setValueAtTime(0.06, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc.connect(gain).connect(this.ctx.destination); osc.start(now); osc.stop(now + 0.8);
    }
    if (type === "submit") {
      [0, 0.08, 0.16].forEach((d, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = "sine"; o.frequency.value = [523, 659, 784][i];
        g.gain.setValueAtTime(0.05, now + d); g.gain.exponentialRampToValueAtTime(0.001, now + d + 0.4);
        o.connect(g).connect(this.ctx.destination); o.start(now + d); o.stop(now + d + 0.4);
      });
    }
    if (type === "hover") {
      const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
      o.type = "sine"; o.frequency.value = 1200; g.gain.setValueAtTime(0.015, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      o.connect(g).connect(this.ctx.destination); o.start(now); o.stop(now + 0.12);
    }
    if (type === "drone") {
      const o1 = this.ctx.createOscillator(); const o2 = this.ctx.createOscillator();
      const g = this.ctx.createGain(); const f = this.ctx.createBiquadFilter();
      o1.type = "sine"; o1.frequency.value = 55; o2.type = "sine"; o2.frequency.value = 82.5;
      f.type = "lowpass"; f.frequency.value = 350; g.gain.value = 0.025;
      o1.connect(f); o2.connect(f); f.connect(g).connect(this.ctx.destination);
      o1.start(now); o2.start(now);
      return { stop: () => { g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2); setTimeout(() => { o1.stop(); o2.stop(); }, 2000); }};
    }
    if (type === "impact") {
      const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
      osc.type = "sine"; osc.frequency.setValueAtTime(180, now); osc.frequency.exponentialRampToValueAtTime(40, now + 0.5);
      gain.gain.setValueAtTime(0.08, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain).connect(this.ctx.destination); osc.start(now); osc.stop(now + 0.6);
    }
    if (type === "coalesce") {
      // Crystallization shimmer — rising harmonics as stars merge into diamond
      [440, 660, 880, 1100].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(freq * 0.5, now + i * 0.12);
        o.frequency.exponentialRampToValueAtTime(freq, now + i * 0.12 + 0.25);
        g.gain.setValueAtTime(0, now + i * 0.12);
        g.gain.linearRampToValueAtTime(0.035, now + i * 0.12 + 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.7);
        o.connect(g).connect(this.ctx.destination); o.start(now + i * 0.12); o.stop(now + i * 0.12 + 0.7);
      });
    }
    // ═══ LIFECYCLE + EMOTION CLICK SOUNDS ═══
    // Each stage has two flavors: Crater (stress — descending, minor, warm hollow)
    //                              Flare  (resolved — ascending, major, bright airy)
    // Neutral types fall through to the flare variant.

    // Helper: make a filtered tone
    const _tone = (freq, type2, vol, start, end, filterFreq) => {
      const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
      o.type = type2; o.frequency.setValueAtTime(freq, start);
      g.gain.setValueAtTime(vol, start); g.gain.exponentialRampToValueAtTime(0.001, end);
      if (filterFreq) {
        const f = this.ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = filterFreq;
        o.connect(f).connect(g).connect(this.ctx.destination);
      } else { o.connect(g).connect(this.ctx.destination); }
      o.start(start); o.stop(end);
      return o;
    };

    // ── SEED (1-2 entries) ──
    if (type === "seedFlareClick" || type === "seedClick") {
      // Ascending water drop — bright, hopeful, tiny
      const o1 = this.ctx.createOscillator(); const g1 = this.ctx.createGain();
      o1.type = "sine"; o1.frequency.setValueAtTime(880, now); o1.frequency.exponentialRampToValueAtTime(1320, now + 0.15);
      g1.gain.setValueAtTime(0.05, now); g1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o1.connect(g1).connect(this.ctx.destination); o1.start(now); o1.stop(now + 0.3);
      // Soft overtone shimmer
      _tone(2640, "sine", 0.015, now + 0.02, now + 0.12);
    }
    if (type === "seedCraterClick") {
      // Descending soft thud — gentle, grounding
      const o1 = this.ctx.createOscillator(); const g1 = this.ctx.createGain();
      o1.type = "sine"; o1.frequency.setValueAtTime(660, now); o1.frequency.exponentialRampToValueAtTime(440, now + 0.2);
      g1.gain.setValueAtTime(0.045, now); g1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o1.connect(g1).connect(this.ctx.destination); o1.start(now); o1.stop(now + 0.35);
      _tone(220, "sine", 0.025, now, now + 0.2, 300);
    }

    // ── CRYSTAL (3-5 entries) ──
    if (type === "crystalFlareClick" || type === "crystalClick") {
      // Major arpeggio — C E G ascending, glass-like
      [523, 659, 784].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = "triangle"; o.frequency.setValueAtTime(freq, now + i * 0.06);
        o.frequency.exponentialRampToValueAtTime(freq * 1.01, now + i * 0.06 + 0.5);
        g.gain.setValueAtTime(0.04, now + i * 0.06); g.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        o.connect(g).connect(this.ctx.destination); o.start(now + i * 0.06); o.stop(now + 0.7);
      });
      _tone(1568, "sine", 0.012, now + 0.18, now + 0.45); // high sparkle
    }
    if (type === "crystalCraterClick") {
      // Minor descent — E C A, deeper warmth
      [659, 523, 440].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = "triangle"; o.frequency.setValueAtTime(freq, now + i * 0.07);
        g.gain.setValueAtTime(0.038, now + i * 0.07); g.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
        o.connect(g).connect(this.ctx.destination); o.start(now + i * 0.07); o.stop(now + 0.65);
      });
      _tone(110, "sine", 0.03, now + 0.05, now + 0.4, 250); // warm sub
    }

    // ── CLUSTER (6-10 entries) ──
    if (type === "clusterFlareClick" || type === "clusterClick") {
      // Bright chord bloom — G major with shimmer, like sunlight through crystal
      [392, 494, 587, 784].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = i < 2 ? "triangle" : "sine";
        o.frequency.setValueAtTime(freq * 0.98, now + i * 0.03);
        o.frequency.exponentialRampToValueAtTime(freq, now + i * 0.03 + 0.15);
        g.gain.setValueAtTime(0.035 / (1 + i * 0.2), now + i * 0.03);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
        o.connect(g).connect(this.ctx.destination); o.start(now + i * 0.03); o.stop(now + 0.9);
      });
      _tone(1568, "sine", 0.01, now + 0.2, now + 0.6); // airy top
      _tone(196, "sine", 0.025, now, now + 0.5); // warm body
    }
    if (type === "clusterCraterClick") {
      // Hollow resonance — D minor chord, filtered, like a cave
      [294, 349, 440, 587].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        const f = this.ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 800 - i * 100;
        o.type = i < 2 ? "triangle" : "sine";
        o.frequency.setValueAtTime(freq, now + i * 0.04);
        o.frequency.exponentialRampToValueAtTime(freq * 0.99, now + 0.9);
        g.gain.setValueAtTime(0.035 / (1 + i * 0.25), now + i * 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
        o.connect(f).connect(g).connect(this.ctx.destination); o.start(now + i * 0.04); o.stop(now + 0.85);
      });
      _tone(73, "sine", 0.04, now, now + 0.6, 180); // deep earth rumble
    }

    // ── FORMATION (11-20 entries) ──
    if (type === "formationFlareClick" || type === "formationClick") {
      // Cathedral light — C major 7th with ascending sweep, open and soaring
      [262, 330, 392, 494, 523].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = i === 0 ? "triangle" : "sine";
        o.frequency.setValueAtTime(freq * 0.97, now + i * 0.05);
        o.frequency.exponentialRampToValueAtTime(freq * 1.003, now + 1.3);
        g.gain.setValueAtTime(0.04 / (1 + i * 0.3), now + i * 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, now + 1.3);
        o.connect(g).connect(this.ctx.destination); o.start(now + i * 0.05); o.stop(now + 1.3);
      });
      _tone(1047, "sine", 0.008, now + 0.3, now + 1.0); // bell overtone
      _tone(131, "sine", 0.04, now, now + 0.9); // foundation
    }
    if (type === "formationCraterClick") {
      // Tectonic weight — A minor stacked with low resonance, gravity
      [220, 262, 330, 440, 523].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        const f = this.ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 600;
        o.type = i === 0 ? "triangle" : "sine";
        o.frequency.setValueAtTime(freq, now + i * 0.04);
        o.frequency.exponentialRampToValueAtTime(freq * 0.995, now + 1.3);
        g.gain.setValueAtTime(0.04 / (1 + i * 0.35), now + i * 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
        o.connect(f).connect(g).connect(this.ctx.destination); o.start(now + i * 0.04); o.stop(now + 1.2);
      });
      _tone(55, "sine", 0.06, now, now + 1.0, 120); // seismic sub
      _tone(82, "triangle", 0.03, now + 0.1, now + 0.8, 180); // tremor
    }

    // ── LANDMARK (20+ entries) ──
    if (type === "landmarkFlareClick" || type === "landmarkClick") {
      // Solar eruption — massive ascending chord with harmonic bloom and high shimmer
      [131, 165, 196, 262, 330, 392, 523].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = i < 2 ? "triangle" : "sine";
        o.frequency.setValueAtTime(freq * 0.96, now + i * 0.04);
        o.frequency.exponentialRampToValueAtTime(freq * 1.005, now + 2.2);
        g.gain.setValueAtTime(0.04 / (1 + i * 0.25), now + i * 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
        o.connect(g).connect(this.ctx.destination); o.start(now + i * 0.04); o.stop(now + 2.2);
      });
      _tone(1047, "sine", 0.01, now + 0.3, now + 1.5); // high bell
      _tone(2093, "sine", 0.006, now + 0.5, now + 1.2); // sparkle
      _tone(65, "sine", 0.05, now, now + 1.5); // cosmic foundation
    }
    if (type === "landmarkCraterClick") {
      // Tectonic monument — deep gong with filtered harmonics, vast and heavy
      [65, 82, 131, 165, 196, 262, 330].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        const f = this.ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 500 + i * 50;
        o.type = i < 3 ? "triangle" : "sine";
        o.frequency.setValueAtTime(freq, now + i * 0.035);
        o.frequency.exponentialRampToValueAtTime(freq * 0.997, now + 2.2);
        g.gain.setValueAtTime(0.045 / (1 + i * 0.22), now + i * 0.035);
        g.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
        o.connect(f).connect(g).connect(this.ctx.destination); o.start(now + i * 0.035); o.stop(now + 2.0);
      });
      _tone(41, "sine", 0.07, now, now + 1.8, 100); // sub-bass you feel
      _tone(55, "triangle", 0.04, now + 0.1, now + 1.2, 140); // earth hum
    }

    // Legacy aliases for backward compat
    if (type === "miniDiamondClick") this.play("seedFlareClick");
    if (type === "diamondClick") this.play("crystalFlareClick");
    if (type === "transform") {
      // Stars-to-diamond transformation — ascending cascade then crystallization snap
      [330, 440, 550, 660, 880].forEach((freq, i) => {
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(freq * 0.7, now + i * 0.08);
        o.frequency.exponentialRampToValueAtTime(freq * 1.2, now + i * 0.08 + 0.2);
        g.gain.setValueAtTime(0, now + i * 0.08);
        g.gain.linearRampToValueAtTime(0.04, now + i * 0.08 + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.5);
        o.connect(g).connect(this.ctx.destination); o.start(now + i * 0.08); o.stop(now + i * 0.08 + 0.5);
      });
      // Final crystallization snap
      const snap = this.ctx.createOscillator(); const snapG = this.ctx.createGain();
      snap.type = "square"; snap.frequency.setValueAtTime(1200, now + 0.45);
      snap.frequency.exponentialRampToValueAtTime(600, now + 0.55);
      snapG.gain.setValueAtTime(0.03, now + 0.45); snapG.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      snap.connect(snapG).connect(this.ctx.destination); snap.start(now + 0.45); snap.stop(now + 0.7);
    }
  }
}
const sound = new SoundEngine();

// ── Lifecycle stage helpers ──
function getLifecycleStage(frequency) {
  if (frequency >= 20) return "landmark";
  if (frequency >= 11) return "formation";
  if (frequency >= 6) return "cluster";
  if (frequency >= 3) return "crystal";
  return "seed";
}
function getLifecycleClickSound(frequency, emotion) {
  const stage = getLifecycleStage(frequency);
  const trend = emotion ? emotionToTrend(emotion) : "neutral";
  // Each stage has a crater (stress/descending) and flare (resolved/ascending) variant
  if (trend === "stress") return stage + "CraterClick";
  if (trend === "resolved") return stage + "FlareClick";
  return stage + "Click"; // neutral fallback plays flare variant
}

// ─── Color evolution: trajectory-based color shifting ───
function computeTrajectory(entryTimestamps, dormantThresholdDays = 14) {
  const now = Date.now();
  const msPerDay = 86400000;
  if (!entryTimestamps || entryTimestamps.length === 0) return { trajectory: 0, state: "dormant", daysSinceLastEntry: Infinity };
  const sorted = [...entryTimestamps].sort((a, b) => b - a);
  const daysSinceLastEntry = (now - sorted[0]) / msPerDay;
  if (daysSinceLastEntry >= dormantThresholdDays) return { trajectory: 0, state: "dormant", daysSinceLastEntry };
  // Compute frequency trend over last 14 days vs previous 14 days
  const window1Start = now - 14 * msPerDay;
  const window2Start = now - 28 * msPerDay;
  const recentCount = sorted.filter(t => t >= window1Start).length;
  const olderCount = sorted.filter(t => t >= window2Start && t < window1Start).length;
  const delta = recentCount - olderCount;
  // Positive delta = stress (increasing), negative = resolving (decreasing)
  return { trajectory: delta, state: delta > 0 ? "stress" : delta < 0 ? "resolving" : "active", daysSinceLastEntry };
}

function lerpHexColor(hex1, hex2, t) {
  const r1 = parseInt(hex1.slice(1, 3), 16), g1 = parseInt(hex1.slice(3, 5), 16), b1 = parseInt(hex1.slice(5, 7), 16);
  const r2 = parseInt(hex2.slice(1, 3), 16), g2 = parseInt(hex2.slice(3, 5), 16), b2 = parseInt(hex2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * t), g = Math.round(g1 + (g2 - g1) * t), b = Math.round(b1 + (b2 - b1) * t);
  return `#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${b.toString(16).padStart(2,"0")}`;
}

const EVOLUTION_COLORS = {
  stress: "#a04a3a",
  resolving: "#a0c8a0",
  dormant: "#6a6a6a",
  resurfaced: "#f0c896",
};
const MAX_TRAJECTORY_SHIFT = 0.6;

function getEvolvedColor(baseHex, trajectoryState, trajectoryStrength) {
  if (trajectoryState === "active") return baseHex;
  const targetHex = EVOLUTION_COLORS[trajectoryState] || baseHex;
  const t = Math.min(Math.abs(trajectoryStrength) * 0.12, MAX_TRAJECTORY_SHIFT);
  return lerpHexColor(baseHex, targetHex, t);
}

// ─── Noise (3D for sphere) ───
function noise3D(x, y, z) {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return (n - Math.floor(n)) * 2 - 1;
}
function smoothNoise3D(x, y, z) {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy), sz = fz * fz * (3 - 2 * fz);
  const n000 = noise3D(ix, iy, iz), n100 = noise3D(ix+1, iy, iz);
  const n010 = noise3D(ix, iy+1, iz), n110 = noise3D(ix+1, iy+1, iz);
  const n001 = noise3D(ix, iy, iz+1), n101 = noise3D(ix+1, iy, iz+1);
  const n011 = noise3D(ix, iy+1, iz+1), n111 = noise3D(ix+1, iy+1, iz+1);
  const nx00 = n000 + (n100 - n000) * sx, nx10 = n010 + (n110 - n010) * sx;
  const nx01 = n001 + (n101 - n001) * sx, nx11 = n011 + (n111 - n011) * sx;
  const nxy0 = nx00 + (nx10 - nx00) * sy, nxy1 = nx01 + (nx11 - nx01) * sy;
  return nxy0 + (nxy1 - nxy0) * sz;
}
function fbm3D(x, y, z, oct = 4) {
  let v = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { v += a * smoothNoise3D(x * f, y * f, z * f); a *= 0.5; f *= 2; }
  return v;
}

// ─── Privacy-First Keyword Hashing ───
function hashToAngle(str) {
  let h1 = 0x811c9dc5, h2 = 0x6c62272e;
  for (let i = 0; i < str.length; i++) {
    h1 ^= str.charCodeAt(i); h1 = Math.imul(h1, 0x01000193);
    h2 ^= str.charCodeAt(i); h2 = Math.imul(h2, 0x5bd1e995);
  }
  const phi = 0.2 + ((h1 >>> 0) / 0xffffffff) * (Math.PI - 0.4);
  const theta = ((h2 >>> 0) / 0xffffffff) * Math.PI * 2;
  return { phi, theta };
}

function keywordToSpherePos(keyword, radius) {
  const { phi, theta } = hashToAngle(keyword);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// ─── NLP ───
const STOP = new Set(["i","me","my","the","a","an","is","was","am","are","be","been","to","of","in","for","on","with","at","by","it","its","and","or","but","not","no","so","if","do","did","has","had","have","this","that","what","when","where","how","who","all","just","very","really","too","about","out","up","can","will","would","should","could","get","got","being","some","than","them","then","they","from","like","feel","feeling","think","thinking","know","thing","things","going","want","need","much","way","even","still","right","now","today","always","never","every","something","anything","everything","been","also","into","more","most","over","such","only","through","back","after","before","other","make","first","come","made","well","here","take","many","because","does","each","same","different","kind","between","under","while","again","off","down","keep","around","another","though","during","few","both","these","those","since"]);

// ─── Keyword Normalization ───
// Maps variant word forms to canonical keywords for smarter aggregation.
// "built", "building", "builds" all → "build". "isolated", "alone" → "lonely".
const CANONICAL_FORMS = {
  built: "build", building: "build", builds: "build", builder: "build",
  creating: "create", created: "create", creates: "create", creation: "create",
  hopeful: "hope", hoping: "hope", hopes: "hope", hoped: "hope",
  sleeping: "sleep", slept: "sleep", sleeps: "sleep", sleepless: "sleep",
  working: "work", worked: "work", works: "work",
  isolated: "lonely", alone: "lonely", loneliness: "lonely",
  exhausted: "exhaust", exhausting: "exhaust", exhaustion: "exhaust", depleted: "exhaust", drained: "exhaust", fatigued: "exhaust",
  frustrated: "frustrate", frustrating: "frustrate", frustration: "frustrate",
  peaceful: "peace", grounded: "peace",
  clarity: "clear", clearer: "clear",
  confident: "confidence",
  grateful: "gratitude",
  excited: "excite", exciting: "excite", excitement: "excite",
  stressing: "stress", stressed: "stress", stressful: "stress",
  worried: "worry", worries: "worry", worrying: "worry",
  scared: "fear", afraid: "fear", fearful: "fear", terrified: "fear",
  angry: "anger", angrier: "anger",
  happier: "happy", happiness: "happy",
  sadder: "sad", sadness: "sad",
  comparing: "compare", compared: "compare",
  spiraling: "spiral", racing: "race",
  questioning: "question", improving: "improve",
  shifting: "shift", holding: "hold",
};
function normalizeKeyword(w) { return CANONICAL_FORMS[w] || w; }

// Improved keyword extraction with edge case handling.
// Single words, names, and very short input all produce usable keywords.
function extractKw(t) {
  const words = t.toLowerCase().replace(/[^a-z'\s]/g, "").split(/\s+/).filter(w => w.length > 0);
  // Standard: filter stop words, normalize, deduplicate
  const filtered = words.filter(w => w.length > 2 && !STOP.has(w)).map(normalizeKeyword);
  const unique = [...new Set(filtered)];
  if (unique.length > 0) return unique;
  // Fallback for names / short input: use words > 2 chars even if stop words
  const fallback = words.filter(w => w.length > 2).map(normalizeKeyword);
  if (fallback.length > 0) return [...new Set(fallback)];
  // Last resort: single short word (e.g. "ok", "no") — use the longest word
  if (words.length > 0) {
    const longest = words.reduce((a, b) => a.length >= b.length ? a : b);
    return [normalizeKeyword(longest)];
  }
  return ["thought"];
}

// ─── Improved Categorization ───
// Much broader keyword coverage to minimize uncategorized
const CATEGORY_MAP = {
  "work & career": ["career","job","work","working","office","boss","coworker","meeting","deadline","project","promotion","fired","quit","hire","hiring","resume","interview","company","manager","team","colleague","corporate","professional","freelance","client","business","startup","hustle","grind","commute","salary","raise","performance","review","intern","remote","hybrid","workload","overtime","productivity"],
  "finances": ["money","finance","financial","debt","bills","salary","income","budget","savings","invest","investing","investment","expensive","afford","rent","mortgage","bank","credit","loan","broke","wealthy","rich","poor","pay","payment","tax","taxes","crypto","stock","stocks","spending","cost","price","save","fund","retire","retirement","economic"],
  "health & body": ["health","sleep","sleeping","exercise","exercising","workout","gym","sick","sickness","pain","energy","tired","exhausted","body","weight","diet","eating","eat","headache","medication","doctor","hospital","therapy","therapist","medical","illness","symptom","insomnia","fatigue","migraine","chronic","vitamin","nutrition","fitness","running","yoga","meditation","breathing","rest","recovery","heal","healing"],
  "relationships": ["relationship","friend","friends","friendship","family","partner","love","loving","lonely","trust","argue","argument","breakup","dating","marriage","married","parents","parent","mom","dad","mother","father","sibling","brother","sister","child","children","kid","kids","boyfriend","girlfriend","husband","wife","spouse","couple","bond","connection","connect","companion","social","people","person","community","neighbor","roommate","ex","divorce","communicate","communication"],
  "growth & purpose": ["growth","learn","learning","skill","skills","improve","goal","goals","progress","clarity","direction","purpose","meaning","create","creating","build","building","mentor","mentoring","education","study","studying","school","college","university","degree","course","read","reading","book","practice","master","mastery","evolve","develop","development","potential","ambition","discipline","habit","routine","vision","mission","calling","passion","talent"],
  "creativity": ["creative","creativity","art","artist","music","musical","write","writing","design","designing","paint","painting","draw","drawing","sing","singing","dance","dancing","perform","performance","compose","craft","make","making","code","coding","program","programming","produce","producing","film","photo","photography","studio","instrument","song","poetry","poem","story","novel","inspiration","imagination","expression"],
  "emotions": ["stress","stressed","anxious","anxiety","worried","worry","fear","scared","panic","overwhelm","overwhelmed","stuck","lost","angry","frustrated","frustration","sad","sadness","lonely","tired","exhausted","hate","failing","wrong","bad","worse","worst","nothing","afraid","dread","racing","restless","calm","peace","peaceful","happy","happiness","joy","grateful","gratitude","better","improve","clarity","clear","good","great","love","hope","confident","confidence","strong","free","relief","resolved","done","finished","proud","excited","alive","present","anxious","nervous","depressed","depression","mood","emotional"],
  "identity": ["identity","self","worth","value","values","believe","belief","authentic","genuine","true","real","mask","pretend","image","ego","soul","spirit","spiritual","inner","core","essence","personality","character","integrity","moral","ethics","conscience","boundaries","boundary","accept","acceptance","belong","belonging","culture","cultural","heritage","roots","tradition"],
  "environment": ["home","house","apartment","space","room","nature","outside","outdoors","city","urban","rural","move","moving","location","place","travel","traveling","trip","vacation","weather","season","environment","surroundings","neighborhood","country","state","world","global","local","scenery","landscape","ocean","mountain","forest","garden","park"],
  "technology": ["tech","technology","computer","phone","screen","internet","online","digital","social media","app","software","hardware","device","algorithm","data","ai","artificial intelligence","robot","automation","virtual","cyber","hack","hacking","security","privacy","code","coding","website","platform","server","cloud","blockchain","quantum"],
  "time & life": ["time","future","past","present","memory","memories","remember","forget","age","aging","young","old","birthday","anniversary","year","years","month","months","week","weeks","day","days","morning","evening","night","deadline","rush","hurry","slow","fast","patience","impatient","wait","waiting","soon","later","someday","legacy","life","death","dying","mortality","birth","chapter","phase","season","transition","change","changing"],
};

function categorizeKeywords(keywords) {
  const cats = {};
  keywords.forEach(kw => {
    let placed = false;
    for (const [cat, words] of Object.entries(CATEGORY_MAP)) {
      if (words.some(w => kw === w || kw.includes(w) || w.includes(kw))) {
        if (!cats[cat]) cats[cat] = [];
        if (!cats[cat].includes(kw)) cats[cat].push(kw);
        placed = true;
        break;
      }
    }
    // Fuzzy fallback: check if keyword shares 4+ chars with any category word
    if (!placed) {
      for (const [cat, words] of Object.entries(CATEGORY_MAP)) {
        if (words.some(w => (kw.length >= 4 && w.length >= 4) && (w.startsWith(kw.slice(0, 4)) || kw.startsWith(w.slice(0, 4))))) {
          if (!cats[cat]) cats[cat] = [];
          if (!cats[cat].includes(kw)) cats[cat].push(kw);
          placed = true;
          break;
        }
      }
    }
    if (!placed) {
      if (!cats["other"]) cats["other"] = [];
      if (!cats["other"].includes(kw)) cats["other"].push(kw);
    }
  });
  return cats;
}

// ─── Cinematic Intro ───
function CinematicIntro({ onEnter }) {
  const [phase, setPhase] = useState(0);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    const w = c.width = window.innerWidth, h = c.height = window.innerHeight;
    const pts = Array.from({ length: 150 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: -Math.random() * 0.4 - 0.1,
      sz: Math.random() * 2.5 + 0.3, op: Math.random() * 0.4, life: Math.random() * 100,
    }));
    let t = 0;
    const anim = () => {
      t++;
      ctx.clearRect(0, 0, w, h);
      pts.forEach(p => {
        p.x += p.vx + Math.sin(t * 0.008 + p.life) * 0.3;
        p.y += p.vy;
        p.op = 0.08 + Math.sin(t * 0.015 + p.life) * 0.12;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,165,116,${Math.max(0, p.op)})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(212,165,116,${0.03 * (1 - d / 90)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      animRef.current = requestAnimationFrame(anim);
    };
    if (phase >= 1) anim();
    return () => cancelAnimationFrame(animRef.current);
  }, [phase]);

  const handleEnter = (mode) => {
    sound.init(); sound.play("zoom"); setPhase(5);
    setTimeout(() => onEnter(mode), 2600);
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: COLORS.bg, zIndex: 100,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
      opacity: phase === 5 ? 0 : 1,
      transform: phase === 5 ? "scale(4)" : "scale(1)",
      transition: phase === 5 ? "all 2.5s cubic-bezier(0.4, 0, 0, 1)" : "none",
      filter: phase === 5 ? "blur(8px)" : "none",
    }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, opacity: phase >= 1 ? 1 : 0, transition: "opacity 2s ease" }} />
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(212,165,116,0.12) 0%, transparent 65%)`,
        opacity: phase >= 2 ? 1 : 0, transition: "opacity 2s ease", filter: "blur(50px)",
        animation: phase >= 2 ? "orbPulse 6s ease-in-out infinite" : "none",
      }} />
      <div style={{
        position: "absolute", top: 44,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.35em",
        color: COLORS.textMuted,
        opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? "translateY(0)" : "translateY(-10px)",
        transition: "all 1.2s ease",
      }}>LIRIO LABS PRESENTS</div>
      <div style={{
        position: "relative", zIndex: 2, textAlign: "center",
        transform: phase >= 2 ? "translateY(0) scale(1)" : "translateY(40px) scale(0.85)",
        opacity: phase >= 2 ? 1 : 0,
        transition: "all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
        <div style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: "clamp(80px, 18vw, 160px)", fontWeight: 300,
          color: COLORS.textPrimary, letterSpacing: "-0.04em", lineHeight: 0.85,
          textShadow: `0 0 100px ${COLORS.glowAmber}, 0 0 200px rgba(212,165,116,0.08)`,
        }}>COIL</div>
        <div style={{
          margin: "12px auto 0", height: 1,
          width: phase >= 3 ? 120 : 0,
          background: `linear-gradient(90deg, transparent, ${COLORS.amber}, transparent)`,
          transition: "width 1.5s cubic-bezier(0.22, 1, 0.36, 1)", transitionDelay: "0.3s",
        }} />
      </div>
      <div style={{
        position: "relative", zIndex: 2, marginTop: 28, textAlign: "center",
        opacity: phase >= 3 ? 1 : 0,
        transform: phase >= 3 ? "translateY(0)" : "translateY(25px)",
        transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(16px, 3vw, 22px)", color: COLORS.textSecondary, fontStyle: "italic", fontWeight: 300 }}>
          your thoughts have terrain
        </div>
        <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "clamp(11px, 1.8vw, 13px)", color: COLORS.textMuted, marginTop: 8, letterSpacing: "0.08em" }}>
          see the patterns you can't feel
        </div>
      </div>
      <div style={{
        position: "relative", zIndex: 2, marginTop: 56,
        display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", padding: "0 24px",
        opacity: phase >= 4 ? 1 : 0,
        transform: phase >= 4 ? "translateY(0)" : "translateY(35px)",
        transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
        {[
          { id: "explore", label: "EXPLORE TERRAIN", sub: "see demo thought patterns", icon: "◈" },
          { id: "begin", label: "BEGIN FRESH", sub: "start mapping your mind", icon: "◇" },
        ].map(opt => (
          <button key={opt.id}
            onClick={() => handleEnter(opt.id)}
            onMouseEnter={() => { setHovered(opt.id); sound.init(); sound.play("hover"); }}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === opt.id ? `${COLORS.amber}12` : `${COLORS.surface}aa`,
              border: `1px solid ${hovered === opt.id ? COLORS.amber + "55" : COLORS.surfaceLight}`,
              borderRadius: 14, padding: "22px 36px", cursor: "pointer",
              minWidth: 210, textAlign: "center",
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: hovered === opt.id ? "scale(1.05) translateY(-4px)" : "scale(1)",
              boxShadow: hovered === opt.id ? `0 12px 48px rgba(212,165,116,0.15), 0 0 80px rgba(212,165,116,0.06)` : "0 4px 20px rgba(0,0,0,0.4)",
              backdropFilter: "blur(16px)",
            }}>
            <div style={{ fontSize: 20, marginBottom: 8, color: hovered === opt.id ? COLORS.amberBright : COLORS.amber, transition: "all 0.4s ease", transform: hovered === opt.id ? "scale(1.2)" : "scale(1)" }}>{opt.icon}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.18em", color: hovered === opt.id ? COLORS.amberBright : COLORS.amber, marginBottom: 6, transition: "color 0.3s ease" }}>{opt.label}</div>
            <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 11, color: COLORS.textMuted, lineHeight: 1.4 }}>{opt.sub}</div>
          </button>
        ))}
      </div>
      <div style={{
        position: "absolute", bottom: 28,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.3em",
        color: COLORS.textMuted, opacity: phase >= 3 ? 0.35 : 0, transition: "opacity 1.5s ease",
      }}>A LIRIO LABS INSTRUMENT · v0.3</div>
      <style>{`@keyframes orbPulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.15); opacity: 0.9; } }`}</style>
    </div>
  );
}


// ─── Dual Terrain Scene ───
// Two modes:
//   SURFACE: Flat terrain (like original COIL) — camera hovers above, WASD walks, drag looks.
//   PLANET: Sphere in space — orbital camera, full planet view.
function PlanetScene({ clusters, entries, onMarkerClick, zoomTarget, viewMode, sceneSettings, coalescingLabels, mobileMovRef, mobileZoomRef }) {
  const mountRef = useRef(null);
  const sceneRef = useRef({});
  const keysRef = useRef({});
  // Surface mode: walker position + look direction on flat terrain
  const surfRef = useRef({
    x: 0, z: 4, targetX: 0, targetZ: 4,
    yaw: Math.PI, targetYaw: Math.PI,
    pitch: -0.12, targetPitch: -0.12,
  });
  // Planet orbit state
  const orbitRef = useRef({ phi: Math.PI / 3, theta: 0, radius: 7, targetPhi: Math.PI / 3, targetTheta: 0, targetRadius: 7 });
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const timeRef = useRef(0);
  const animRef = useRef(null);
  const markersRef = useRef([]);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseVec = useRef(new THREE.Vector2());
  const modeRef = useRef(viewMode || "surface");
  const mouseRef = useRef({ x: 0, y: 0 });
  // Track when clusters cross aggregation threshold (freq 3+) for formation animation
  const formingRef = useRef(new Map()); // clusterLabel → timestamp (ms)
  const thoughtStarsRef = useRef([]); // track thought star sprites separately
  const settingsRef = useRef(sceneSettings || {});
  const coalescingRef = useRef([]); // labels currently being transformed

  useEffect(() => { modeRef.current = viewMode; }, [viewMode]);
  useEffect(() => { settingsRef.current = sceneSettings || {}; }, [sceneSettings]);
  useEffect(() => { coalescingRef.current = coalescingLabels || []; }, [coalescingLabels]);

  const TERRAIN_SIZE = 200;
  const TERRAIN_SEG = 160;

  const clusterData = useMemo(() => {
    if (!clusters || clusters.length === 0) return [];
    return clusters.map(c => {
      const pos = keywordToSpherePos(c.label, 2.8);
      const { phi, theta } = hashToAngle(c.label);
      // Plane position for surface mode
      const planeX = ((theta / (Math.PI * 2)) - 0.5) * TERRAIN_SIZE;
      const planeZ = ((phi / Math.PI) - 0.5) * TERRAIN_SIZE;
      const trend = emotionToTrend(c.emotion);
      const ec = getEmotionColor(c.emotion);
      // Evolved color based on trajectory (stress/resolving/dormant shifts)
      const evolvedHex = getEvolvedColor(ec.hex, c.trajectoryState || "active", c.trajectoryStrength || 0);
      const er = parseInt(evolvedHex.slice(1, 3), 16) / 255;
      const eg = parseInt(evolvedHex.slice(3, 5), 16) / 255;
      const eb = parseInt(evolvedHex.slice(5, 7), 16) / 255;
      // Deformation thresholds — now includes erosion for dormant patterns
      const freq = c.frequency;
      const dormantErosion = (c.trajectoryState === "dormant" && c.daysSinceLastEntry > 14)
        ? Math.max(0, 1 - ((c.daysSinceLastEntry - 14) * 0.02)) : 1;
      const craterScale = trend === "stress" ? (freq < 3 ? 0 : freq < 5 ? 0.005 : freq < 8 ? 0.01 : 0.018) * dormantErosion : 0;
      const flareScale = trend === "resolved" ? (freq < 3 ? 0 : freq < 5 ? 0.004 : freq < 8 ? 0.008 : 0.014) * dormantErosion : 0;
      const neutralScale = trend === "neutral" ? (freq < 3 ? 0 : Math.min(freq * 0.003, 0.012)) * dormantErosion : 0;
      return {
        ...c, spherePos: pos, direction: pos.clone().normalize(),
        planeX, planeZ,
        craterScale, flareScale, neutralScale, trend,
        color: new THREE.Color(ec.r, ec.g, ec.b), colorData: ec,
        // Evolved color data for glow halos and terrain influence
        evolvedHex, evolvedColor: new THREE.Color(er, eg, eb),
        evolvedColorData: { hex: evolvedHex, r: er, g: eg, b: eb, label: ec.label },
        lifecycleStage: c.lifecycleStage || getLifecycleStage(freq),
      };
    });
  }, [clusters]);

  // Zoom to target — snap camera directly to the cluster location
  useEffect(() => {
    if (!zoomTarget) return;
    const { phi, theta } = hashToAngle(zoomTarget);
    const px = ((theta / (Math.PI * 2)) - 0.5) * TERRAIN_SIZE;
    const pz = ((phi / Math.PI) - 0.5) * TERRAIN_SIZE;
    // Position camera looking directly at the seed/diamond location
    // Camera sits slightly behind and looks forward so the marker is centered in view
    const approachDist = 3.5;
    surfRef.current.x = px;
    surfRef.current.z = pz + approachDist;
    surfRef.current.targetX = px;
    surfRef.current.targetZ = pz + approachDist;
    // Face directly toward the seed position
    surfRef.current.targetYaw = Math.atan2(px - px, pz - (pz + approachDist));
    surfRef.current.yaw = surfRef.current.targetYaw;
    // Tilt slightly down so the seed at y~2.8 is centered in the viewport
    surfRef.current.targetPitch = -0.08;
    surfRef.current.pitch = -0.08;
    // Planet: orbit to face that spot — slightly closer for better seed visibility
    orbitRef.current.targetPhi = phi;
    orbitRef.current.targetTheta = theta + Math.PI;
    orbitRef.current.targetRadius = 5.2;
  }, [zoomTarget]);

  // Snap camera to most recent thought on initial load
  const initialSnapDone = useRef(false);
  useEffect(() => {
    if (initialSnapDone.current || !entries || entries.length === 0) return;
    initialSnapDone.current = true;
    const lastEntry = entries[entries.length - 1];
    if (lastEntry && lastEntry.keywords && lastEntry.keywords.length > 0) {
      const keyword = lastEntry.keywords[0];
      const { phi, theta } = hashToAngle(keyword);
      const px = ((theta / (Math.PI * 2)) - 0.5) * TERRAIN_SIZE;
      const pz = ((phi / Math.PI) - 0.5) * TERRAIN_SIZE;
      // Snap immediately (not smooth) — set both current and target
      surfRef.current.x = px;
      surfRef.current.z = pz + 4;
      surfRef.current.targetX = px;
      surfRef.current.targetZ = pz + 4;
      surfRef.current.yaw = Math.atan2(px - surfRef.current.x, pz - surfRef.current.z) || 0;
      surfRef.current.targetYaw = surfRef.current.yaw;
      // Planet orbit: face that spot
      orbitRef.current.targetPhi = phi;
      orbitRef.current.targetTheta = theta + Math.PI;
      orbitRef.current.phi = phi;
      orbitRef.current.theta = theta + Math.PI;
    }
  }, [entries]);

  useEffect(() => {
    if (!mountRef.current) return;
    const el = mountRef.current;
    const w = el.clientWidth, h = el.clientHeight;

    const scene = new THREE.Scene();
    // No fog — stars and terrain need to be fully visible in both modes
    const cam = new THREE.PerspectiveCamera(60, w / h, 0.1, 800);
    const ren = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    ren.setSize(w, h); ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    ren.setClearColor(0x060504, 1); ren.toneMapping = THREE.ACESFilmicToneMapping;
    ren.toneMappingExposure = 1.2; el.appendChild(ren.domElement);

    // ═══ LIGHTING — gentle scene lights, terrain self-illuminates via emissive ═══
    const ambientLight = new THREE.AmbientLight(0xd8ccc0, 0.35);
    scene.add(ambientLight);
    const hemiLight = new THREE.HemisphereLight(0xc8beb0, 0x3a2a1a, 0.25);
    scene.add(hemiLight);
    // Soft directional for subtle depth/shadow definition
    const dl = new THREE.DirectionalLight(0xf0e0c8, 0.2);
    dl.position.set(4, 10, 3); scene.add(dl);
    const dl2 = new THREE.DirectionalLight(0xc8d0e0, 0.12);
    dl2.position.set(-5, 6, -4); scene.add(dl2);
    const dl3 = new THREE.DirectionalLight(0xd0c8b8, 0.1);
    dl3.position.set(0, -3, -5); scene.add(dl3);
    // Player follow light for local warmth
    const pl = new THREE.PointLight(0xd4a574, 0.3, 30); pl.position.set(0, 6, 0); scene.add(pl);

    // ═══ SURFACE: Flat terrain (original COIL feel) ═══
    const terrainGeo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, TERRAIN_SEG, TERRAIN_SEG);
    terrainGeo.rotateX(-Math.PI / 2);
    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.7, metalness: 0.05,
      flatShading: true, transparent: false, side: THREE.DoubleSide,
      emissive: 0x2a2018, emissiveIntensity: 0.6,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    scene.add(terrainMesh);

    // Terrain wireframe overlay
    const terrainWireGeo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, 80, 80);
    terrainWireGeo.rotateX(-Math.PI / 2);
    const terrainWireMat = new THREE.MeshBasicMaterial({ color: 0xd4a574, wireframe: true, transparent: true, opacity: 0.08 });
    const terrainWireMesh = new THREE.Mesh(terrainWireGeo, terrainWireMat);
    terrainWireMesh.position.y = 0.02; scene.add(terrainWireMesh);

    // Ambient particles floating above terrain
    const particleCount = 800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePos[i*3] = (Math.random() - 0.5) * TERRAIN_SIZE;
      particlePos[i*3+1] = Math.random() * 5 + 0.3;
      particlePos[i*3+2] = (Math.random() - 0.5) * TERRAIN_SIZE;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4a574, size: 0.025, transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ═══ PLANET: Sphere ═══
    const sphereSeg = 128;
    const sphereGeo = new THREE.SphereGeometry(2.8, sphereSeg, sphereSeg);
    const sphereMat = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.7, metalness: 0.05,
      flatShading: true, transparent: false, side: THREE.FrontSide,
      emissive: 0x201810, emissiveIntensity: 0.5,
    });
    const planet = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(planet);

    const wireGeo = new THREE.SphereGeometry(2.805, 48, 48);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xd4a574, wireframe: true, transparent: true, opacity: 0.05 });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // Atmosphere rim
    const atmosGeo = new THREE.SphereGeometry(2.95, 48, 48);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `varying vec3 vNormal; varying vec3 vWorldPos;
        void main() { vNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying vec3 vNormal; varying vec3 vWorldPos; uniform vec3 uCamPos;
        void main() { vec3 viewDir = normalize(uCamPos - vWorldPos); float rim = 1.0 - max(0.0, dot(vNormal, viewDir)); float i = pow(rim, 4.0); gl_FragColor = vec4(0.83, 0.65, 0.46, i * 0.18); }`,
      uniforms: { uCamPos: { value: new THREE.Vector3() } },
      side: THREE.FrontSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosMesh);

    // ═══ GALAXY: Realistic star field — looks like actual space ═══
    const emotionList = Object.values(EMOTION_COLORS);
    const totalStars = 8000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(totalStars * 3);
    const starColors = new Float32Array(totalStars * 3);
    const starSizes = new Float32Array(totalStars);

    for (let i = 0; i < totalStars; i++) {
      let x, y, z;

      if (i < totalStars * 0.4) {
        // Milky way band — dense stripe of stars across the sky
        const r = 60 + Math.random() * 140;
        const bandAngle = Math.random() * Math.PI * 2;
        const bandWidth = (Math.random() - 0.5) * 0.15; // tight band
        const tiltAngle = 0.4; // tilted 23 degrees like real milky way
        x = r * Math.cos(bandAngle);
        y = r * (bandWidth + Math.sin(bandAngle) * Math.sin(tiltAngle) * 0.3);
        z = r * Math.sin(bandAngle);
      } else if (i < totalStars * 0.7) {
        // General sky stars — scattered everywhere
        const r = 50 + Math.random() * 150;
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        x = r * Math.sin(ph) * Math.cos(th);
        y = r * Math.cos(ph);
        z = r * Math.sin(ph) * Math.sin(th);
      } else if (i < totalStars * 0.88) {
        // Nearby bright stars — visible individual stars at medium distance
        const r = 20 + Math.random() * 40;
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        x = r * Math.sin(ph) * Math.cos(th);
        y = r * Math.cos(ph);
        z = r * Math.sin(ph) * Math.sin(th);
      } else {
        // Distant deep field — very far, very faint
        const r = 150 + Math.random() * 200;
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        x = r * Math.sin(ph) * Math.cos(th);
        y = r * Math.cos(ph);
        z = r * Math.sin(ph) * Math.sin(th);
      }

      starPos[i*3] = x; starPos[i*3+1] = y; starPos[i*3+2] = z;

      // Realistic star colors: mostly white/blue-white/yellow-white with rare colored ones
      const colorRoll = Math.random();
      let sr, sg, sb;
      if (colorRoll < 0.4) {
        // White stars
        sr = 0.95 + Math.random() * 0.05; sg = 0.93 + Math.random() * 0.07; sb = 0.98;
      } else if (colorRoll < 0.6) {
        // Blue-white (hot stars)
        sr = 0.8 + Math.random() * 0.1; sg = 0.85 + Math.random() * 0.1; sb = 1.0;
      } else if (colorRoll < 0.8) {
        // Yellow-white (sun-like)
        sr = 1.0; sg = 0.92 + Math.random() * 0.08; sb = 0.75 + Math.random() * 0.15;
      } else if (colorRoll < 0.9) {
        // Orange (cooler stars)
        sr = 1.0; sg = 0.7 + Math.random() * 0.15; sb = 0.4 + Math.random() * 0.2;
      } else {
        // Subtle emotion tint on rare stars
        const ec = emotionList[i % emotionList.length];
        sr = 0.7 + ec.r * 0.3; sg = 0.7 + ec.g * 0.3; sb = 0.7 + ec.b * 0.3;
      }
      starColors[i*3] = sr; starColors[i*3+1] = sg; starColors[i*3+2] = sb;

      // Size based on distance — visible from any camera distance
      const dist = Math.sqrt(x*x + y*y + z*z);
      if (dist < 30) starSizes[i] = 0.15 + Math.random() * 0.3;
      else if (dist < 80) starSizes[i] = 0.08 + Math.random() * 0.18;
      else starSizes[i] = 0.04 + Math.random() * 0.1;
      // Bright beacon stars scattered around (~2%)
      if (Math.random() < 0.02) starSizes[i] = 0.3 + Math.random() * 0.25;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    starGeo.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
    const starMat = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size; attribute vec3 color; varying vec3 vColor;
        void main() { vColor = color; vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (250.0 / -mvp.z); gl_Position = projectionMatrix * mvp; }`,
      fragmentShader: `
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - vec2(0.5)); if (d > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.15, d);
          float glow = 1.0 - smoothstep(0.0, 0.4, d);
          vec3 col = vColor * glow * 0.6 + vec3(1.0) * core * 0.8;
          gl_FragColor = vec4(col, glow * 0.85); }`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ═══ DEEP SPACE ENVIRONMENT — NASA-grade cosmic backdrop ═══
    // Everything below creates a layered, volumetric space that feels
    // alive and deep without competing with the COIL thought terrain.

    // ── NEBULAE: Multi-layered volumetric gas clouds ──
    // Each nebula is built from multiple overlapping shells at different
    // scales/opacities to create real depth, not flat blobs.
    const nebulaGroup = new THREE.Group();
    const nebulaConfigs = [
      // { emotion, angle (radians), dist, scale, shells }
      { color: [0.35, 0.15, 0.55], angle: 0.3, dist: 110, scale: 28, tilt: 0.2 },      // deep violet
      { color: [0.18, 0.35, 0.60], angle: 1.1, dist: 140, scale: 35, tilt: -0.3 },     // cerulean blue
      { color: [0.55, 0.20, 0.25], angle: 2.0, dist: 95, scale: 22, tilt: 0.4 },       // ember red
      { color: [0.20, 0.45, 0.35], angle: 2.9, dist: 130, scale: 30, tilt: -0.15 },    // teal
      { color: [0.50, 0.35, 0.15], angle: 3.8, dist: 105, scale: 25, tilt: 0.35 },     // amber gold
      { color: [0.30, 0.20, 0.50], angle: 4.7, dist: 150, scale: 40, tilt: -0.25 },    // indigo
      { color: [0.45, 0.15, 0.40], angle: 5.5, dist: 120, scale: 32, tilt: 0.1 },      // magenta
    ];
    nebulaConfigs.forEach(cfg => {
      const cx = Math.cos(cfg.angle) * cfg.dist;
      const cy = 50 + Math.sin(cfg.tilt) * cfg.dist * 0.3; // elevated well above terrain plane
      const cz = Math.sin(cfg.angle) * cfg.dist;
      // Multiple shells per nebula for volumetric depth
      const shellCount = 5;
      for (let s = 0; s < shellCount; s++) {
        const shellScale = cfg.scale * (0.4 + s * 0.2);
        const shellOp = (0.012 - s * 0.0015) * (1 + Math.random() * 0.3);
        const geo = new THREE.SphereGeometry(shellScale, 12, 12);
        // Deform vertices for organic cloud shape
        const verts = geo.attributes.position;
        for (let v = 0; v < verts.count; v++) {
          const vx = verts.getX(v), vy = verts.getY(v), vz = verts.getZ(v);
          const n = fbm3D(vx * 0.08 + s * 3, vy * 0.08, vz * 0.08, 3);
          const scale = 1 + n * 0.35;
          verts.setXYZ(v, vx * scale, vy * scale * (0.5 + Math.random() * 0.3), vz * scale);
        }
        verts.needsUpdate = true;
        const r = cfg.color[0] + s * 0.03, g = cfg.color[1] + s * 0.02, b = cfg.color[2] + s * 0.03;
        const mat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(r, g, b),
          transparent: true, opacity: Math.max(0.003, shellOp),
          blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(
          cx + (Math.random() - 0.5) * shellScale * 0.3,
          cy + (Math.random() - 0.5) * shellScale * 0.2,
          cz + (Math.random() - 0.5) * shellScale * 0.3
        );
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        nebulaGroup.add(mesh);
      }
      // Bright inner core glow
      const coreGeo = new THREE.SphereGeometry(cfg.scale * 0.15, 8, 8);
      const coreMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cfg.color[0] * 1.5, cfg.color[1] * 1.5, cfg.color[2] * 1.5),
        transparent: true, opacity: 0.02,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.set(cx, cy, cz);
      nebulaGroup.add(core);
    });
    scene.add(nebulaGroup);
    // Cache base opacities for scene customization
    nebulaGroup.children.forEach(c => { if (c.material) c.material._baseOp = c.material.opacity; });

    // ── DISTANT PLANETS: Large celestial bodies on the horizon ──
    const distantBodies = new THREE.Group();
    const planetConfigs = [
      // Gas giant — banded, warm colors, large, high in the sky
      { dist: 280, angle: 0.8, elev: 120, radius: 14, color: 0x8b6b4a, ring: true, ringColor: 0xa08060, tilt: 0.4 },
      // Ice planet — blue-white, medium, far, upper sky
      { dist: 320, angle: 3.2, elev: 85, radius: 9, color: 0x4a6a8b, ring: false, tilt: 0.15 },
      // Rocky body — small, reddish, high above horizon
      { dist: 200, angle: 5.0, elev: 140, radius: 4, color: 0x8b5a4a, ring: false, tilt: 0.3 },
      // Distant moon — tiny, pale, very far, above
      { dist: 350, angle: 1.9, elev: 65, radius: 4.5, color: 0x7a7a7a, ring: false, tilt: 0.05 },
    ];
    planetConfigs.forEach(cfg => {
      const px = Math.cos(cfg.angle) * cfg.dist;
      const py = cfg.elev;
      const pz = Math.sin(cfg.angle) * cfg.dist;

      // Planet sphere with subtle shading
      const pGeo = new THREE.SphereGeometry(cfg.radius, 32, 32);
      const pMat = new THREE.MeshStandardMaterial({
        color: cfg.color, roughness: 0.85, metalness: 0.02,
        emissive: cfg.color, emissiveIntensity: 0.08,
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.set(px, py, pz);
      pMesh.rotation.z = cfg.tilt;
      distantBodies.add(pMesh);

      // Atmosphere glow for each planet
      const aGeo = new THREE.SphereGeometry(cfg.radius * 1.08, 24, 24);
      const baseColor = new THREE.Color(cfg.color);
      const aMat = new THREE.ShaderMaterial({
        vertexShader: `varying vec3 vNormal; varying vec3 vWorldPos;
          void main() { vNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `varying vec3 vNormal; varying vec3 vWorldPos; uniform vec3 uCamPos; uniform vec3 uColor;
          void main() { vec3 viewDir = normalize(uCamPos - vWorldPos); float rim = 1.0 - max(0.0, dot(vNormal, viewDir)); float i = pow(rim, 3.0); gl_FragColor = vec4(uColor, i * 0.12); }`,
        uniforms: { uCamPos: { value: new THREE.Vector3() }, uColor: { value: new THREE.Vector3(baseColor.r, baseColor.g, baseColor.b) } },
        side: THREE.FrontSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
      });
      const aMesh = new THREE.Mesh(aGeo, aMat);
      aMesh.position.set(px, py, pz);
      distantBodies.add(aMesh);

      // Rings for gas giant
      if (cfg.ring) {
        const ringGeo = new THREE.RingGeometry(cfg.radius * 1.4, cfg.radius * 2.2, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: cfg.ringColor, transparent: true, opacity: 0.06,
          side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.set(px, py, pz);
        ringMesh.rotation.x = Math.PI / 2 + cfg.tilt;
        ringMesh.rotation.y = 0.3;
        distantBodies.add(ringMesh);

        // Second thinner ring for depth
        const ring2Geo = new THREE.RingGeometry(cfg.radius * 1.6, cfg.radius * 1.85, 64);
        const ring2Mat = new THREE.MeshBasicMaterial({
          color: 0xc8a878, transparent: true, opacity: 0.035,
          side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false,
        });
        const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
        ring2Mesh.position.set(px, py, pz);
        ring2Mesh.rotation.x = Math.PI / 2 + cfg.tilt;
        ring2Mesh.rotation.y = 0.3;
        distantBodies.add(ring2Mesh);
      }
    });

    // ── DISTANT BRIGHT STARS (suns): Large glowing orbs ──
    const sunConfigs = [
      { dist: 380, angle: 0.5, elev: 160, radius: 5, color: [1.0, 0.9, 0.7], intensity: 0.04 },  // warm yellow — high up
      { dist: 400, angle: 2.8, elev: 100, radius: 3.5, color: [0.7, 0.8, 1.0], intensity: 0.03 },  // blue white — upper sky
      { dist: 340, angle: 4.2, elev: 130, radius: 2, color: [1.0, 0.6, 0.4], intensity: 0.025 },   // red dwarf — above horizon
    ];
    sunConfigs.forEach(cfg => {
      const sx = Math.cos(cfg.angle) * cfg.dist;
      const sy = cfg.elev;
      const sz = Math.sin(cfg.angle) * cfg.dist;

      // Bloom core
      const sGeo = new THREE.SphereGeometry(cfg.radius, 16, 16);
      const sMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cfg.color[0], cfg.color[1], cfg.color[2]),
        transparent: true, opacity: 0.3,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      sMesh.position.set(sx, sy, sz);
      distantBodies.add(sMesh);

      // Wide glow halo
      const hGeo = new THREE.SphereGeometry(cfg.radius * 4, 16, 16);
      const hMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cfg.color[0] * 0.6, cfg.color[1] * 0.6, cfg.color[2] * 0.6),
        transparent: true, opacity: cfg.intensity,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.set(sx, sy, sz);
      distantBodies.add(hMesh);

      // Lens flare cross — subtle light rays
      const flareGeo = new THREE.PlaneGeometry(cfg.radius * 12, cfg.radius * 0.3);
      const flareMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cfg.color[0], cfg.color[1], cfg.color[2]),
        transparent: true, opacity: 0.015,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      });
      const flare1 = new THREE.Mesh(flareGeo, flareMat);
      flare1.position.set(sx, sy, sz);
      flare1.userData.isFlare = true;
      flare1.userData.baseRotZ = 0;
      distantBodies.add(flare1);
      const flare2 = new THREE.Mesh(flareGeo.clone(), flareMat.clone());
      flare2.position.set(sx, sy, sz);
      flare2.userData.isFlare = true;
      flare2.userData.baseRotZ = Math.PI / 2;
      distantBodies.add(flare2);
    });
    scene.add(distantBodies);

    // ── ASTEROID BELT: Ring of tiny rocky fragments ──
    const asteroidBelt = new THREE.Group();
    const asteroidCount = 600;
    const beltGeo = new THREE.BufferGeometry();
    const beltPos = new Float32Array(asteroidCount * 3);
    const beltSizes = new Float32Array(asteroidCount);
    const beltColors = new Float32Array(asteroidCount * 3);

    for (let i = 0; i < asteroidCount; i++) {
      // Torus-shaped distribution — belt around the mid-plane
      const beltAngle = Math.random() * Math.PI * 2;
      const beltRadius = 80 + Math.random() * 40; // pushed out to 80-120 units
      const beltThickness = (Math.random() - 0.5) * 4;
      const wobble = (Math.random() - 0.5) * 6;

      beltPos[i*3]     = Math.cos(beltAngle) * (beltRadius + wobble);
      beltPos[i*3 + 1] = 40 + beltThickness + Math.sin(beltAngle * 3 + i) * 0.8; // elevated 40 units above terrain
      beltPos[i*3 + 2] = Math.sin(beltAngle) * (beltRadius + wobble);

      beltSizes[i] = 0.06 + Math.random() * 0.18;
      // Asteroid colors: grays, browns, occasional metallic glint
      const shade = 0.3 + Math.random() * 0.25;
      const warmth = Math.random() * 0.08;
      beltColors[i*3]     = shade + warmth;
      beltColors[i*3 + 1] = shade;
      beltColors[i*3 + 2] = shade - warmth * 0.5;
    }
    beltGeo.setAttribute("position", new THREE.BufferAttribute(beltPos, 3));
    beltGeo.setAttribute("size", new THREE.BufferAttribute(beltSizes, 1));
    beltGeo.setAttribute("color", new THREE.BufferAttribute(beltColors, 3));

    const beltMat = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size; attribute vec3 color; varying vec3 vColor; varying float vDist;
        void main() { vColor = color; vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvp.z; gl_PointSize = size * (120.0 / -mvp.z); gl_Position = projectionMatrix * mvp; }`,
      fragmentShader: `
        varying vec3 vColor; varying float vDist;
        void main() { float d = length(gl_PointCoord - vec2(0.5)); if (d > 0.45) discard;
          float shape = 1.0 - smoothstep(0.0, 0.45, d);
          float fade = clamp(1.0 - vDist / 300.0, 0.1, 1.0);
          gl_FragColor = vec4(vColor * shape, shape * 0.7 * fade); }`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const beltPoints = new THREE.Points(beltGeo, beltMat);
    // Tilt belt ~15 degrees for visual interest
    beltPoints.rotation.x = 0.26;
    beltPoints.rotation.z = 0.1;
    asteroidBelt.add(beltPoints);

    // A few larger "hero" asteroids — actual geometry, not points
    // Pushed far out (120-180 units) so they never intersect the terrain
    for (let i = 0; i < 6; i++) {
      const aSize = 0.5 + Math.random() * 0.8;
      const aGeo = new THREE.IcosahedronGeometry(aSize, 0);
      const aVerts = aGeo.attributes.position;
      for (let v = 0; v < aVerts.count; v++) {
        const scale = 0.7 + Math.random() * 0.6;
        aVerts.setXYZ(v, aVerts.getX(v) * scale, aVerts.getY(v) * scale, aVerts.getZ(v) * scale);
      }
      aVerts.needsUpdate = true;
      aGeo.computeVertexNormals();
      const aMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0.35 + Math.random() * 0.15, 0.30 + Math.random() * 0.1, 0.25 + Math.random() * 0.1),
        transparent: true, opacity: 0.4,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const aMesh = new THREE.Mesh(aGeo, aMat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 120 + Math.random() * 60;
      aMesh.position.set(
        Math.cos(angle) * radius,
        40 + Math.random() * 30,
        Math.sin(angle) * radius
      );
      aMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      aMesh.userData = { orbitAngle: angle, orbitRadius: radius, spinSpeed: 0.001 + Math.random() * 0.003 };
      asteroidBelt.add(aMesh);
    }
    scene.add(asteroidBelt);
    asteroidBelt.children.forEach(c => { if (c.material && !c.material.isShaderMaterial) c.material._baseOp = c.material.opacity; });

    // ── COSMIC DUST: Ultra-fine ambient particles layered at multiple depths ──
    // These are NOT thought stars — they're atmospheric, like looking through
    // a lens at deep space. Multiple layers at different distances.
    const cosmicDustGroup = new THREE.Group();
    const dustLayers = [
      { count: 3000, minR: 15, maxR: 60, size: 0.015, opacity: 0.2, color: 0xc8beb0 },  // near dust
      { count: 2000, minR: 60, maxR: 150, size: 0.025, opacity: 0.12, color: 0xa09888 },  // mid dust
      { count: 1500, minR: 150, maxR: 350, size: 0.04, opacity: 0.06, color: 0x807060 },  // far dust
    ];
    dustLayers.forEach(layer => {
      const dGeo = new THREE.BufferGeometry();
      const dPos = new Float32Array(layer.count * 3);
      for (let i = 0; i < layer.count; i++) {
        const r = layer.minR + Math.random() * (layer.maxR - layer.minR);
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        dPos[i*3]     = r * Math.sin(ph) * Math.cos(th);
        dPos[i*3 + 1] = r * Math.cos(ph);
        dPos[i*3 + 2] = r * Math.sin(ph) * Math.sin(th);
      }
      dGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
      const dMat = new THREE.PointsMaterial({
        color: layer.color, size: layer.size, transparent: true, opacity: layer.opacity,
        blending: THREE.AdditiveBlending, sizeAttenuation: true, depthWrite: false,
      });
      const dPoints = new THREE.Points(dGeo, dMat);
      cosmicDustGroup.add(dPoints);
    });
    scene.add(cosmicDustGroup);

    // ── COMETS: Longer tails, more dramatic ──
    const cometGroup = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const cometGeo = new THREE.BufferGeometry();
      const tailLen = 14; // longer tails
      const cometPositions = new Float32Array(tailLen * 3);
      const cometOpacities = new Float32Array(tailLen);
      const cx = (Math.random() - 0.5) * 160;
      const cy = (Math.random() - 0.5) * 80;
      const cz = 50 + Math.random() * 100;
      const dx = (Math.random() - 0.5) * 0.8;
      const dy = (Math.random() - 0.5) * 0.3;
      for (let j = 0; j < tailLen; j++) {
        cometPositions[j*3] = cx - dx * j * 1.8;
        cometPositions[j*3+1] = cy - dy * j * 1.8;
        cometPositions[j*3+2] = cz;
        cometOpacities[j] = 1.0 - (j / tailLen);
      }
      cometGeo.setAttribute("position", new THREE.BufferAttribute(cometPositions, 3));
      cometGeo.setAttribute("opacity", new THREE.BufferAttribute(cometOpacities, 1));
      const cometMat = new THREE.ShaderMaterial({
        vertexShader: `attribute float opacity; varying float vOpacity;
          void main() { vOpacity = opacity; gl_PointSize = mix(4.0, 1.0, 1.0 - opacity);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `varying float vOpacity;
          void main() { float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float a = (1.0 - d * 2.0) * vOpacity * 0.7;
            gl_FragColor = vec4(0.95, 0.88, 0.72, a); }`,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const comet = new THREE.Points(cometGeo, cometMat);
      comet.userData = { speed: 0.015 + Math.random() * 0.025, dx, dy };
      cometGroup.add(comet);
    }
    scene.add(cometGroup);

    // Marker groups (separate for each mode so visibility toggles cleanly)
    const surfaceMarkerGroup = new THREE.Group();
    const planetMarkerGroup = new THREE.Group();
    scene.add(surfaceMarkerGroup);
    scene.add(planetMarkerGroup);

    sceneRef.current = {
      scene, cam, ren,
      terrainMesh, terrainGeo, terrainWireMesh, particles, particleGeo,
      planet, sphereGeo, wireMesh, atmosMat, atmosMesh,
      starField, nebulaGroup, cometGroup, distantBodies, asteroidBelt, cosmicDustGroup,
      pl, ambientLight, hemiLight, dl, dl2, dl3,
      surfaceMarkerGroup, planetMarkerGroup,
    };

    // ─── Input handlers ───
    const onKeyDown = (e) => {
      const t = e.target.tagName;
      if (t === "TEXTAREA" || t === "INPUT") return;
      keysRef.current[e.key.toLowerCase()] = true;
      keysRef.current[e.code] = true;
    };
    const onKeyUp = (e) => { keysRef.current[e.key.toLowerCase()] = false; keysRef.current[e.code] = false; };

    const applyDrag = (dx, dy) => {
      if (modeRef.current === "surface") {
        // Surface: drag rotates your view direction (yaw/pitch only)
        surfRef.current.targetYaw -= dx * 0.004;
        surfRef.current.targetPitch = Math.max(-0.5, Math.min(0.3, surfRef.current.targetPitch - dy * 0.003));
      } else {
        // Planet: drag orbits around sphere — responsive rotation
        orbitRef.current.targetTheta -= dx * 0.008;
        orbitRef.current.targetPhi = Math.max(0.15, Math.min(Math.PI - 0.15, orbitRef.current.targetPhi - dy * 0.008));
      }
    };

    const onMouseDown = (e) => {
      if (e.target.tagName === "TEXTAREA" || e.target.tagName === "BUTTON" || e.target.tagName === "INPUT") return;
      e.preventDefault(); // prevent browser from stealing drag events
      dragRef.current = { active: true, lastX: e.clientX, lastY: e.clientY, moved: false };
    };
    const onMouseMove = (e) => {
      if (!dragRef.current.active) return;
      e.preventDefault();
      const dx = e.clientX - dragRef.current.lastX;
      const dy = e.clientY - dragRef.current.lastY;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragRef.current.moved = true;
      applyDrag(dx, dy);
      dragRef.current.lastX = e.clientX; dragRef.current.lastY = e.clientY;
    };
    const onMouseUp = (e) => {
      if (!dragRef.current.moved && dragRef.current.active) {
        const rect = el.getBoundingClientRect();
        mouseVec.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseVec.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycasterRef.current.setFromCamera(mouseVec.current, cam);
        const hits = raycasterRef.current.intersectObjects(markersRef.current, false);
        if (hits.length > 0 && hits[0].object.userData.clusterLabel) {
          const ud = hits[0].object.userData;
          if (ud.isThoughtStar) {
            onMarkerClick({ type: "star", clusterLabel: ud.clusterLabel, thoughtId: ud.thoughtId });
            const cl = clusterData.find(cc => cc.label === ud.clusterLabel);
            sound.play(getLifecycleClickSound(cl ? cl.frequency : 1, cl ? cl.emotion : null));
          } else {
            onMarkerClick({ type: "diamond", clusterLabel: ud.clusterLabel });
            const cl = clusterData.find(cc => cc.label === ud.clusterLabel);
            sound.play(getLifecycleClickSound(cl ? cl.frequency : 3, cl ? cl.emotion : null));
          }
        }
      }
      dragRef.current.active = false;
    };

    const onWheel = (e) => {
      if (e.target.tagName === "TEXTAREA" || e.target.closest("[data-sidebar]") || e.target.closest("[data-panel]")) return;
      e.preventDefault();
      if (modeRef.current === "planet") {
        orbitRef.current.targetRadius = Math.max(4, Math.min(14, orbitRef.current.targetRadius + e.deltaY * 0.005));
      }
      // Surface: no scroll action (you're walking)
    };

    let lastTouches = null;
    const onTouchStart = (e) => {
      if (e.target.tagName === "TEXTAREA" || e.target.tagName === "BUTTON" || e.target.tagName === "INPUT") return;
      if (e.touches.length === 1) {
        dragRef.current = { active: true, lastX: e.touches[0].clientX, lastY: e.touches[0].clientY, moved: false };
      }
      if (e.touches.length === 2) {
        lastTouches = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }, { x: e.touches[1].clientX, y: e.touches[1].clientY }];
      }
    };
    const onTouchMove = (e) => {
      e.preventDefault();
      if (e.touches.length === 1 && dragRef.current.active) {
        const dx = e.touches[0].clientX - dragRef.current.lastX;
        const dy = e.touches[0].clientY - dragRef.current.lastY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragRef.current.moved = true;
        applyDrag(dx, dy);
        dragRef.current.lastX = e.touches[0].clientX; dragRef.current.lastY = e.touches[0].clientY;
      }
      if (e.touches.length === 2 && lastTouches) {
        if (modeRef.current === "planet") {
          const curDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
          const prevDist = Math.hypot(lastTouches[0].x - lastTouches[1].x, lastTouches[0].y - lastTouches[1].y);
          orbitRef.current.targetRadius = Math.max(4, Math.min(14, orbitRef.current.targetRadius - (curDist - prevDist) * 0.015));
        }
        const avgX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const avgY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        const prevAvgX = (lastTouches[0].x + lastTouches[1].x) / 2;
        const prevAvgY = (lastTouches[0].y + lastTouches[1].y) / 2;
        applyDrag(avgX - prevAvgX, avgY - prevAvgY);
        lastTouches = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }, { x: e.touches[1].clientX, y: e.touches[1].clientY }];
      }
    };
    const onTouchEnd = (e) => {
      if (!dragRef.current.moved && dragRef.current.active && e.changedTouches.length === 1) {
        const rect = el.getBoundingClientRect();
        const touch = e.changedTouches[0];
        mouseVec.current.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseVec.current.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        raycasterRef.current.setFromCamera(mouseVec.current, cam);
        const hits = raycasterRef.current.intersectObjects(markersRef.current, false);
        if (hits.length > 0 && hits[0].object.userData.clusterLabel) {
          const ud = hits[0].object.userData;
          if (ud.isThoughtStar) {
            onMarkerClick({ type: "star", clusterLabel: ud.clusterLabel, thoughtId: ud.thoughtId });
            const cl = clusterData.find(cc => cc.label === ud.clusterLabel);
            sound.play(getLifecycleClickSound(cl ? cl.frequency : 1, cl ? cl.emotion : null));
          } else {
            onMarkerClick({ type: "diamond", clusterLabel: ud.clusterLabel });
            const cl = clusterData.find(cc => cc.label === ud.clusterLabel);
            sound.play(getLifecycleClickSound(cl ? cl.frequency : 3, cl ? cl.emotion : null));
          }
        }
      }
      dragRef.current.active = false; lastTouches = null;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    const onResize = () => { cam.aspect = el.clientWidth / el.clientHeight; cam.updateProjectionMatrix(); ren.setSize(el.clientWidth, el.clientHeight); };
    window.addEventListener("resize", onResize);

    // ─── Animate ───
    const animate = () => {
      timeRef.current += 0.004;
      const t = timeRef.current;
      const keys = keysRef.current;
      const surf = surfRef.current;
      const orbit = orbitRef.current;
      const mode = modeRef.current;

      // ─── Toggle geometry visibility ───
      terrainMesh.visible = (mode === "surface");
      terrainWireMesh.visible = (mode === "surface");
      particles.visible = (mode === "surface");
      planet.visible = (mode === "planet");
      wireMesh.visible = (mode === "planet");
      atmosMesh.visible = (mode === "planet");
      surfaceMarkerGroup.visible = (mode === "surface");
      planetMarkerGroup.visible = (mode === "planet");

      if (mode === "surface") {
        // ═══ SURFACE MODE: Walk on flat terrain ═══
        const walkSpeed = 0.35;
        const cosYaw = Math.cos(surf.yaw), sinYaw = Math.sin(surf.yaw);
        // WASD + arrows all walk
        if (keys["w"] || keys["arrowup"]) { surf.targetX += sinYaw * walkSpeed; surf.targetZ += cosYaw * walkSpeed; }
        if (keys["s"] || keys["arrowdown"]) { surf.targetX -= sinYaw * walkSpeed; surf.targetZ -= cosYaw * walkSpeed; }
        if (keys["a"] || keys["arrowleft"]) { surf.targetX += cosYaw * walkSpeed; surf.targetZ -= sinYaw * walkSpeed; }
        if (keys["d"] || keys["arrowright"]) { surf.targetX -= cosYaw * walkSpeed; surf.targetZ += sinYaw * walkSpeed; }
        // Mobile joystick movement
        if (mobileMovRef && mobileMovRef.current) {
          const mx = mobileMovRef.current.x, my = mobileMovRef.current.y;
          if (Math.abs(mx) > 0.05 || Math.abs(my) > 0.05) {
            // y maps to forward/back (negative y = forward), x maps to strafe
            surf.targetX += sinYaw * (-my) * walkSpeed + cosYaw * (-mx) * walkSpeed;
            surf.targetZ += cosYaw * (-my) * walkSpeed - sinYaw * (-mx) * walkSpeed;
          }
        }
        // Shift to sprint
        if (keys["shift"]) {
          const sprintMult = 2.5;
          if (keys["w"] || keys["arrowup"]) { surf.targetX += sinYaw * walkSpeed * (sprintMult - 1); surf.targetZ += cosYaw * walkSpeed * (sprintMult - 1); }
          if (keys["s"] || keys["arrowdown"]) { surf.targetX -= sinYaw * walkSpeed * (sprintMult - 1); surf.targetZ -= cosYaw * walkSpeed * (sprintMult - 1); }
        }

        // Wrap position so terrain feels like a planet (walk off one side, appear on the other)
        const halfT = TERRAIN_SIZE * 0.5;
        if (surf.targetX > halfT) { surf.targetX -= TERRAIN_SIZE; surf.x -= TERRAIN_SIZE; }
        if (surf.targetX < -halfT) { surf.targetX += TERRAIN_SIZE; surf.x += TERRAIN_SIZE; }
        if (surf.targetZ > halfT) { surf.targetZ -= TERRAIN_SIZE; surf.z -= TERRAIN_SIZE; }
        if (surf.targetZ < -halfT) { surf.targetZ += TERRAIN_SIZE; surf.z += TERRAIN_SIZE; }

        // Smooth interpolation — responsive movement
        surf.x += (surf.targetX - surf.x) * 0.14;
        surf.z += (surf.targetZ - surf.z) * 0.14;
        surf.yaw += (surf.targetYaw - surf.yaw) * 0.12;
        surf.pitch += (surf.targetPitch - surf.pitch) * 0.12;

        // Camera: hover above terrain, looking forward — clean FPV, more terrain visible
        const camHeight = 4.0 + Math.sin(t * 0.25) * 0.15;

        // Terrain mesh follows the player — always centered, never see edges
        terrainMesh.position.x = surf.x;
        terrainMesh.position.z = surf.z;
        terrainWireMesh.position.x = surf.x;
        terrainWireMesh.position.z = surf.z;

        cam.position.set(surf.x, camHeight, surf.z);

        // Look ahead + slightly down so most of the view is terrain, not sky
        const lookDist = 12;
        const lookX = surf.x + Math.sin(surf.yaw) * lookDist;
        const lookY = camHeight * 0.15 + surf.pitch * 8;
        const lookZ = surf.z + Math.cos(surf.yaw) * lookDist;
        cam.up.set(0, 1, 0);
        cam.lookAt(lookX, lookY, lookZ);

        // Point light follows player position for local illumination
        pl.position.set(surf.x, 4, surf.z);

        // ─── Deform flat terrain ───
        // Vertices are in LOCAL space (centered on player). Convert to WORLD for noise/clusters.
        const tPos = terrainGeo.attributes.position;
        const tCols = new Float32Array(tPos.count * 3);

        for (let i = 0; i < tPos.count; i++) {
          const lx = tPos.getX(i), lz = tPos.getZ(i); // local coords
          // World position = local + mesh offset (which is surf.x/z)
          const wx = lx + surf.x;
          const wz = lz + surf.z;

          // Base terrain from fbm using world coords (consistent no matter where you walk)
          let elev = fbm3D(wx * 0.08 + t * 0.04, 0, wz * 0.08 + t * 0.03, 5) * 1.2;
          elev += Math.sin(wx * 0.06 + t * 0.1) * Math.cos(wz * 0.06 + t * 0.08) * 0.4;

          // Base color: warm earth tones
          const nh = (elev + 1) / 2.2;
          let cr, cg, cb;
          if (nh > 0.6) { cr = 0.78; cg = 0.42; cb = 0.32; }
          else if (nh < 0.3) { cr = 0.38; cg = 0.52; cb = 0.4; }
          else { cr = 0.58 + nh * 0.12; cg = 0.44 + nh * 0.08; cb = 0.32; }

          // Subtle terrain ripple near player (lx,lz ~ 0 since centered on player)
          const md = Math.hypot(lx, lz);
          if (md < 4) elev += Math.sin(md * 2.5 - t * 4) * 0.05 * Math.max(0, 1 - md / 4);

          // Cluster deformations — wrapped distance for toroidal surface
          for (const cluster of clusterData) {
            let dx = wx - cluster.planeX;
            let dz = wz - cluster.planeZ;
            if (dx > halfT) dx -= TERRAIN_SIZE;
            if (dx < -halfT) dx += TERRAIN_SIZE;
            if (dz > halfT) dz -= TERRAIN_SIZE;
            if (dz < -halfT) dz += TERRAIN_SIZE;
            const d = Math.sqrt(dx * dx + dz * dz);
            const radius = 8 + Math.min(cluster.frequency * 1.5, 10);
            const influence = Math.max(0, 1 - d / radius);
            if (influence > 0) {
              const eased = influence * influence * (3 - 2 * influence);
              const freq = cluster.frequency;

              // Use evolved color for terrain influence (shifts with trajectory)
              const ecd = cluster.evolvedColorData || cluster.colorData;

              if (cluster.trend === "stress") {
                // Small literal craters — gentle terrain dip
                const terrainCraterDepth = freq < 3 ? 0 : freq < 5 ? 0.3 : freq < 8 ? 0.6 : 1.0;
                elev -= eased * terrainCraterDepth;
                const glow = (freq < 3 ? 0.2 : freq < 5 ? 0.35 : 0.5) + Math.min(freq * 0.04, 0.3);
                cr += eased * ecd.r * glow;
                cg += eased * ecd.g * glow * 0.5;
                cb += eased * ecd.b * glow * 0.5;
              } else if (cluster.trend === "resolved") {
                // Animated budding flares on terrain
                const terrainFlareHeight = freq < 3 ? 0 : freq < 5 ? 0.2 : freq < 8 ? 0.5 : 0.8;
                const pulseSpeed = 0.6 + freq * 0.15;
                const pulseAmp = freq < 5 ? 0.1 : freq < 8 ? 0.2 : 0.3;
                const budding = 1.0 + Math.sin(t * pulseSpeed + d * 0.5) * pulseAmp;
                elev += eased * terrainFlareHeight * budding;
                const glow = (freq < 3 ? 0.25 : freq < 5 ? 0.4 : 0.55) + Math.min(freq * 0.04, 0.3);
                const colorPulse = 0.8 + Math.sin(t * pulseSpeed * 0.7) * 0.2;
                cr += eased * ecd.r * glow * colorPulse;
                cg += eased * ecd.g * glow * colorPulse;
                cb += eased * ecd.b * glow * 0.8 * colorPulse;
              } else {
                const terrainNeutral = freq < 3 ? 0 : Math.min(freq * 0.08, 0.4);
                elev += eased * terrainNeutral;
                const glow = freq < 3 ? 0.15 : 0.25;
                cr += eased * ecd.r * glow;
                cg += eased * ecd.g * glow;
                cb += eased * ecd.b * glow;
              }
            }
          }

          tPos.setY(i, elev);
          tCols[i*3] = Math.max(0, Math.min(1, cr));
          tCols[i*3+1] = Math.max(0, Math.min(1, cg));
          tCols[i*3+2] = Math.max(0, Math.min(1, cb));
        }

        terrainGeo.setAttribute("color", new THREE.BufferAttribute(tCols, 3));
        tPos.needsUpdate = true;
        terrainGeo.computeVertexNormals();

        // Animate particles
        const ppa = particleGeo.attributes.position;
        for (let i = 0; i < ppa.count; i++) {
          let py = ppa.getY(i);
          py += Math.sin(t * 1.5 + i * 0.3) * 0.003;
          ppa.setX(i, ppa.getX(i) + Math.sin(t * 0.5 + i * 0.1) * 0.002);
          if (py > 6) py = 0.3;
          ppa.setY(i, py);
        }
        ppa.needsUpdate = true;

        // Surface mode: moderate scene lights, emissive handles base visibility
        ambientLight.intensity = 0.35;
        ambientLight.color.setHex(0xd8ccc0);
        hemiLight.intensity = 0.25;
        dl.intensity = 0.2;
        dl2.intensity = 0.12;
        dl3.intensity = 0.1;
        pl.intensity = 0.3;

      } else {
        // ═══ PLANET MODE: Orbital camera ═══
        const orbitSpeed = 0.025;
        if (keys["w"] || keys["arrowup"]) orbit.targetPhi = Math.max(0.15, orbit.targetPhi - orbitSpeed);
        if (keys["s"] || keys["arrowdown"]) orbit.targetPhi = Math.min(Math.PI - 0.15, orbit.targetPhi + orbitSpeed);
        if (keys["a"] || keys["arrowleft"]) orbit.targetTheta += orbitSpeed;
        if (keys["d"] || keys["arrowright"]) orbit.targetTheta -= orbitSpeed;
        // Mobile joystick orbit
        if (mobileMovRef && mobileMovRef.current) {
          const mx = mobileMovRef.current.x, my = mobileMovRef.current.y;
          if (Math.abs(mx) > 0.05 || Math.abs(my) > 0.05) {
            orbit.targetTheta -= mx * orbitSpeed * 1.2;
            orbit.targetPhi = Math.max(0.15, Math.min(Math.PI - 0.15, orbit.targetPhi + my * orbitSpeed * 1.2));
          }
        }
        if (keys["q"] || keys["-"]) orbit.targetRadius = Math.min(14, orbit.targetRadius + 0.06);
        if (keys["e"] || keys["="]) orbit.targetRadius = Math.max(4, orbit.targetRadius - 0.06);
        if (keys["r"]) orbit.targetRadius = Math.max(4, orbit.targetRadius - 0.1);
        if (keys["f"]) orbit.targetRadius = Math.min(14, orbit.targetRadius + 0.1);
        // Mobile zoom buttons
        if (mobileZoomRef && mobileZoomRef.current !== 0) {
          orbit.targetRadius = Math.max(4, Math.min(14, orbit.targetRadius - mobileZoomRef.current * 0.5));
          mobileZoomRef.current = 0;
        }

        orbit.phi += (orbit.targetPhi - orbit.phi) * 0.15;
        orbit.theta += (orbit.targetTheta - orbit.theta) * 0.15;
        orbit.radius += (orbit.targetRadius - orbit.radius) * 0.12;

        cam.position.set(
          orbit.radius * Math.sin(orbit.phi) * Math.cos(orbit.theta),
          orbit.radius * Math.cos(orbit.phi),
          orbit.radius * Math.sin(orbit.phi) * Math.sin(orbit.theta)
        );
        cam.up.set(0, 1, 0);
        cam.lookAt(0, 0, 0);

        // ─── Deform sphere ───
        const sPos = sphereGeo.attributes.position;
        const sCols = new Float32Array(sPos.count * 3);
        const baseRadius = 2.8;

        for (let i = 0; i < sPos.count; i++) {
          const ox = sPos.getX(i), oy = sPos.getY(i), oz = sPos.getZ(i);
          const dir = new THREE.Vector3(ox, oy, oz).normalize();
          // Multi-octave displacement: broad continental shapes + fine ridges + micro detail
          let displacement = fbm3D(dir.x * 2.2 + t * 0.03, dir.y * 2.2, dir.z * 2.2 + t * 0.02, 6) * 0.025;
          // Tectonic ridges — sharp folds that create mountain ranges
          const ridge = Math.abs(fbm3D(dir.x * 5.5, dir.y * 5.5, dir.z * 5.5, 3));
          displacement += (1 - ridge) * 0.008;
          // Micro erosion texture — fine grain detail visible up close
          displacement += fbm3D(dir.x * 12 + t * 0.01, dir.y * 12, dir.z * 12, 2) * 0.004;

          // Richer base colors — continental shelves, ocean beds, highlands
          const elevNorm = (displacement + 0.04) / 0.08;
          let cr, cg, cb;
          if (elevNorm > 0.7) {
            // Highland peaks — warm amber/ochre
            cr = 0.52 + elevNorm * 0.08; cg = 0.38 + elevNorm * 0.04; cb = 0.26;
          } else if (elevNorm > 0.4) {
            // Mid terrain — earthy brown
            cr = 0.38 + elevNorm * 0.06; cg = 0.30 + elevNorm * 0.05; cb = 0.24;
          } else {
            // Low basins — cooler, deeper tones
            cr = 0.28 + elevNorm * 0.04; cg = 0.25 + elevNorm * 0.06; cb = 0.24 + elevNorm * 0.03;
          }
          // Subtle variation from ridge presence
          cr += (1 - ridge) * 0.04; cg += (1 - ridge) * 0.02;

          for (const cluster of clusterData) {
            const dot = dir.dot(cluster.direction);
            const angularDist = Math.acos(Math.min(1, Math.max(-1, dot)));
            const radius = 0.25 + Math.min(cluster.frequency * 0.025, 0.15);
            const influence = Math.max(0, 1 - angularDist / radius);
            if (influence > 0) {
              const eased = influence * influence * (3 - 2 * influence);
              const freq = cluster.frequency;
              // Use evolved color for planet terrain influence
              const ecd = cluster.evolvedColorData || cluster.colorData;

              if (cluster.trend === "stress") {
                displacement -= eased * cluster.craterScale;
                const glow = (freq < 3 ? 0.2 : freq < 5 ? 0.35 : 0.5) + Math.min(freq * 0.04, 0.3);
                cr += eased * ecd.r * glow;
                cg += eased * ecd.g * glow * 0.5;
                cb += eased * ecd.b * glow * 0.5;
              } else if (cluster.trend === "resolved") {
                const pulseSpeed = 0.6 + freq * 0.15;
                const pulseAmp = freq < 5 ? 0.15 : freq < 8 ? 0.25 : 0.35;
                const budding = 1.0 + Math.sin(t * pulseSpeed + angularDist * 8) * pulseAmp;
                displacement += eased * cluster.flareScale * budding;
                const glow = (freq < 3 ? 0.25 : freq < 5 ? 0.4 : 0.55) + Math.min(freq * 0.04, 0.3);
                const colorPulse = 0.8 + Math.sin(t * pulseSpeed * 0.7) * 0.2;
                cr += eased * ecd.r * glow * colorPulse;
                cg += eased * ecd.g * glow * colorPulse;
                cb += eased * ecd.b * glow * 0.8 * colorPulse;
              } else {
                displacement += eased * cluster.neutralScale;
                const glow = freq < 3 ? 0.15 : 0.25;
                cr += eased * ecd.r * glow;
                cg += eased * ecd.g * glow;
                cb += eased * ecd.b * glow;
              }
            }
          }

          const r = baseRadius + displacement;
          sPos.setXYZ(i, dir.x * r, dir.y * r, dir.z * r);
          sCols[i*3] = Math.max(0, Math.min(1, cr));
          sCols[i*3+1] = Math.max(0, Math.min(1, cg));
          sCols[i*3+2] = Math.max(0, Math.min(1, cb));
        }

        sphereGeo.setAttribute("color", new THREE.BufferAttribute(sCols, 3));
        sPos.needsUpdate = true;
        sphereGeo.computeVertexNormals();

        planet.rotation.y += 0.0002;
        wireMesh.rotation.y = planet.rotation.y;
        atmosMat.uniforms.uCamPos.value.copy(cam.position);

        // Planet mode: softer scene lights, planet emissive handles base visibility
        ambientLight.intensity = 0.3;
        ambientLight.color.setHex(0xc8c0b4);
        hemiLight.intensity = 0.2;
        dl.intensity = 0.15;
        dl2.intensity = 0.1;
        dl3.intensity = 0.08;
        pl.intensity = 0.0;
      }

      // ─── Shared: billboard markers + thought star animation ───
      const halfTerrain = TERRAIN_SIZE * 0.5;
      const nowMs = Date.now();

      markersRef.current.forEach(m => {
        m.quaternion.copy(cam.quaternion);
        const baseScale = m.userData.baseScale || 0.05;

        if (m.userData.isThoughtStar) {
          // ── Check if this mini-diamond's cluster is currently transforming ──
          const isTransforming = coalescingRef.current.includes(m.userData.clusterLabel);

          if (isTransforming && mode === "surface") {
            // Converge toward cluster center with accelerating spiral
            const convergeFactor = Math.min((t % 1.5) / 1.5, 1);
            const eased = convergeFactor * convergeFactor;
            const orbitR = m.userData.spreadDist * 0.6 * (1 - eased * 0.85);
            const spinSpeed = 2.0 + eased * 6.0;
            const orbitAngle = t * spinSpeed + m.userData.offsetAngle;
            m.userData.worldX = m.userData.clusterX + Math.cos(orbitAngle) * orbitR;
            m.userData.worldZ = m.userData.clusterZ + Math.sin(orbitAngle) * orbitR;
            m.position.y = 1.2 + (1 - eased) * 1.5;
            // Brighten during transformation
            const brightScale = baseScale * (1.5 + eased * 1.5);
            m.scale.set(brightScale, brightScale * 1.35, 1);
            if (m.material) m.material.opacity = 1.0 - eased * 0.3;
          } else if (m.userData.isAggregated && mode === "surface") {
            // Aggregated: orbit the big diamond center with gentle spiraling
            const orbitSpeed = 0.4 + (m.userData.seed % 1) * 0.3;
            const orbitAngle = t * orbitSpeed + m.userData.offsetAngle;
            const orbitR = m.userData.spreadDist * 0.6;
            m.userData.worldX = m.userData.clusterX + Math.cos(orbitAngle) * orbitR;
            m.userData.worldZ = m.userData.clusterZ + Math.sin(orbitAngle) * orbitR;
            m.position.y = 1.0 + Math.sin(t * 1.2 + m.userData.seed) * 0.12;
          } else if (!m.userData.isAggregated && mode === "surface") {
            // Standalone seed: gentle float/bob above terrain so it stays visible
            m.position.y = 2.8 + Math.sin(t * 1.5 + m.userData.seed * 2.1) * 0.25;
          } else if (!m.userData.isAggregated && mode === "planet") {
            // Standalone seed on planet: gentle radial bob outward
            if (m.userData.sphereDir) {
              const bobR = 2.92 + Math.sin(t * 1.5 + m.userData.seed * 2.1) * 0.04;
              m.position.copy(m.userData.sphereDir.clone().multiplyScalar(bobR));
            }
          }
          // Twinkle animation — mini-diamond gentle pulse with gem proportions
          if (!isTransforming) {
            const twinkle = baseScale * (1 + Math.sin(t * 3.5 + m.userData.seed * 3.7) * 0.2);
            m.scale.set(twinkle, twinkle * 1.35, 1);
          }
        } else if (m.userData.isDiamond) {
          // ── Diamond formation animation ──
          const age = nowMs - (m.userData.birthTime || 0);
          const formationDuration = 2000; // 2 seconds
          if (age < formationDuration) {
            const progress = age / formationDuration;
            const eased = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            m.scale.set(baseScale * eased, baseScale * 1.4 * eased, 1);
          } else {
            const pulse = baseScale * (1 + Math.sin(t * 2.5 + m.userData.seed) * 0.15);
            m.scale.set(pulse, pulse * 1.4, 1);
          }
        } else {
          // Regular marker pulse
          const pulse = baseScale * (1 + Math.sin(t * 2.5 + m.userData.seed) * 0.15);
          m.scale.setScalar(pulse);
        }

        // Surface mode: wrap positions relative to player
        if (mode === "surface" && m.userData.worldX !== undefined) {
          let dx = m.userData.worldX - surf.x;
          let dz = m.userData.worldZ - surf.z;
          if (dx > halfTerrain) dx -= TERRAIN_SIZE;
          if (dx < -halfTerrain) dx += TERRAIN_SIZE;
          if (dz > halfTerrain) dz -= TERRAIN_SIZE;
          if (dz < -halfTerrain) dz += TERRAIN_SIZE;
          m.position.x = surf.x + dx;
          m.position.z = surf.z + dz;
        }
      });
      // Also wrap surface light positions
      if (mode === "surface") {
        surfaceMarkerGroup.children.forEach(child => {
          if (child.isPointLight && child.userData.worldX !== undefined) {
            let dx = child.userData.worldX - surf.x;
            let dz = child.userData.worldZ - surf.z;
            if (dx > halfTerrain) dx -= TERRAIN_SIZE;
            if (dx < -halfTerrain) dx += TERRAIN_SIZE;
            if (dz > halfTerrain) dz -= TERRAIN_SIZE;
            if (dz < -halfTerrain) dz += TERRAIN_SIZE;
            child.position.x = surf.x + dx;
            child.position.z = surf.z + dz;
          }
        });
      }

      // ── Cosmic rotation — everything at different rates for parallax depth ──
      starField.rotation.y += 0.00008;
      nebulaGroup.rotation.y += 0.00004;
      nebulaGroup.rotation.x += 0.000008; // very subtle tilt drift
      cosmicDustGroup.rotation.y += 0.00006;
      cosmicDustGroup.rotation.x += 0.00001;
      distantBodies.rotation.y += 0.00002; // planets barely move
      asteroidBelt.rotation.y += 0.00025; // belt orbits slowly

      // Spin hero asteroids on their axes
      asteroidBelt.children.forEach(child => {
        if (child.isMesh && child.userData.spinSpeed) {
          child.rotation.x += child.userData.spinSpeed;
          child.rotation.z += child.userData.spinSpeed * 0.7;
        }
      });

      // Update distant planet atmosphere uniforms
      distantBodies.children.forEach(child => {
        if (child.material && child.material.uniforms && child.material.uniforms.uCamPos) {
          child.material.uniforms.uCamPos.value.copy(cam.position);
        }
      });

      // Lens flares always face camera
      distantBodies.children.forEach(child => {
        if (child.userData && child.userData.isFlare) {
          child.quaternion.copy(cam.quaternion);
          child.rotateZ(child.userData.baseRotZ);
        }
      });

      // Animate comets — slow drift across the sky
      cometGroup.children.forEach(comet => {
        const pos = comet.geometry.attributes.position;
        const ud = comet.userData;
        for (let j = 0; j < pos.count; j++) {
          pos.setX(j, pos.getX(j) + ud.speed * ud.dx);
          pos.setY(j, pos.getY(j) + ud.speed * ud.dy);
        }
        pos.needsUpdate = true;
        if (Math.abs(pos.getX(0)) > 250) {
          const cx = (Math.random() - 0.5) * 160;
          const cy = (Math.random() - 0.5) * 80;
          const cz = 50 + Math.random() * 100;
          for (let j = 0; j < pos.count; j++) {
            pos.setX(j, cx - ud.dx * j * 1.8);
            pos.setY(j, cy - ud.dy * j * 1.8);
            pos.setZ(j, cz);
          }
          pos.needsUpdate = true;
        }
      });

      // ── Apply scene customization settings (respecting mode visibility) ──
      const ss = settingsRef.current;
      if (ss) {
        starField.material.opacity = (ss.starFieldOpacity ?? 1) * 0.85;
        nebulaGroup.visible = (ss.nebulaOpacity ?? 1) > 0.01;
        nebulaGroup.children.forEach(c => { if (c.material) c.material.opacity = c.material._baseOp !== undefined ? c.material._baseOp * (ss.nebulaOpacity ?? 1) : c.material.opacity; });
        asteroidBelt.visible = (ss.asteroidBeltOpacity ?? 1) > 0.01;
        asteroidBelt.children.forEach(c => { if (c.material && !c.material.isShaderMaterial) c.material.opacity = (c.material._baseOp ?? c.material.opacity) * (ss.asteroidBeltOpacity ?? 1); });
        cosmicDustGroup.visible = (ss.cosmicDustOpacity ?? 1) > 0.01;
        distantBodies.visible = (ss.distantBodiesOpacity ?? 1) > 0.01;
        cometGroup.visible = (ss.cometOpacity ?? 1) > 0.01;
        // Only apply particle opacity in surface mode (already hidden in planet mode by line above)
        if (mode === "surface") {
          particles.material.opacity = 0.5 * (ss.ambientParticles ?? 1);
          terrainWireMesh.material.opacity = 0.08 * (ss.terrainWireframe ?? 1);
        }
        // Planet wireframe also responds to setting
        if (mode === "planet") {
          wireMesh.material.opacity = 0.05 * (ss.terrainWireframe ?? 1);
          atmosMesh.visible = (ss.atmosphereGlow ?? 1) > 0.01;
        }
        // atmosMesh stays hidden in surface mode (set on line 1311)
      }

      ren.render(scene, cam);
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      ren.dispose();
      if (el.contains(ren.domElement)) el.removeChild(ren.domElement);
    };
  }, [clusterData, onMarkerClick]);

  // ─── Update markers: thought stars + diamond markers ───
  useEffect(() => {
    const { surfaceMarkerGroup, planetMarkerGroup } = sceneRef.current;
    if (!surfaceMarkerGroup || !planetMarkerGroup) return;

    while (surfaceMarkerGroup.children.length) surfaceMarkerGroup.remove(surfaceMarkerGroup.children[0]);
    while (planetMarkerGroup.children.length) planetMarkerGroup.remove(planetMarkerGroup.children[0]);
    markersRef.current = [];
    thoughtStarsRef.current = [];

    // Clean formingRef: remove clusters that no longer exist
    for (const label of formingRef.current.keys()) {
      if (!clusterData.find(c => c.label === label)) formingRef.current.delete(label);
    }

    // ═══ DIAMOND MARKERS — only for aggregated clusters (freq >= 3) ═══
    clusterData.forEach((c, idx) => {
      if (c.frequency < 3) return; // below threshold — stars only, no diamond

      // Track formation time for animation
      if (!formingRef.current.has(c.label)) {
        formingRef.current.set(c.label, Date.now());
      }

      // ── Diamond texture: tall faceted gem shape, WHITE body with evolved-color glow ──
      const canvas = document.createElement("canvas");
      canvas.width = 64; canvas.height = 96; // taller canvas for elongated diamond
      const ctx = canvas.getContext("2d");
      const hex = c.evolvedHex || c.colorData.hex; // evolved color for glow aura
      const cx = 32, cy = 48; // center of diamond

      // Outer glow bloom — evolved-color halo around a WHITE diamond
      const grad = ctx.createRadialGradient(cx, cy, 4, cx, cy, 40);
      grad.addColorStop(0, hex + "66");
      grad.addColorStop(0.12, hex + "44");
      grad.addColorStop(0.35, hex + "22");
      grad.addColorStop(0.6, hex + "0c");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 96);

      // Diamond shape — tall, narrow, gem-like — WHITE body with emotion glow
      const topY = 10, midY = cy, botY = 82;
      const halfW = 16; // half-width at widest point
      ctx.save();
      ctx.shadowColor = hex; ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.moveTo(cx, topY);       // top point
      ctx.lineTo(cx + halfW, midY); // right
      ctx.lineTo(cx, botY);       // bottom point
      ctx.lineTo(cx - halfW, midY); // left
      ctx.closePath();
      // White diamond fill with subtle emotion tint
      const gemGrad = ctx.createLinearGradient(cx, topY, cx, botY);
      gemGrad.addColorStop(0, "#ffffff");
      gemGrad.addColorStop(0.35, "#f0eff5");
      gemGrad.addColorStop(0.65, "#e8e6ef");
      gemGrad.addColorStop(1, "#dddbe6");
      ctx.fillStyle = gemGrad; ctx.fill();
      // Second pass with emotion glow bleed
      ctx.shadowBlur = 12;
      ctx.globalAlpha = 0.15; ctx.fillStyle = hex; ctx.fill();
      ctx.restore();

      // Facet lines — gives the gem its cut appearance
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = "#b8b4c8";
      ctx.lineWidth = 0.8;
      // Top facet
      ctx.beginPath(); ctx.moveTo(cx - halfW, midY); ctx.lineTo(cx, topY + 18); ctx.lineTo(cx + halfW, midY); ctx.stroke();
      // Center horizontal
      ctx.beginPath(); ctx.moveTo(cx - halfW + 2, midY); ctx.lineTo(cx + halfW - 2, midY); ctx.stroke();
      ctx.restore();

      // Crisp white edge highlight — keeps the diamond sharp
      ctx.beginPath();
      ctx.moveTo(cx, topY); ctx.lineTo(cx + halfW, midY); ctx.lineTo(cx, botY); ctx.lineTo(cx - halfW, midY);
      ctx.closePath();
      ctx.strokeStyle = "rgba(255,255,255,0.8)"; ctx.lineWidth = 1.2; ctx.stroke();

      // Bright white inner sparkle
      ctx.beginPath(); ctx.arc(cx, midY - 4, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.95; ctx.fill();
      // Secondary sparkle lower
      ctx.beginPath(); ctx.arc(cx + 2, midY + 6, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.6; ctx.fill();

      // ── Crater / Flare type indicator ──
      // Detached from diamond body so it doesnt blur the gem silhouette at distance
      const trend = c.trend || (c.craterScale > 0 ? "stress" : c.flareScale > 0 ? "resolved" : "neutral");
      ctx.globalAlpha = 1;
      if (trend === "stress") {
        // Crater: subtle downward wisps — thin lines below diamond, not arcs around it
        const ringAlpha = Math.min(0.1 + c.frequency * 0.03, 0.35);
        ctx.globalAlpha = ringAlpha;
        ctx.strokeStyle = hex;
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.arc(cx, botY + 4, 14, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke();
        ctx.globalAlpha = ringAlpha * 0.4;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.arc(cx, botY + 6, 10, Math.PI * 0.3, Math.PI * 0.7); ctx.stroke();
      } else if (trend === "resolved") {
        // Flare: subtle upward wisps — thin lines above diamond
        const ringAlpha = Math.min(0.1 + c.frequency * 0.03, 0.35);
        ctx.globalAlpha = ringAlpha;
        ctx.strokeStyle = hex;
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.arc(cx, topY - 4, 14, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke();
        ctx.globalAlpha = ringAlpha * 0.4;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.arc(cx, topY - 6, 10, Math.PI * 1.3, Math.PI * 1.7); ctx.stroke();
      } else {
        // Neutral: very faint full ring, pushed outward
        if (c.frequency >= 5) {
          ctx.globalAlpha = 0.15;
          ctx.strokeStyle = hex;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.arc(cx, cy, 24, 0, Math.PI * 2); ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      const texture = new THREE.CanvasTexture(canvas);
      texture.premultiplyAlpha = true;
      const birthTime = formingRef.current.get(c.label);

      // Surface diamond — always floats well above terrain
      const surfMat = new THREE.SpriteMaterial({
        map: texture, transparent: true, depthWrite: false, sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      });
      const surfSprite = new THREE.Sprite(surfMat);
      const surfElevation = 2.0 + (c.flareScale || 0) * 3 + Math.min(c.frequency * 0.15, 0.8);
      surfSprite.position.set(c.planeX, surfElevation, c.planeZ);
      const surfBase = 0.55 + Math.min(c.frequency * 0.06, 0.4);
      surfSprite.scale.set(surfBase, surfBase * 1.4, 1); // taller than wide
      surfSprite.userData = { clusterLabel: c.label, seed: idx * 1.7, baseScale: surfBase, worldX: c.planeX, worldZ: c.planeZ, isDiamond: true, birthTime };
      surfaceMarkerGroup.add(surfSprite);
      markersRef.current.push(surfSprite);

      // Planet diamond
      const planetMat = new THREE.SpriteMaterial({
        map: texture.clone(), transparent: true, depthWrite: false, sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      });
      const planetSprite = new THREE.Sprite(planetMat);
      const planetGap = 0.12 + (c.flareScale || 0) + Math.min(c.frequency * 0.01, 0.06);
      const planetPos = c.direction.clone().multiplyScalar(2.8 + planetGap);
      planetSprite.position.copy(planetPos);
      const planetBase = 0.06 + Math.min(c.frequency * 0.007, 0.05);
      planetSprite.scale.set(planetBase, planetBase * 1.4, 1);
      planetSprite.userData = { clusterLabel: c.label, seed: idx * 1.7, baseScale: planetBase, isDiamond: true, birthTime };
      planetMarkerGroup.add(planetSprite);
      markersRef.current.push(planetSprite);

      // Point lights
      if (c.frequency >= 2) {
        const lightColor = c.evolvedColor || new THREE.Color(c.colorData.r, c.colorData.g, c.colorData.b);
        const clusterLight = new THREE.PointLight(lightColor, Math.min(c.frequency * 0.08, 0.6), 2.5);
        clusterLight.position.copy(c.direction.clone().multiplyScalar(2.8 + 0.15));
        planetMarkerGroup.add(clusterLight);
        const surfLight = new THREE.PointLight(lightColor, Math.min(c.frequency * 0.1, 0.8), 12);
        surfLight.position.set(c.planeX, 1.5 + (c.flareScale || 0) * 2, c.planeZ);
        surfLight.userData = { worldX: c.planeX, worldZ: c.planeZ };
        surfaceMarkerGroup.add(surfLight);
      }
    });

    // ═══ MINI-DIAMONDS — one tiny diamond per individual thought entry ═══
    const goldenAngle = 2.399963; // radians — golden ratio angle for even spiral distribution
    const TERRAIN_SZ = TERRAIN_SIZE;

    entries.forEach((entry, entryIdx) => {
      const primaryKw = normalizeKeyword((entry.keywords && entry.keywords[0]) || "thought");
      const { phi, theta } = hashToAngle(primaryKw);

      // Check if this thought belongs to an aggregated cluster (diamond already exists)
      const cluster = clusterData.find(c => c.label === primaryKw);
      const isAggregated = cluster && cluster.frequency >= 3;

      // Position offset — golden angle spiral so mini-diamonds don't overlap
      const offsetAngle = entryIdx * goldenAngle;

      // Surface position
      const baseX = ((theta / (Math.PI * 2)) - 0.5) * TERRAIN_SZ;
      const baseZ = ((phi / Math.PI) - 0.5) * TERRAIN_SZ;

      // Count how many entries share this keyword to determine spread
      const siblingCount = entries.filter(e => normalizeKeyword((e.keywords && e.keywords[0]) || "") === primaryKw).length;
      const siblingIdx = entries.filter((e, ei) => ei < entryIdx && normalizeKeyword((e.keywords && e.keywords[0]) || "") === primaryKw).length;

      let spreadDist, starX, starZ;
      if (isAggregated) {
        // Orbiting around big diamond
        spreadDist = 1.5 + (siblingIdx % 5) * 0.5;
        starX = baseX + Math.cos(siblingIdx * goldenAngle) * spreadDist;
        starZ = baseZ + Math.sin(siblingIdx * goldenAngle) * spreadDist;
      } else if (siblingCount <= 1) {
        // Solo seed: place exactly at base position (camera center)
        spreadDist = 0;
        starX = baseX;
        starZ = baseZ;
      } else {
        // Multiple seeds for same keyword: tight spiral around center
        spreadDist = 0.8 + siblingIdx * 0.6;
        starX = baseX + Math.cos(siblingIdx * goldenAngle) * spreadDist;
        starZ = baseZ + Math.sin(siblingIdx * goldenAngle) * spreadDist;
      }

      // ── Create mini-diamond texture — same gem shape as big diamonds, just smaller ──
      const ecBase = getEmotionColor(entry.emotion);
      // Apply evolved color if this thought belongs to an evolving cluster
      const clusterTraj = cluster ? (cluster.trajectoryState || "active") : "active";
      const clusterStrength = cluster ? (cluster.trajectoryStrength || 0) : 0;
      const evolvedMiniHex = getEvolvedColor(ecBase.hex, clusterTraj, clusterStrength);
      const ec = { ...ecBase, hex: evolvedMiniHex };
      const miniCanvas = document.createElement("canvas");
      miniCanvas.width = 48; miniCanvas.height = 64; // proportional to big diamond (64x96)
      const mctx = miniCanvas.getContext("2d");
      const mcx = 24, mcy = 32; // center

      // Soft emotion-colored glow halo (subtle, not dominant)
      const mGrad = mctx.createRadialGradient(mcx, mcy, 2, mcx, mcy, 28);
      mGrad.addColorStop(0, ec.hex + "55");
      mGrad.addColorStop(0.2, ec.hex + "33");
      mGrad.addColorStop(0.45, ec.hex + "18");
      mGrad.addColorStop(0.75, ec.hex + "06");
      mGrad.addColorStop(1, "transparent");
      mctx.fillStyle = mGrad;
      mctx.fillRect(0, 0, 48, 64);

      // Diamond shape — WHITE body with emotion shadow glow
      const mTopY = 8, mMidY = mcy, mBotY = 56;
      const mHalfW = 11;
      mctx.save();
      mctx.shadowColor = ec.hex; mctx.shadowBlur = 12;
      mctx.beginPath();
      mctx.moveTo(mcx, mTopY);
      mctx.lineTo(mcx + mHalfW, mMidY);
      mctx.lineTo(mcx, mBotY);
      mctx.lineTo(mcx - mHalfW, mMidY);
      mctx.closePath();
      // White gem fill with subtle gradient
      const miniGemGrad = mctx.createLinearGradient(mcx, mTopY, mcx, mBotY);
      miniGemGrad.addColorStop(0, "#ffffff");
      miniGemGrad.addColorStop(0.4, "#f0eff5");
      miniGemGrad.addColorStop(1, "#dddbe6");
      mctx.fillStyle = miniGemGrad; mctx.fill();
      // Faint emotion tint overlay
      mctx.shadowBlur = 6;
      mctx.globalAlpha = 0.12; mctx.fillStyle = ec.hex; mctx.fill();
      mctx.restore();

      // Facet line
      mctx.save();
      mctx.globalAlpha = 0.3;
      mctx.strokeStyle = "#b8b4c8";
      mctx.lineWidth = 0.6;
      mctx.beginPath(); mctx.moveTo(mcx - mHalfW, mMidY); mctx.lineTo(mcx, mTopY + 12); mctx.lineTo(mcx + mHalfW, mMidY); mctx.stroke();
      mctx.beginPath(); mctx.moveTo(mcx - mHalfW + 1, mMidY); mctx.lineTo(mcx + mHalfW - 1, mMidY); mctx.stroke();
      mctx.restore();

      // Crisp white edge highlight
      mctx.beginPath();
      mctx.moveTo(mcx, mTopY); mctx.lineTo(mcx + mHalfW, mMidY); mctx.lineTo(mcx, mBotY); mctx.lineTo(mcx - mHalfW, mMidY);
      mctx.closePath();
      mctx.strokeStyle = "rgba(255,255,255,0.7)"; mctx.lineWidth = 0.9; mctx.stroke();

      // White core sparkle
      mctx.beginPath(); mctx.arc(mcx, mMidY - 2, 1.8, 0, Math.PI * 2);
      mctx.fillStyle = "#fff"; mctx.globalAlpha = 0.9; mctx.fill();
      mctx.globalAlpha = 1;

      const miniTex = new THREE.CanvasTexture(miniCanvas);
      miniTex.premultiplyAlpha = true;

      // ── Surface mini-diamond ──
      // Standalone seeds are larger and float higher so they're clearly visible on terrain
      const sMat = new THREE.SpriteMaterial({ map: miniTex, transparent: true, depthWrite: false, sizeAttenuation: true, opacity: isAggregated ? 0.65 : 1.0, blending: THREE.AdditiveBlending });
      const sStar = new THREE.Sprite(sMat);
      const seedHoverY = isAggregated ? (1.0 + Math.random() * 0.3) : (2.8 + Math.random() * 0.3);
      sStar.position.set(starX, seedHoverY, starZ);
      const sBase = isAggregated ? 0.15 : 0.6;
      sStar.scale.set(sBase, sBase * 1.35, 1); // match diamond proportions
      sStar.userData = {
        clusterLabel: primaryKw, seed: entryIdx * 2.3 + 0.5, baseScale: sBase,
        worldX: starX, worldZ: starZ, isThoughtStar: true, isAggregated,
        clusterX: baseX, clusterZ: baseZ, spreadDist, offsetAngle,
        thoughtId: entry.id,
      };
      surfaceMarkerGroup.add(sStar);
      markersRef.current.push(sStar);
      thoughtStarsRef.current.push(sStar);

      // ── Planet mini-diamond ──
      const sphereDir = keywordToSpherePos(primaryKw, 1).normalize();
      const tangent = new THREE.Vector3(-sphereDir.z, 0, sphereDir.x).normalize();
      const bitangent = new THREE.Vector3().crossVectors(sphereDir, tangent).normalize();
      const pSpreadDist = isAggregated ? 0.02 + (siblingIdx % 5) * 0.008 : (siblingCount <= 1 ? 0 : 0.01 + siblingIdx * 0.008);
      const pDir = sphereDir.clone()
        .addScaledVector(tangent, Math.cos(siblingIdx * goldenAngle) * pSpreadDist)
        .addScaledVector(bitangent, Math.sin(siblingIdx * goldenAngle) * pSpreadDist)
        .normalize();

      const pMat = new THREE.SpriteMaterial({ map: miniTex.clone(), transparent: true, depthWrite: false, sizeAttenuation: true, opacity: isAggregated ? 0.6 : 1.0, blending: THREE.AdditiveBlending });
      const pStar = new THREE.Sprite(pMat);
      // Standalone seeds hover slightly further from planet surface for visibility
      const pRadius = isAggregated ? 2.82 : 2.92;
      pStar.position.copy(pDir.clone().multiplyScalar(pRadius));
      const pBase = isAggregated ? 0.015 : 0.06;
      pStar.scale.set(pBase, pBase * 1.35, 1);
      pStar.userData = {
        clusterLabel: primaryKw, seed: entryIdx * 2.3 + 0.5, baseScale: pBase,
        isThoughtStar: true, isAggregated, thoughtId: entry.id,
        sphereDir: pDir.clone(), spreadDist: pSpreadDist,
      };
      planetMarkerGroup.add(pStar);
      markersRef.current.push(pStar);
      thoughtStarsRef.current.push(pStar);
    });

    // Add point lights under standalone seeds + low-freq clusters for terrain glow
    clusterData.forEach(c => {
      if (c.frequency >= 1 && c.frequency < 3) {
        const lightColor = c.evolvedColor || new THREE.Color(c.colorData.r, c.colorData.g, c.colorData.b);
        const intensity = c.frequency === 1 ? 0.2 : 0.35;
        const surfLight = new THREE.PointLight(lightColor, intensity, 8);
        surfLight.position.set(c.planeX, 1.5, c.planeZ);
        surfLight.userData = { worldX: c.planeX, worldZ: c.planeZ };
        surfaceMarkerGroup.add(surfLight);
      }
    });
  }, [clusterData, entries]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, cursor: "grab", touchAction: "none" }} />;
}


// ─── Cluster Popup (shows thoughts for a clicked marker) ───
function ClusterPopup({ cluster, entries, onClose }) {
  if (!cluster) return null;
  const ec = getEmotionColor(cluster.emotion);
  const relatedEntries = entries.filter(e => e.keywords.some(k => normalizeKeyword(k) === cluster.label));
  const trend = emotionToTrend(cluster.emotion);
  const typeLabel = trend === "stress" ? "crater" : trend === "resolved" ? "flare" : "ridge";

  return (
    <>
      {/* Backdrop — click outside to close */}
      <div onClick={onClose} style={{
        position: "absolute", inset: 0, zIndex: 39, cursor: "pointer",
      }} />
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
        backdropFilter: "blur(16px)",
        border: `1px solid ${ec.hex}44`, borderRadius: 16, padding: "24px 28px",
        maxWidth: 380, width: "90%", zIndex: 40, maxHeight: "60vh", overflowY: "auto",
        boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${ec.hex}15`,
        animation: "popupIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 12, right: 14, background: "none", border: "none",
          color: COLORS.textMuted, cursor: "pointer", fontSize: 18, padding: 4,
        }}>×</button>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ width: 12, height: 12, borderRadius: 2, background: ec.hex, boxShadow: `0 0 12px ${ec.hex}66`, transform: "rotate(45deg)" }} />
        <div>
          <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, color: COLORS.textPrimary }}>{cluster.label}</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: ec.hex, letterSpacing: "0.1em", marginTop: 2 }}>
            {ec.label.toUpperCase()} · {typeLabel.toUpperCase()} · {cluster.frequency}×
          </div>
        </div>
      </div>

      {relatedEntries.length === 0 && (
        <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: COLORS.textMuted, fontStyle: "italic" }}>No entries found.</div>
      )}

      {relatedEntries.map(e => (
        <div key={e.id} style={{ padding: "10px 0", borderBottom: `1px solid ${COLORS.surfaceLight}18` }}>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.6 }}>{e.rawText}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted }}>{e.timestamp}</div>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: getEmotionColor(e.emotion).hex }} />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: getEmotionColor(e.emotion).hex }}>{e.emotion}</div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}


// ─── Thought Star Popup (single thought) ───
function ThoughtPopup({ thought, clusters, onClose, onViewCluster }) {
  if (!thought) return null;
  const { entry, clusterLabel } = thought;
  const ec = getEmotionColor(entry.emotion);
  const cluster = clusters.find(c => c.label === clusterLabel);
  const freq = cluster ? cluster.frequency : 1;
  const threshold = 3;
  const progress = Math.min(freq / threshold, 1);
  const remaining = Math.max(0, threshold - freq);

  return (
    <>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 39, cursor: "pointer" }} />
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
        backdropFilter: "blur(16px)",
        border: `1px solid ${ec.hex}33`, borderRadius: 14, padding: "22px 26px",
        maxWidth: 340, width: "85%", zIndex: 40,
        boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 0 30px ${ec.hex}10`,
        animation: "popupIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 10, right: 12, background: "none", border: "none",
          color: COLORS.textMuted, cursor: "pointer", fontSize: 18, padding: 4,
        }}>x</button>

        {/* Star icon + keyword */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 14, height: 14, borderRadius: "50%",
            background: `radial-gradient(circle, #fff 20%, ${ec.hex} 60%, transparent 100%)`,
            boxShadow: `0 0 10px ${ec.hex}88`,
          }} />
          <div>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, color: COLORS.textPrimary }}>{clusterLabel}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: ec.hex, letterSpacing: "0.12em", marginTop: 2 }}>
              {ec.label.toUpperCase()} · THOUGHT STAR
            </div>
          </div>
        </div>

        {/* The raw thought */}
        <div style={{
          fontFamily: "'DM Sans'", fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.7,
          padding: "12px 0", borderTop: `1px solid ${COLORS.surfaceLight}22`, borderBottom: `1px solid ${COLORS.surfaceLight}22`,
        }}>
          {entry.rawText}
        </div>

        {/* Metadata */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10, marginBottom: 14 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted }}>{entry.timestamp}</div>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: ec.hex }} />
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: ec.hex }}>{entry.emotion}</div>
        </div>

        {/* Aggregation progress */}
        <div style={{ marginTop: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: COLORS.textMuted, letterSpacing: "0.15em" }}>
              {freq >= threshold ? "AGGREGATED INTO DIAMOND" : `${remaining} MORE TO DIAMOND`}
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: ec.hex }}>
              {freq}/{threshold}
            </span>
          </div>
          <div style={{ height: 3, borderRadius: 2, background: COLORS.surfaceLight, overflow: "hidden" }}>
            <div style={{
              height: "100%", borderRadius: 2, width: `${progress * 100}%`,
              background: freq >= threshold ? `linear-gradient(90deg, ${ec.hex}, ${COLORS.amber})` : ec.hex,
              transition: "width 0.6s ease",
              boxShadow: freq >= threshold ? `0 0 8px ${ec.hex}88` : "none",
            }} />
          </div>
        </div>

        {/* View cluster button if aggregated */}
        {freq >= threshold && cluster && (
          <button onClick={() => { onViewCluster(cluster); }}
            onMouseEnter={() => sound.play("hover")}
            style={{
              marginTop: 14, width: "100%", padding: "8px 0", borderRadius: 8,
              border: `1px solid ${ec.hex}33`, background: `${ec.hex}11`,
              color: ec.hex, fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
              letterSpacing: "0.12em", cursor: "pointer", transition: "all 0.2s",
            }}>
            VIEW DIAMOND CLUSTER ({cluster.frequency} THOUGHTS)
          </button>
        )}
      </div>
    </>
  );
}

// ─── Category Sidebar (auto-minimized) ───
function CategorySidebar({ clusters, entries, isOpen, onToggle, onClusterClick }) {
  const [openCats, setOpenCats] = useState({});

  const grouped = useMemo(() => {
    // Categorize clusters: use raw keyword variants for category matching, then map back to clusters
    const clusterByCat = {};
    clusters.forEach(c => {
      const searchWords = [c.label, ...(c.rawKeywords || [])];
      const cats = categorizeKeywords(searchWords);
      // Take the first category that matches (most specific)
      const cat = Object.keys(cats)[0] || "other";
      if (!clusterByCat[cat]) clusterByCat[cat] = [];
      if (!clusterByCat[cat].find(x => x.label === c.label)) clusterByCat[cat].push(c);
    });
    return clusterByCat;
  }, [clusters]);

  const toggleCat = (cat) => { setOpenCats(prev => ({ ...prev, [cat]: !prev[cat] })); sound.play("hover"); };

  const catIcons = {
    "work & career": "◆", "finances": "◇", "health & body": "○", "relationships": "◈",
    "growth & purpose": "△", "creativity": "✦", "emotions": "◎", "identity": "◉",
    "environment": "▣", "technology": "⬡", "time & life": "◷", "other": "·",
  };

  return (
    <>
      <button onClick={onToggle} onMouseEnter={() => sound.play("hover")} style={{
        position: "absolute", top: 18, left: 18, width: 40, height: 40, borderRadius: 10,
        background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
        border: `1px solid ${COLORS.surfaceLight}`,
        color: COLORS.amber, cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 16, zIndex: 30, backdropFilter: "blur(12px)",
      }}>
        {isOpen ? "×" : "≡"}
      </button>
      <div data-sidebar="true" style={{
        position: "absolute", top: 0, left: 0, width: 300, height: "100%",
        background: `linear-gradient(180deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}cc)`,
        backdropFilter: "blur(16px)",
        borderRight: `1px solid ${COLORS.surfaceLight}`,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        zIndex: 25, padding: "72px 20px 20px", overflowY: "auto",
      }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted, letterSpacing: "0.2em", marginBottom: 6 }}>
          THOUGHT TERRAIN
        </div>
        <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: COLORS.textMuted, marginBottom: 20 }}>
          {entries.length} mapped · {clusters.length} patterns
        </div>

        {Object.keys(grouped).length === 0 && (
          <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: COLORS.textMuted, lineHeight: 1.7, fontStyle: "italic" }}>
            Your planet is smooth. Start dumping thoughts.
          </div>
        )}

        {Object.entries(grouped).map(([cat, items]) => {
          const isExpanded = openCats[cat];
          const dominantEmotion = items.reduce((best, i) => i.frequency > (best?.frequency || 0) ? i : best, null);
          const catColor = dominantEmotion ? getEmotionColor(dominantEmotion.emotion).hex : COLORS.amber;
          const totalFreq = items.reduce((s, i) => s + i.frequency, 0);

          return (
            <div key={cat} style={{ marginBottom: 2 }}>
              <button onClick={() => toggleCat(cat)} style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                padding: "10px 0", display: "flex", alignItems: "center", gap: 8,
                borderBottom: `1px solid ${COLORS.surfaceLight}12`,
              }}>
                <span style={{ color: catColor, fontSize: 12, width: 16, textAlign: "center" }}>{catIcons[cat] || "·"}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: COLORS.textPrimary, textTransform: "uppercase", flex: 1, textAlign: "left" }}>
                  {cat}
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted }}>{totalFreq}×</span>
                <span style={{ color: COLORS.textMuted, fontSize: 10, transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>▸</span>
              </button>
              <div style={{ maxHeight: isExpanded ? 400 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {items.map((item, i) => {
                  const ec = getEmotionColor(item.emotion);
                  const trend = emotionToTrend(item.emotion);
                  return (
                    <div key={i}
                      onClick={() => { if (onClusterClick) { onClusterClick(item.label); sound.play("reveal"); } }}
                      onMouseEnter={() => sound.play("hover")}
                      style={{ padding: "8px 0 8px 24px", cursor: "pointer", borderRadius: 6,
                        transition: "background 0.2s ease" }}
                      onMouseOver={(e) => e.currentTarget.style.background = `${COLORS.surfaceLight}22`}
                      onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: ec.hex, boxShadow: `0 0 6px ${ec.hex}44` }} />
                        <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 13, color: COLORS.textPrimary }}>{item.label}</span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: ec.hex, marginLeft: "auto" }}>
                          {item.frequency}× · {item.lifecycleStage || getLifecycleStage(item.frequency)}
                        </span>
                      </div>
                      <div style={{ marginTop: 3, marginLeft: 12, height: 2, background: COLORS.surfaceLight, borderRadius: 1, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${Math.min(item.frequency * 16, 100)}%`, background: ec.hex, borderRadius: 1, transition: "width 1s ease" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}


// ─── Hotkey Panel ───
function HotkeyPanel({ isOpen, onToggle, viewMode, isMobile }) {
  const surfaceKeys = [
    { key: "W / ↑", action: "Walk forward" },
    { key: "S / ↓", action: "Walk backward" },
    { key: "A / ←", action: "Strafe left" },
    { key: "D / →", action: "Strafe right" },
    { key: "Shift + W/S", action: "Sprint" },
    { key: "Drag", action: "Look around" },
    { key: "Sidebar item", action: "Jump to thought" },
    { key: "Click marker", action: "View thoughts" },
  ];
  const planetKeys = [
    { key: "W / ↑", action: "Orbit up" },
    { key: "S / ↓", action: "Orbit down" },
    { key: "A / ←", action: "Orbit left" },
    { key: "D / →", action: "Orbit right" },
    { key: "E / +", action: "Zoom in" },
    { key: "Q / -", action: "Zoom out" },
    { key: "R", action: "Quick zoom in" },
    { key: "F", action: "Quick zoom out" },
    { key: "Scroll", action: "Zoom in/out" },
    { key: "Drag", action: "Pan orbit" },
    { key: "Click marker", action: "View thoughts" },
    { key: "Pinch", action: "Zoom (mobile)" },
    { key: "Tap marker", action: "View thoughts (mobile)" },
  ];
  const keys = viewMode === "surface" ? surfaceKeys : planetKeys;

  return (
    <>
      <button onClick={onToggle} onMouseEnter={() => sound.play("hover")} style={{
        position: "absolute", bottom: isMobile ? 128 : 18, right: 18, zIndex: 30,
        background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
        border: `1px solid ${isOpen ? COLORS.amber + "44" : COLORS.surfaceLight}`,
        borderRadius: 12, padding: isMobile ? "6px 10px" : "7px 14px", cursor: "pointer",
        backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: 6,
        transition: "all 0.3s ease",
        boxShadow: `0 2px 10px rgba(0,0,0,0.3)`,
      }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: isMobile ? 8 : 9, letterSpacing: "0.12em", color: isOpen ? COLORS.amber : COLORS.textSecondary }}>
          ? KEYS
        </span>
      </button>
      <div data-panel="true" style={{
        position: "absolute", bottom: isMobile ? 168 : 60, right: 18, width: isMobile ? 200 : 220,
        background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
        backdropFilter: "blur(16px)",
        border: `1px solid ${COLORS.surfaceLight}`, borderRadius: 12,
        padding: "16px 18px", zIndex: 30,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(10px)",
        pointerEvents: isOpen ? "all" : "none",
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted, letterSpacing: "0.2em", marginBottom: 12 }}>
          {viewMode === "surface" ? "SURFACE CONTROLS" : "PLANET CONTROLS"}
        </div>
        {keys.map((k, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.amber, minWidth: 90 }}>{k.key}</span>
            <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: COLORS.textSecondary }}>{k.action}</span>
          </div>
        ))}
      </div>
    </>
  );
}


// ─── Scene Settings Panel ───
function SceneSettingsPanel({ isOpen, onToggle, settings, onChange, isMobile }) {
  const sliders = [
    { key: "starFieldOpacity", label: "Galaxy Stars" },
    { key: "nebulaOpacity", label: "Nebulae" },
    { key: "distantBodiesOpacity", label: "Planets & Suns" },
    { key: "asteroidBeltOpacity", label: "Asteroid Belt" },
    { key: "cosmicDustOpacity", label: "Cosmic Dust" },
    { key: "cometOpacity", label: "Comets" },
    { key: "ambientParticles", label: "Ambient Particles" },
    { key: "terrainWireframe", label: "Wireframe Grid" },
    { key: "atmosphereGlow", label: "Atmosphere Glow" },
  ];
  const handleSlider = (key, val) => {
    onChange({ ...settings, [key]: val });
  };
  const handlePreset = (preset) => {
    const presets = {
      full: Object.fromEntries(sliders.map(s => [s.key, 1.0])),
      minimal: Object.fromEntries(sliders.map(s => [s.key, s.key === "starFieldOpacity" ? 0.3 : s.key === "atmosphereGlow" ? 0.5 : 0])),
      focused: { starFieldOpacity: 0.5, nebulaOpacity: 0.2, distantBodiesOpacity: 0.3, asteroidBeltOpacity: 0, cosmicDustOpacity: 0.1, cometOpacity: 0, ambientParticles: 0.6, terrainWireframe: 1, atmosphereGlow: 1 },
    };
    onChange(presets[preset] || presets.full);
  };
  return (
    <>
      <button onClick={() => { onToggle(); sound.play("hover"); }}
        onMouseEnter={() => sound.play("hover")}
        style={{
          position: "absolute", bottom: isMobile ? 128 : 18, left: 18, zIndex: 30,
          background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
          border: `1px solid ${isOpen ? COLORS.amber + "44" : COLORS.surfaceLight}`,
          borderRadius: 12, padding: isMobile ? "6px 10px" : "7px 14px", cursor: "pointer",
          backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: 6,
          transition: "all 0.3s ease",
          boxShadow: `0 2px 10px rgba(0,0,0,0.3)`,
        }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: isMobile ? 8 : 9, letterSpacing: "0.12em", color: isOpen ? COLORS.amber : COLORS.textSecondary }}>
          {"\u2699"} SCENE
        </span>
      </button>
      <div data-panel="true" style={{
        position: "absolute", bottom: isMobile ? 168 : 62, left: 18, width: isMobile ? 200 : 240,
        background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
        backdropFilter: "blur(16px)",
        border: `1px solid ${COLORS.surfaceLight}`, borderRadius: 12,
        padding: "16px 18px", zIndex: 30,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(10px)",
        pointerEvents: isOpen ? "all" : "none",
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        maxHeight: "60vh", overflowY: "auto",
      }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted, letterSpacing: "0.2em", marginBottom: 14 }}>
          SCENE SETTINGS
        </div>
        {/* Presets */}
        <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
          {[["full", "Full"], ["focused", "Focus"], ["minimal", "Minimal"]].map(([k, label]) => (
            <button key={k} onClick={() => handlePreset(k)}
              style={{
                flex: 1, padding: "5px 0", borderRadius: 6,
                border: `1px solid ${COLORS.surfaceLight}`, background: `${COLORS.surface}cc`,
                color: COLORS.textSecondary, fontFamily: "'JetBrains Mono', monospace",
                fontSize: 8, letterSpacing: "0.1em", cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = COLORS.amber + "44"; e.target.style.color = COLORS.amber; }}
              onMouseLeave={(e) => { e.target.style.borderColor = COLORS.surfaceLight; e.target.style.color = COLORS.textSecondary; }}
            >{label}</button>
          ))}
        </div>
        {sliders.map(({ key, label }) => (
          <div key={key} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
              <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: COLORS.textSecondary }}>{label}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted }}>
                {Math.round((settings[key] ?? 1) * 100)}%
              </span>
            </div>
            <input type="range" min="0" max="100" value={Math.round((settings[key] ?? 1) * 100)}
              onChange={(e) => handleSlider(key, parseInt(e.target.value) / 100)}
              style={{
                width: "100%", height: 3, appearance: "none", background: `linear-gradient(to right, ${COLORS.amber}88 ${(settings[key] ?? 1) * 100}%, ${COLORS.surfaceLight} ${(settings[key] ?? 1) * 100}%)`,
                borderRadius: 2, outline: "none", cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Main ───
// ─── Mobile detection ───
const isMobileDevice = () => typeof window !== "undefined" && (window.innerWidth <= 768 || ("ontouchstart" in window && window.innerWidth <= 1024));

// ─── Virtual Joystick Component for mobile movement ───
function VirtualJoystick({ onMove, viewMode, onZoomIn, onZoomOut }) {
  const stickRef = useRef(null);
  const moveRef = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);
  const activeRef = useRef(false);

  const handleStart = useCallback((cx, cy) => {
    const el = stickRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (cx - centerX) / (rect.width / 2);
    const dy = (cy - centerY) / (rect.height / 2);
    const mag = Math.min(1, Math.sqrt(dx * dx + dy * dy));
    const angle = Math.atan2(dy, dx);
    moveRef.current = { x: Math.cos(angle) * mag, y: Math.sin(angle) * mag };
    activeRef.current = true;
  }, []);

  const handleEnd = useCallback(() => {
    moveRef.current = { x: 0, y: 0 };
    activeRef.current = false;
  }, []);

  useEffect(() => {
    const tick = () => {
      if (activeRef.current && onMove) onMove(moveRef.current);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [onMove]);

  const zoomBtnStyle = {
    width: 34, height: 34, borderRadius: "50%",
    background: `${COLORS.surface}cc`, border: `1px solid ${COLORS.surfaceLight}55`,
    color: COLORS.amber, fontSize: 16, fontWeight: 500,
    display: "flex", alignItems: "center", justifyContent: "center",
    touchAction: "none", userSelect: "none", cursor: "pointer",
  };

  return (
    <div style={{ position: "absolute", bottom: 130, left: 14, zIndex: 25, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      {/* Zoom buttons for planet mode */}
      {viewMode === "planet" && (
        <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
          <div onTouchStart={(e) => { e.preventDefault(); onZoomIn && onZoomIn(); }} style={zoomBtnStyle}>+</div>
          <div onTouchStart={(e) => { e.preventDefault(); onZoomOut && onZoomOut(); }} style={zoomBtnStyle}>&minus;</div>
        </div>
      )}
      {/* Directional joystick */}
      <div ref={stickRef}
        onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); handleStart(e.touches[0].clientX, e.touches[0].clientY); }}
        onTouchMove={(e) => { e.preventDefault(); e.stopPropagation(); handleStart(e.touches[0].clientX, e.touches[0].clientY); }}
        onTouchEnd={(e) => { e.preventDefault(); handleEnd(); }}
        style={{
          width: 86, height: 86, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.surface}88 0%, ${COLORS.surface}44 60%, transparent 100%)`,
          border: `1px solid ${COLORS.surfaceLight}55`,
          display: "flex", alignItems: "center", justifyContent: "center",
          touchAction: "none", userSelect: "none", position: "relative",
        }}>
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", color: COLORS.textMuted, fontSize: 10, opacity: 0.6 }}>{"\u25B2"}</div>
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", color: COLORS.textMuted, fontSize: 10, opacity: 0.6 }}>{"\u25BC"}</div>
        <div style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: COLORS.textMuted, fontSize: 10, opacity: 0.6 }}>{"\u25C0"}</div>
        <div style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: COLORS.textMuted, fontSize: 10, opacity: 0.6 }}>{"\u25B6"}</div>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.amber + "66" }} />
      </div>
    </div>
  );
}

export default function Coil() {
  const [phase, setPhase] = useState("intro");
  const [entries, setEntries] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hotkeyOpen, setHotkeyOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [zoomTarget, setZoomTarget] = useState(null);
  const [viewMode, setViewMode] = useState("surface"); // "surface" or "planet"
  const [birthLabel, setBirthLabel] = useState(null); // { text, emotion, id } — fading label for new thought
  const [coalescingLabels, setCoalescingLabels] = useState([]); // cluster labels currently transforming
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(isMobileDevice);
  const mobileMovRef = useRef({ x: 0, y: 0 });
  const mobileZoomRef = useRef(0); // -1 = zoom out, 0 = none, +1 = zoom in
  const [sceneSettings, setSceneSettings] = useState({
    starFieldOpacity: 1.0,    // background galaxy stars
    nebulaOpacity: 1.0,       // volumetric nebulae
    asteroidBeltOpacity: 1.0, // asteroid belt visibility
    cosmicDustOpacity: 1.0,   // ambient cosmic dust particles
    distantBodiesOpacity: 1.0,// planets, suns, lens flares
    cometOpacity: 1.0,        // comets
    ambientParticles: 1.0,    // surface floating particles
    terrainWireframe: 1.0,    // wireframe overlay
    atmosphereGlow: 1.0,      // planet atmosphere rim
  });

  const DEMO = [
    // ─── Career anxiety cluster (8 entries → deep crater) ───
    { id: 1, timestamp: "Jan 5", rawText: "can't stop thinking about whether I'm making the right career move", keywords: ["career", "move"], emotion: "anxiety", tone: "stress" },
    { id: 2, timestamp: "Jan 12", rawText: "career anxiety back, comparing myself to everyone online", keywords: ["career", "anxiety", "comparing"], emotion: "anxiety", tone: "stress" },
    { id: 3, timestamp: "Jan 28", rawText: "spiraling about career again, am I behind everyone my age", keywords: ["career", "behind", "age"], emotion: "anxiety", tone: "stress" },
    { id: 4, timestamp: "Feb 3", rawText: "another career panic at 3am, what if I'm wasting my twenties", keywords: ["career", "panic", "wasting"], emotion: "fear", tone: "stress" },
    { id: 5, timestamp: "Feb 14", rawText: "saw someone my age succeed and now career dread is back", keywords: ["career", "dread", "succeed"], emotion: "anxiety", tone: "stress" },
    { id: 6, timestamp: "Feb 22", rawText: "career stress making it hard to focus on anything else", keywords: ["career", "stress", "focus"], emotion: "anxiety", tone: "stress" },
    { id: 7, timestamp: "Mar 1", rawText: "questioning my entire career path again, is this right for me", keywords: ["career", "path", "questioning"], emotion: "anxiety", tone: "stress" },
    { id: 8, timestamp: "Mar 8", rawText: "career imposter syndrome hitting different today", keywords: ["career", "imposter"], emotion: "fear", tone: "stress" },
    // ─── Money stress cluster (6 entries → visible crater) ───
    { id: 9, timestamp: "Jan 8", rawText: "money feels tight this month, watching every dollar", keywords: ["money", "tight"], emotion: "anxiety", tone: "stress" },
    { id: 10, timestamp: "Jan 20", rawText: "money stress again, should I take the safe route", keywords: ["money", "stress", "safe"], emotion: "anxiety", tone: "stress" },
    { id: 11, timestamp: "Feb 5", rawText: "rent is due and money is low, feeling the squeeze", keywords: ["money", "rent", "squeeze"], emotion: "anxiety", tone: "stress" },
    { id: 12, timestamp: "Feb 18", rawText: "money anxiety woke me up at 4am doing math in my head", keywords: ["money", "anxiety", "math"], emotion: "anxiety", tone: "stress" },
    { id: 13, timestamp: "Mar 2", rawText: "another month of money stress, when does this end", keywords: ["money", "stress"], emotion: "exhaustion", tone: "stress" },
    { id: 14, timestamp: "Mar 7", rawText: "money worries coloring everything, hard to enjoy things", keywords: ["money", "worries", "enjoy"], emotion: "sadness", tone: "stress" },
    // ─── Building/creating cluster (7 entries → tall flare) ───
    { id: 15, timestamp: "Jan 15", rawText: "built something cool today, forgot about everything for hours", keywords: ["built", "cool"], emotion: "excitement", tone: "resolved" },
    { id: 16, timestamp: "Jan 25", rawText: "in the zone building this new project, time disappeared", keywords: ["built", "project", "zone"], emotion: "excitement", tone: "resolved" },
    { id: 17, timestamp: "Feb 8", rawText: "built a prototype and it actually works, feeling alive", keywords: ["built", "prototype", "alive"], emotion: "joy", tone: "resolved" },
    { id: 18, timestamp: "Feb 16", rawText: "creating again after a slump, this is what I'm meant to do", keywords: ["creating", "meant"], emotion: "confidence", tone: "resolved" },
    { id: 19, timestamp: "Feb 28", rawText: "shipped the feature I've been building, pure satisfaction", keywords: ["built", "shipped", "satisfaction"], emotion: "confidence", tone: "resolved" },
    { id: 20, timestamp: "Mar 5", rawText: "building momentum with this project, ideas flowing freely", keywords: ["built", "momentum", "ideas"], emotion: "excitement", tone: "resolved" },
    { id: 21, timestamp: "Mar 10", rawText: "built three things this week, on fire creatively", keywords: ["built", "creative", "fire"], emotion: "excitement", tone: "resolved" },
    // ─── Peace/grounding cluster (5 entries → gentle elevated ridge) ───
    { id: 22, timestamp: "Jan 18", rawText: "had a beautiful walk through the park, felt grounded", keywords: ["walk", "park", "grounded"], emotion: "peace", tone: "resolved" },
    { id: 23, timestamp: "Feb 2", rawText: "morning meditation brought real peace today", keywords: ["meditation", "peace"], emotion: "peace", tone: "resolved" },
    { id: 24, timestamp: "Feb 20", rawText: "sat by the water and just breathed, felt completely at peace", keywords: ["water", "breathed", "peace"], emotion: "peace", tone: "resolved" },
    { id: 25, timestamp: "Mar 3", rawText: "grounded myself with a long walk, the noise quieted down", keywords: ["grounded", "walk", "quiet"], emotion: "peace", tone: "resolved" },
    { id: 26, timestamp: "Mar 9", rawText: "found peace in the garden today, hands in the earth", keywords: ["peace", "garden", "earth"], emotion: "peace", tone: "resolved" },
    // ─── Sleep/exhaustion cluster (5 entries → crater) ───
    { id: 27, timestamp: "Jan 22", rawText: "sleep has been terrible, mind racing at 2am", keywords: ["sleep", "mind", "racing"], emotion: "exhaustion", tone: "stress" },
    { id: 28, timestamp: "Feb 6", rawText: "another night of broken sleep, running on empty", keywords: ["sleep", "broken", "empty"], emotion: "exhaustion", tone: "stress" },
    { id: 29, timestamp: "Feb 19", rawText: "sleep deprivation making everything feel harder", keywords: ["sleep", "harder"], emotion: "exhaustion", tone: "stress" },
    { id: 30, timestamp: "Mar 1", rawText: "tried every sleep trick, still waking up at 3am", keywords: ["sleep", "waking"], emotion: "frustration", tone: "stress" },
    { id: 31, timestamp: "Mar 6", rawText: "exhausted from bad sleep, body aches constantly", keywords: ["sleep", "exhausted", "aches"], emotion: "exhaustion", tone: "stress" },
    // ─── Relationship cluster (4 entries → mixed) ───
    { id: 32, timestamp: "Jan 30", rawText: "frustrated that my partner doesn't communicate clearly", keywords: ["partner", "communicate"], emotion: "frustration", tone: "stress" },
    { id: 33, timestamp: "Feb 10", rawText: "had an honest conversation with partner, felt closer", keywords: ["partner", "honest", "closer"], emotion: "love", tone: "resolved" },
    { id: 34, timestamp: "Feb 25", rawText: "partner and I are growing together, grateful for the effort", keywords: ["partner", "growing", "grateful"], emotion: "gratitude", tone: "resolved" },
    { id: 35, timestamp: "Mar 4", rawText: "partner surprised me today, feeling really loved", keywords: ["partner", "loved", "surprised"], emotion: "love", tone: "resolved" },
    // ─── Growth/clarity cluster (5 entries → flare) ───
    { id: 36, timestamp: "Jan 16", rawText: "great conversation with a mentor, clarity about direction", keywords: ["mentor", "clarity", "direction"], emotion: "clarity", tone: "resolved" },
    { id: 37, timestamp: "Feb 1", rawText: "breakthrough moment of clarity about what I actually want", keywords: ["clarity", "breakthrough", "want"], emotion: "clarity", tone: "resolved" },
    { id: 38, timestamp: "Feb 15", rawText: "reading is giving me clarity I didn't know I needed", keywords: ["reading", "clarity"], emotion: "clarity", tone: "resolved" },
    { id: 39, timestamp: "Mar 2", rawText: "clarity hit me during my run, I know what to do next", keywords: ["clarity", "run", "next"], emotion: "confidence", tone: "resolved" },
    { id: 40, timestamp: "Mar 8", rawText: "therapy session brought so much clarity, feeling lighter", keywords: ["clarity", "therapy", "lighter"], emotion: "clarity", tone: "resolved" },
    // ─── Loneliness thread (3 entries → small crater) ───
    { id: 41, timestamp: "Feb 9", rawText: "feeling really isolated lately, nobody checks in", keywords: ["isolated", "nobody"], emotion: "loneliness", tone: "stress" },
    { id: 42, timestamp: "Feb 23", rawText: "surrounded by people but still feel alone", keywords: ["alone", "people"], emotion: "loneliness", tone: "stress" },
    { id: 43, timestamp: "Mar 5", rawText: "lonely again tonight, scrolling through old messages", keywords: ["lonely", "messages"], emotion: "loneliness", tone: "stress" },
    // ─── Hope/future thread (3 entries → warm ridge) ───
    { id: 44, timestamp: "Feb 12", rawText: "feeling hopeful about what I'm building for the first time", keywords: ["hopeful", "building"], emotion: "hope", tone: "resolved" },
    { id: 45, timestamp: "Feb 27", rawText: "I can see a future I'm excited about, things are shifting", keywords: ["future", "excited", "shifting"], emotion: "hope", tone: "resolved" },
    { id: 46, timestamp: "Mar 9", rawText: "hope is the thread pulling me through, holding onto it", keywords: ["hope", "thread", "holding"], emotion: "hope", tone: "resolved" },
  ];

  const buildClusters = useCallback((list) => {
    const m = {};
    // Phase 1: aggregate by NORMALIZED keyword — "built"/"building" → "build"
    list.forEach(e => e.keywords.forEach(k => {
      const nk = normalizeKeyword(k);
      if (!m[nk]) m[nk] = { label: nk, frequency: 0, firstSeen: e.timestamp, lastSeen: e.timestamp, emotion: e.emotion, entries: [], emotionCounts: {}, rawKeywords: new Set(), entryTimestamps: [] };
      m[nk].frequency++; m[nk].lastSeen = e.timestamp; m[nk].entries.push(e.id);
      m[nk].rawKeywords.add(k);
      m[nk].emotionCounts[e.emotion] = (m[nk].emotionCounts[e.emotion] || 0) + 1;
      // Store timestamp for trajectory computation (keep last 30)
      m[nk].entryTimestamps.push(e.timestamp);
    }));
    // Phase 2: assign dominant emotion, compute trajectory, determine lifecycle stage
    Object.values(m).forEach(cluster => {
      let maxCount = 0, dominant = cluster.emotion;
      for (const [em, count] of Object.entries(cluster.emotionCounts)) {
        if (count > maxCount) { maxCount = count; dominant = em; }
      }
      cluster.emotion = dominant;
      cluster.rawKeywords = [...cluster.rawKeywords]; // Set → Array
      // Keep only last 30 timestamps for performance
      if (cluster.entryTimestamps.length > 30) cluster.entryTimestamps = cluster.entryTimestamps.slice(-30);
      // Compute trajectory (stress/resolving/dormant/active)
      const traj = computeTrajectory(cluster.entryTimestamps);
      cluster.trajectoryState = traj.state;
      cluster.trajectoryStrength = traj.trajectory;
      cluster.daysSinceLastEntry = traj.daysSinceLastEntry;
      // Lifecycle stage
      cluster.lifecycleStage = getLifecycleStage(cluster.frequency);
    });
    return Object.values(m).filter(p => p.frequency >= 1).sort((a, b) => b.frequency - a.frequency).slice(0, 40);
  }, []);

  const handleEnter = useCallback((mode) => {
    setPhase("main"); sound.play("reveal");
    if (mode === "explore") {
      setEntries(DEMO);
      const c = buildClusters(DEMO);
      setClusters(c);
      // Zoom to latest thought's first keyword
      const last = DEMO[DEMO.length - 1];
      if (last && last.keywords.length > 0) {
        setTimeout(() => setZoomTarget(last.keywords[0]), 1200);
      }
    }
    setTimeout(() => sound.play("drone"), 600);
  }, [buildClusters]);

  const handleSubmit = useCallback(() => {
    if (!inputText.trim()) return;
    sound.play("submit");
    const kw = extractKw(inputText);
    const emotion = detectEmotion(inputText);
    const tone = emotionToTrend(emotion);
    const now = new Date();
    const ts = `${now.toLocaleString("default", { month: "short" })} ${now.getDate()}`;
    const ne = { id: Date.now(), timestamp: ts, rawText: inputText, keywords: kw, emotion, tone };
    const all = [...entries, ne];

    // Snapshot old cluster freqs to detect aggregation threshold crossing
    const oldFreqs = {};
    clusters.forEach(c => { oldFreqs[c.label] = c.frequency; });

    const newClusters = buildClusters(all);
    setEntries(all); setClusters(newClusters); setInputText("");
    setFlash(true); setTimeout(() => setFlash(false), 800);

    // Detect lifecycle stage transitions
    // Thresholds: seed(1-2) → crystal(3) → cluster(6) → formation(11) → landmark(20)
    const lifecycleBoundaries = [3, 6, 11, 20];
    const newCoalescing = [];
    let highestCrossedStage = null;

    newClusters.forEach(c => {
      const oldFreq = oldFreqs[c.label] || 0;
      for (const boundary of lifecycleBoundaries) {
        if (oldFreq < boundary && c.frequency >= boundary) {
          if (boundary === 3) newCoalescing.push(c.label); // visual transform anim for seed→crystal
          const newStage = getLifecycleStage(c.frequency);
          if (!highestCrossedStage || c.frequency > (highestCrossedStage.freq || 0)) {
            highestCrossedStage = { stage: newStage, freq: c.frequency, label: c.label, emotion: c.emotion };
          }
        }
      }
    });

    if (newCoalescing.length > 0) {
      // Seed → Crystal: the big visual transformation
      sound.play("transform");
      setCoalescingLabels(newCoalescing);
      setTimeout(() => setCoalescingLabels([]), 1500);
    } else if (highestCrossedStage) {
      // Higher lifecycle transition: play the stage's click sound as a "level up"
      sound.play(getLifecycleClickSound(highestCrossedStage.freq, highestCrossedStage.emotion));
      setFlash(true); setTimeout(() => setFlash(false), 600);
    } else {
      // No lifecycle crossing — regular impact for a new seed
      sound.play("impact");
    }

    // Navigate camera to the new thought's location FIRST so the persistent
    // mini-diamond is centered by the time the birth animation fades
    const primaryLabel = normalizeKeyword(kw[0] || "thought");
    let bestKwLabel = primaryLabel;
    if (kw.length > 0) {
      const bestKw = kw.reduce((best, k) => {
        const nk = normalizeKeyword(k);
        const cluster = newClusters.find(c => c.label === nk);
        return (cluster && cluster.frequency > (best.freq || 0)) ? { kw: nk, freq: cluster.frequency } : best;
      }, { kw: primaryLabel, freq: 0 });
      bestKwLabel = bestKw.kw;
      // Zoom immediately so the camera lands on the persistent marker
      setZoomTarget(null);
      setTimeout(() => setZoomTarget(bestKwLabel), 50);
      const cluster = newClusters.find(c => c.label === bestKwLabel);
      if (cluster && cluster.frequency >= 3) {
        setTimeout(() => setSelectedCluster(cluster), 2200);
      }
    }

    // ── Birth label: temporary overlay that fades after 2.8s ──
    // The real persistent seed lives in the 3D scene as a mini-diamond sprite
    setBirthLabel({ text: primaryLabel, emotion, id: ne.id });
    setTimeout(() => setBirthLabel(null), 2800);
  }, [inputText, entries, clusters, buildClusters]);

  const [selectedThought, setSelectedThought] = useState(null); // individual star click
  const handleMarkerClick = useCallback((info) => {
    if (typeof info === "string") {
      // Legacy: just a label string
      const cluster = clusters.find(c => c.label === info);
      if (cluster) setSelectedCluster(cluster);
    } else if (info.type === "diamond") {
      setSelectedThought(null);
      const cluster = clusters.find(c => c.label === info.clusterLabel);
      if (cluster) setSelectedCluster(cluster);
    } else if (info.type === "star") {
      setSelectedCluster(null);
      const entry = entries.find(e => e.id === info.thoughtId);
      if (entry) setSelectedThought({ entry, clusterLabel: info.clusterLabel });
    }
  }, [clusters, entries]);

  useEffect(() => {
    const l = document.createElement("link");
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300;9..144,0,400;9..144,1,300&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap";
    l.rel = "stylesheet"; document.head.appendChild(l);
    return () => { if (document.head.contains(l)) document.head.removeChild(l); };
  }, []);

  // Mobile resize listener
  useEffect(() => {
    const onResize = () => setIsMobile(isMobileDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mobile joystick move callback
  const handleMobileMove = useCallback((vec) => {
    mobileMovRef.current = vec;
  }, []);

  // Mobile zoom callbacks for planet orbit
  const handleMobileZoomIn = useCallback(() => { mobileZoomRef.current = 1; }, []);
  const handleMobileZoomOut = useCallback(() => { mobileZoomRef.current = -1; }, []);

  // Escape key closes popup and sidebar
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        if (selectedCluster) setSelectedCluster(null);
        else if (selectedThought) setSelectedThought(null);
        else if (settingsOpen) setSettingsOpen(false);
        else if (sidebarOpen) setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [selectedCluster, selectedThought, sidebarOpen, settingsOpen]);

  if (phase === "intro") return <CinematicIntro onEnter={handleEnter} />;

  return (
    <div onClick={(e) => {
      // Close settings/hotkey panels when clicking the background canvas area
      if (settingsOpen && !e.target.closest("[data-panel]") && !e.target.closest("button")) setSettingsOpen(false);
      if (hotkeyOpen && !e.target.closest("[data-panel]") && !e.target.closest("button")) setHotkeyOpen(false);
    }} style={{ width: "100%", height: "100vh", background: COLORS.bg, position: "relative", overflow: "hidden", fontFamily: "'DM Sans', system-ui" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, mixBlendMode: "overlay", opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {flash && <div style={{ position: "absolute", inset: 0, zIndex: 50, pointerEvents: "none",
        background: `radial-gradient(circle at 50% 50%, ${COLORS.glowAmber} 0%, transparent 50%)`,
        animation: "flashOut 0.8s ease-out forwards" }} />}

      {/* Birth label — fading thought name when a new star is born */}
      {birthLabel && (() => {
        const ec = getEmotionColor(birthLabel.emotion);
        return (
          <div key={birthLabel.id} style={{ position: "absolute", top: "42%", left: "50%", zIndex: 45, pointerEvents: "none", textAlign: "center" }}>
            {/* Outer pulse ring */}
            <div style={{
              position: "absolute", top: "50%", left: "50%", width: 220, height: 220,
              borderRadius: "50%", border: `1px solid ${ec.hex}55`,
              animation: "birthRing 2.4s ease-out forwards",
            }} />
            {/* Star burst */}
            <div style={{
              position: "absolute", top: "50%", left: "50%", width: 180, height: 180,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${ec.hex}cc 0%, ${ec.hex}88 15%, ${ec.hex}44 35%, ${ec.hex}11 60%, transparent 80%)`,
              animation: "starBurst 2.8s ease-out forwards",
            }} />
            {/* Inner bright core flash */}
            <div style={{
              position: "absolute", top: "50%", left: "50%", width: 24, height: 24,
              borderRadius: "50%",
              background: `radial-gradient(circle, #ffffff 0%, ${ec.hex} 50%, transparent 100%)`,
              animation: "birthCore 1.2s ease-out forwards",
            }} />
            {/* Cross flare rays */}
            <div style={{
              position: "absolute", top: "50%", left: "50%", width: 2, height: 120,
              background: `linear-gradient(to bottom, transparent, ${ec.hex}88, transparent)`,
              animation: "birthRay 2s ease-out forwards",
            }} />
            <div style={{
              position: "absolute", top: "50%", left: "50%", width: 120, height: 2,
              background: `linear-gradient(to right, transparent, ${ec.hex}88, transparent)`,
              animation: "birthRay 2s ease-out forwards",
            }} />
            {/* Mini-diamond icon */}
            <div style={{
              position: "absolute", top: "calc(50% - 28px)", left: "50%",
              width: 12, height: 16,
              animation: "birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            }}>
              <svg viewBox="0 0 12 16" style={{ width: "100%", height: "100%", filter: `drop-shadow(0 0 10px ${ec.hex})` }}>
                <defs>
                  <linearGradient id="birthGemGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#f0eff5" />
                    <stop offset="100%" stopColor="#dddbe6" />
                  </linearGradient>
                </defs>
                <path d={`M6,1 L11,8 L6,15 L1,8 Z`} fill="url(#birthGemGrad)" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" />
                <path d={`M1,8 L6,5 L11,8`} fill="none" stroke="rgba(184,180,200,0.35)" strokeWidth="0.4" />
              </svg>
            </div>
            {/* Thought label */}
            <div style={{
              position: "absolute", top: "calc(50% + 2px)", left: "50%", whiteSpace: "nowrap",
              fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 300,
              color: ec.hex, letterSpacing: "0.08em",
              textShadow: `0 0 24px ${ec.hex}cc, 0 0 48px ${ec.hex}66, 0 0 80px ${ec.hex}33`,
              animation: "birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            }}>
              {birthLabel.text}
            </div>
            {/* Emotion subtag */}
            <div style={{
              position: "absolute", top: "calc(50% + 34px)", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap",
              fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em",
              color: COLORS.textSecondary,
              animation: "birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards",
              opacity: 0,
            }}>
              {ec.label.toUpperCase()}
            </div>
          </div>
        );
      })()}

      <PlanetScene clusters={clusters} entries={entries} onMarkerClick={handleMarkerClick} zoomTarget={zoomTarget} viewMode={viewMode} sceneSettings={sceneSettings} coalescingLabels={coalescingLabels} mobileMovRef={mobileMovRef} mobileZoomRef={mobileZoomRef} />

      {/* Header — top center so it doesn't overlap the toggle button */}
      <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 20, display: "flex", alignItems: "center", gap: 10, animation: "fadeDown 1s ease 0.4s both", pointerEvents: "none" }}>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, color: COLORS.textPrimary, fontWeight: 300, textShadow: `0 0 30px ${COLORS.glowAmber}` }}>COIL</div>
        <div style={{ width: 1, height: 16, background: COLORS.surfaceLight }} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted, letterSpacing: "0.1em" }}>{entries.length} MAPPED</div>
      </div>

      <CategorySidebar clusters={clusters} entries={entries} isOpen={sidebarOpen} onToggle={() => { setSidebarOpen(!sidebarOpen); sound.play("hover"); }}
        onClusterClick={(label) => {
          // Center the camera on this cluster
          setZoomTarget(null);
          setTimeout(() => setZoomTarget(label), 50);
          // Play lifecycle-appropriate sound
          const cluster = clusters.find(c => c.label === label);
          if (cluster) {
            sound.play(getLifecycleClickSound(cluster.frequency, cluster.emotion));
            // For seeds (1-2 entries), show the most recent thought popup
            // For crystals+ (3+), show the cluster popup
            if (cluster.frequency <= 2) {
              const relatedEntries = entries.filter(e => e.keywords.some(k => normalizeKeyword(k) === label));
              const latest = relatedEntries[relatedEntries.length - 1];
              if (latest) setTimeout(() => { setSelectedCluster(null); setSelectedThought({ entry: latest, clusterLabel: label }); }, 400);
            } else {
              setTimeout(() => setSelectedCluster(cluster), 400);
            }
          }
        }} />
      <HotkeyPanel isOpen={hotkeyOpen} onToggle={() => setHotkeyOpen(!hotkeyOpen)} viewMode={viewMode} isMobile={isMobile} />
      <SceneSettingsPanel isOpen={settingsOpen} onToggle={() => setSettingsOpen(!settingsOpen)} settings={sceneSettings} onChange={setSceneSettings} isMobile={isMobile} />

      {/* Mobile virtual joystick */}
      {isMobile && <VirtualJoystick onMove={handleMobileMove} viewMode={viewMode} onZoomIn={handleMobileZoomIn} onZoomOut={handleMobileZoomOut} />}

      {/* View Mode Toggle */}
      <button onClick={() => { setViewMode(v => v === "surface" ? "planet" : "surface"); sound.play("reveal"); }}
        onMouseEnter={() => sound.play("hover")}
        style={{
          position: "absolute", top: isMobile ? 14 : 18, right: isMobile ? 14 : 18, zIndex: 30,
          background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
          border: `1px solid ${COLORS.surfaceLight}`,
          borderRadius: 12, padding: isMobile ? "6px 10px" : "9px 16px", cursor: "pointer",
          backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: 8,
          transition: "all 0.3s ease",
          boxShadow: `0 2px 10px rgba(0,0,0,0.3)`,
        }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: isMobile ? 8 : 9, letterSpacing: "0.12em", color: COLORS.amber }}>
          {viewMode === "surface" ? "\u25C8 SURFACE" : "\u25CE PLANET"}
        </span>
      </button>

      {selectedCluster && <ClusterPopup cluster={selectedCluster} entries={entries} onClose={() => setSelectedCluster(null)} />}
      {selectedThought && !selectedCluster && <ThoughtPopup thought={selectedThought} clusters={clusters} onClose={() => setSelectedThought(null)} onViewCluster={(c) => { setSelectedThought(null); setSelectedCluster(c); }} />}

      {/* Input */}
      <div style={{ position: "absolute", bottom: isMobile ? 14 : 28, left: "50%", transform: "translateX(-50%)", width: isMobile ? "70%" : "88%", maxWidth: isMobile ? 340 : 480, zIndex: 20, animation: "fadeUp 1s ease 0.6s both" }}>
        {!isMobile && <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.25em",
          color: inputFocused ? COLORS.amber : COLORS.textMuted,
          marginBottom: 10, marginLeft: 6, transition: "color 0.5s ease",
          textShadow: inputFocused ? `0 0 12px ${COLORS.amber}44` : "none",
        }}>
          WHAT'S LOOPING?
        </div>}
        <div style={{ position: "relative", borderRadius: 12 }}>
          <textarea value={inputText} onChange={e => setInputText(e.target.value)}
            onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(); } }}
            placeholder={isMobile ? "what's looping..." : "dump whatever is on your mind..."}
            rows={isMobile ? 1 : 2}
            style={{
              width: "100%",
              background: `linear-gradient(135deg, ${COLORS.surface}ee, ${COLORS.surfaceMid}88)`,
              border: `1px solid ${inputFocused ? COLORS.amber + "44" : COLORS.surfaceLight}`,
              borderRadius: isMobile ? 10 : 12, padding: isMobile ? "10px 42px 10px 14px" : "14px 50px 14px 18px",
              color: COLORS.textPrimary, fontFamily: "'DM Sans', system-ui", fontSize: isMobile ? 13 : 14,
              lineHeight: 1.7, resize: "none", outline: "none", boxSizing: "border-box",
              letterSpacing: "0.01em",
              boxShadow: `0 2px 10px rgba(0,0,0,0.3)`,
              transition: "all 0.3s ease",
            }} />
          <button onClick={handleSubmit} onMouseEnter={() => inputText.trim() && sound.play("hover")}
            style={{
              position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
              width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%",
              border: "none",
              cursor: inputText.trim() ? "pointer" : "default",
              background: inputText.trim()
                ? `linear-gradient(135deg, ${COLORS.amber}, ${COLORS.amberDim})`
                : "transparent",
              color: inputText.trim() ? COLORS.bg : COLORS.textMuted,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: isMobile ? 12 : 14, fontWeight: 500,
              transition: "all 0.3s ease", zIndex: 3,
              boxShadow: inputText.trim() ? `0 0 12px ${COLORS.amber}33` : "none",
              opacity: inputText.trim() ? 1 : 0.4,
            }}>{"\u2191"}</button>
        </div>
      </div>

      {!isMobile && <div style={{ position: "absolute", bottom: 5, left: "50%", transform: "translateX(-50%)", fontFamily: "'JetBrains Mono', monospace", fontSize: 7, color: COLORS.textMuted, letterSpacing: "0.25em", opacity: 0.35, zIndex: 15, pointerEvents: "none" }}>
        A LIRIO LABS INSTRUMENT
      </div>}

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flashOut { 0%{opacity:0.5} 100%{opacity:0} }
        @keyframes birthFade { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.6)} 12%{opacity:1;transform:translate(-50%,-50%) scale(1.05)} 20%{transform:translate(-50%,-50%) scale(1)} 75%{opacity:0.9} 100%{opacity:0;transform:translate(-50%,-50%) scale(1) translateY(-18px)} }
        @keyframes starBurst { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 15%{opacity:1;transform:translate(-50%,-50%) scale(1.2)} 30%{opacity:0.9;transform:translate(-50%,-50%) scale(0.85)} 50%{opacity:0.6;transform:translate(-50%,-50%) scale(1.6)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.5)} }
        @keyframes birthRing { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 20%{opacity:0.8;transform:translate(-50%,-50%) scale(0.8)} 60%{opacity:0.3;transform:translate(-50%,-50%) scale(1.5)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.2)} }
        @keyframes birthCore { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 10%{opacity:1;transform:translate(-50%,-50%) scale(2)} 40%{opacity:0.8;transform:translate(-50%,-50%) scale(1)} 100%{opacity:0;transform:translate(-50%,-50%) scale(0)} }
        @keyframes birthRay { 0%{opacity:0;transform:translate(-50%,-50%) scaleY(0)} 15%{opacity:0.8;transform:translate(-50%,-50%) scaleY(1.2)} 50%{opacity:0.4;transform:translate(-50%,-50%) scaleY(1)} 100%{opacity:0;transform:translate(-50%,-50%) scaleY(0.3)} }
        @keyframes popupIn { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.92)} 100%{opacity:1;transform:translate(-50%,-50%) scale(1)} }
        textarea::placeholder{color:${COLORS.textMuted};font-style:italic}
        ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:${COLORS.surfaceLight};border-radius:3px}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:10px;border-radius:50%;background:${COLORS.amber};cursor:pointer;border:none;box-shadow:0 0 6px ${COLORS.amber}44}
        input[type="range"]::-moz-range-thumb{width:10px;height:10px;border-radius:50%;background:${COLORS.amber};cursor:pointer;border:none}
        *{box-sizing:border-box}
      `}</style>
    </div>
  );
}
