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
    if (!this.ctx) return;
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
  }
}
const sound = new SoundEngine();

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
function extractKw(t) { return t.toLowerCase().replace(/[^a-z\s]/g,"").split(/\s+/).filter(w => w.length > 2 && !STOP.has(w)); }

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
function PlanetScene({ clusters, entries, onMarkerClick, zoomTarget, viewMode }) {
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

  useEffect(() => { modeRef.current = viewMode; }, [viewMode]);

  const TERRAIN_SIZE = 40;
  const TERRAIN_SEG = 120;

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
      const craterScale = trend === "stress" ? Math.log2(1 + c.frequency) * 0.015 : 0;
      const flareScale = trend === "resolved" ? Math.min(c.frequency * 0.02, 0.12) : 0;
      const neutralScale = trend === "neutral" ? Math.min(c.frequency * 0.01, 0.06) : 0;
      return {
        ...c, spherePos: pos, direction: pos.clone().normalize(),
        planeX, planeZ,
        craterScale, flareScale, neutralScale, trend,
        color: new THREE.Color(ec.r, ec.g, ec.b), colorData: ec,
      };
    });
  }, [clusters]);

  // Zoom to target
  useEffect(() => {
    if (!zoomTarget) return;
    const { phi, theta } = hashToAngle(zoomTarget);
    // Surface: walk near that spot
    const px = ((theta / (Math.PI * 2)) - 0.5) * TERRAIN_SIZE;
    const pz = ((phi / Math.PI) - 0.5) * TERRAIN_SIZE;
    surfRef.current.targetX = px;
    surfRef.current.targetZ = pz + 5;
    surfRef.current.targetYaw = Math.atan2(px - surfRef.current.x, pz - surfRef.current.z);
    // Planet: orbit to face that spot
    orbitRef.current.targetPhi = phi;
    orbitRef.current.targetTheta = theta + Math.PI;
    orbitRef.current.targetRadius = 5.5;
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
    const cam = new THREE.PerspectiveCamera(60, w / h, 0.01, 500);
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
    const terrainWireGeo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, 50, 50);
    terrainWireGeo.rotateX(-Math.PI / 2);
    const terrainWireMat = new THREE.MeshBasicMaterial({ color: 0xd4a574, wireframe: true, transparent: true, opacity: 0.025 });
    const terrainWireMesh = new THREE.Mesh(terrainWireGeo, terrainWireMat);
    terrainWireMesh.position.y = 0.02; scene.add(terrainWireMesh);

    // Ambient particles floating above terrain
    const particleCount = 300;
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
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xd4a574, wireframe: true, transparent: true, opacity: 0.012 });
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

    // ═══ NEBULAE: Distant, subtle gas clouds — NOT close blobs ═══
    const nebulaGroup = new THREE.Group();
    const nebulaEmotions = ["anxiety","peace","love","sadness","joy","hope","clarity","confidence"];
    nebulaEmotions.forEach((em, idx) => {
      const ec = EMOTION_COLORS[em] || EMOTION_COLORS.neutral;
      // Far away, large, very transparent — like real nebulae seen from distance
      const nebGeo = new THREE.SphereGeometry(15 + Math.random() * 20, 8, 8);
      const nebMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(ec.r * 0.8, ec.g * 0.8, ec.b * 0.8),
        transparent: true, opacity: 0.008 + Math.random() * 0.008,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const neb = new THREE.Mesh(nebGeo, nebMat);
      const angle = (idx / nebulaEmotions.length) * Math.PI * 2;
      const dist = 60 + Math.random() * 80;
      neb.position.set(
        Math.cos(angle) * dist,
        (Math.random() - 0.5) * 30,
        Math.sin(angle) * dist
      );
      neb.scale.set(1.5, 0.6 + Math.random() * 0.4, 1.5);
      nebulaGroup.add(neb);
    });
    scene.add(nebulaGroup);

    // ═══ COMETS: A few slow-moving streaks in the distance ═══
    const cometGroup = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const cometGeo = new THREE.BufferGeometry();
      const tailLen = 8;
      const cometPositions = new Float32Array(tailLen * 3);
      const cometOpacities = new Float32Array(tailLen);
      // Random position in far space
      const cx = (Math.random() - 0.5) * 120;
      const cy = (Math.random() - 0.5) * 60;
      const cz = 40 + Math.random() * 80;
      const dx = (Math.random() - 0.5) * 0.8;
      const dy = (Math.random() - 0.5) * 0.3;
      for (let j = 0; j < tailLen; j++) {
        cometPositions[j*3] = cx - dx * j * 1.5;
        cometPositions[j*3+1] = cy - dy * j * 1.5;
        cometPositions[j*3+2] = cz;
        cometOpacities[j] = 1.0 - j / tailLen;
      }
      cometGeo.setAttribute("position", new THREE.BufferAttribute(cometPositions, 3));
      cometGeo.setAttribute("opacity", new THREE.BufferAttribute(cometOpacities, 1));
      const cometMat = new THREE.ShaderMaterial({
        vertexShader: `attribute float opacity; varying float vOpacity;
          void main() { vOpacity = opacity; gl_PointSize = mix(3.0, 1.0, 1.0 - opacity);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `varying float vOpacity;
          void main() { float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float a = (1.0 - d * 2.0) * vOpacity * 0.6;
            gl_FragColor = vec4(0.9, 0.85, 0.7, a); }`,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const comet = new THREE.Points(cometGeo, cometMat);
      comet.userData = { speed: 0.02 + Math.random() * 0.03, dx, dy };
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
      starField, nebulaGroup, cometGroup, pl, ambientLight, hemiLight, dl, dl2, dl3,
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
          onMarkerClick(hits[0].object.userData.clusterLabel);
          sound.play("reveal");
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
          onMarkerClick(hits[0].object.userData.clusterLabel);
          sound.play("reveal");
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
        const walkSpeed = 0.08;
        const cosYaw = Math.cos(surf.yaw), sinYaw = Math.sin(surf.yaw);
        // WASD + arrows all walk
        if (keys["w"] || keys["arrowup"]) { surf.targetX += sinYaw * walkSpeed; surf.targetZ += cosYaw * walkSpeed; }
        if (keys["s"] || keys["arrowdown"]) { surf.targetX -= sinYaw * walkSpeed; surf.targetZ -= cosYaw * walkSpeed; }
        if (keys["a"] || keys["arrowleft"]) { surf.targetX += cosYaw * walkSpeed; surf.targetZ -= sinYaw * walkSpeed; }
        if (keys["d"] || keys["arrowright"]) { surf.targetX -= cosYaw * walkSpeed; surf.targetZ += sinYaw * walkSpeed; }

        // Smooth interpolation — responsive movement
        surf.x += (surf.targetX - surf.x) * 0.12;
        surf.z += (surf.targetZ - surf.z) * 0.12;
        surf.yaw += (surf.targetYaw - surf.yaw) * 0.12;
        surf.pitch += (surf.targetPitch - surf.pitch) * 0.12;

        // Camera: hover above terrain, looking forward — clean FPV, more terrain visible
        const camHeight = 4.0 + Math.sin(t * 0.25) * 0.15;

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
        const tPos = terrainGeo.attributes.position;
        const tCols = new Float32Array(tPos.count * 3);

        for (let i = 0; i < tPos.count; i++) {
          const vx = tPos.getX(i), vz = tPos.getZ(i);

          // Base terrain from fbm (matches original COIL exactly)
          let elev = fbm3D(vx * 0.35 + t * 0.08, 0, vz * 0.35 + t * 0.05, 5) * 0.7;
          elev += Math.sin(vx * 0.3 + t * 0.2) * Math.cos(vz * 0.3 + t * 0.15) * 0.2;

          // Base color: warm earth tones (original palette)
          const nh = (elev + 1) / 2.2;
          let cr, cg, cb;
          if (nh > 0.6) { cr = 0.78; cg = 0.42; cb = 0.32; }
          else if (nh < 0.3) { cr = 0.38; cg = 0.52; cb = 0.4; }
          else { cr = 0.58 + nh * 0.12; cg = 0.44 + nh * 0.08; cb = 0.32; }

          // Subtle terrain ripple near player position
          const md = Math.hypot(vx - surf.x, vz - surf.z);
          if (md < 3) elev += Math.sin(md * 3 - t * 4) * 0.05 * Math.max(0, 1 - md / 3);

          // Cluster deformations on flat terrain
          for (const cluster of clusterData) {
            const d = Math.hypot(vx - cluster.planeX, vz - cluster.planeZ);
            const radius = 2.5 + Math.min(cluster.frequency * 0.3, 2);
            const influence = Math.max(0, 1 - d / radius);
            if (influence > 0) {
              const eased = influence * influence * (3 - 2 * influence);
              if (cluster.trend === "stress") {
                elev -= eased * cluster.craterScale * 6;
                // Strong emotion color saturation — the terrain GLOWS with feeling
                const glow = 0.4 + Math.min(cluster.frequency * 0.06, 0.4);
                cr += eased * cluster.colorData.r * glow;
                cg += eased * cluster.colorData.g * glow * 0.6;
                cb += eased * cluster.colorData.b * glow * 0.6;
              } else if (cluster.trend === "resolved") {
elev += eased * cluster.flareScale * 5 * (1 + Math.sin(t * 0.8) * 0.06);
                const glow = 0.45 + Math.min(cluster.frequency * 0.06, 0.4);
                cr += eased * cluster.colorData.r * glow;
                cg += eased * cluster.colorData.g * glow;
                cb += eased * cluster.colorData.b * glow * 0.8;
              } else {
                elev += eased * cluster.neutralScale * 2;
                cr += eased * cluster.colorData.r * 0.3;
                cg += eased * cluster.colorData.g * 0.3;
                cb += eased * cluster.colorData.b * 0.25;
              }
            }
          }

          // Gentle edge softening — terrain stays bright, just fades slightly at far boundaries
          const edgeDist = Math.max(Math.abs(vx), Math.abs(vz)) / (TERRAIN_SIZE * 0.5);
          const edge = edgeDist > 0.85 ? 1.0 - (edgeDist - 0.85) / 0.15 : 1.0;

          tPos.setY(i, elev);
          tCols[i*3] = Math.max(0, Math.min(1, cr * Math.max(0.15, edge)));
          tCols[i*3+1] = Math.max(0, Math.min(1, cg * Math.max(0.15, edge)));
          tCols[i*3+2] = Math.max(0, Math.min(1, cb * Math.max(0.15, edge)));
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
        if (keys["q"] || keys["-"]) orbit.targetRadius = Math.min(14, orbit.targetRadius + 0.06);
        if (keys["e"] || keys["="]) orbit.targetRadius = Math.max(4, orbit.targetRadius - 0.06);
        if (keys["r"]) orbit.targetRadius = Math.max(4, orbit.targetRadius - 0.1);
        if (keys["f"]) orbit.targetRadius = Math.min(14, orbit.targetRadius + 0.1);

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
          let displacement = fbm3D(dir.x * 2.2 + t * 0.03, dir.y * 2.2, dir.z * 2.2 + t * 0.02, 4) * 0.02;

          let cr = 0.35, cg = 0.28, cb = 0.22;
          const nv = (displacement + 0.06) / 0.12;
          cr += nv * 0.06; cg += nv * 0.05; cb += nv * 0.03;

          for (const cluster of clusterData) {
            const dot = dir.dot(cluster.direction);
            const angularDist = Math.acos(Math.min(1, Math.max(-1, dot)));
            const radius = 0.35 + Math.min(cluster.frequency * 0.03, 0.2);
            const influence = Math.max(0, 1 - angularDist / radius);
            if (influence > 0) {
              const eased = influence * influence * (3 - 2 * influence);
              if (cluster.trend === "stress") {
                displacement -= eased * cluster.craterScale;
                const glow = 0.4 + Math.min(cluster.frequency * 0.06, 0.4);
                cr += eased * cluster.colorData.r * glow;
                cg += eased * cluster.colorData.g * glow * 0.6;
                cb += eased * cluster.colorData.b * glow * 0.6;
              } else if (cluster.trend === "resolved") {
                displacement += eased * cluster.flareScale * (1 + Math.sin(t * 0.8) * 0.05);
                const glow = 0.45 + Math.min(cluster.frequency * 0.06, 0.4);
                cr += eased * cluster.colorData.r * glow;
                cg += eased * cluster.colorData.g * glow;
                cb += eased * cluster.colorData.b * glow * 0.8;
              } else {
                displacement += eased * cluster.neutralScale;
                cr += eased * cluster.colorData.r * 0.3;
                cg += eased * cluster.colorData.g * 0.3;
                cb += eased * cluster.colorData.b * 0.25;
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

      // ─── Shared: billboard markers toward camera ───
      markersRef.current.forEach(m => {
        m.quaternion.copy(cam.quaternion);
        const baseScale = m.userData.baseScale || 0.05;
        const pulse = baseScale * (1 + Math.sin(t * 2.5 + m.userData.seed) * 0.15);
        m.scale.setScalar(pulse);
      });

      // Galaxy spin
      starField.rotation.y += 0.00008;
      nebulaGroup.rotation.y += 0.00005;

      // Animate comets — slow drift across the sky
      cometGroup.children.forEach(comet => {
        const pos = comet.geometry.attributes.position;
        const ud = comet.userData;
        for (let j = 0; j < pos.count; j++) {
          pos.setX(j, pos.getX(j) + ud.speed * ud.dx);
          pos.setY(j, pos.getY(j) + ud.speed * ud.dy);
        }
        pos.needsUpdate = true;
        // Reset comet when it drifts too far
        if (Math.abs(pos.getX(0)) > 200) {
          const cx = (Math.random() - 0.5) * 120;
          const cy = (Math.random() - 0.5) * 60;
          const cz = 40 + Math.random() * 80;
          for (let j = 0; j < pos.count; j++) {
            pos.setX(j, cx - ud.dx * j * 1.5);
            pos.setY(j, cy - ud.dy * j * 1.5);
            pos.setZ(j, cz);
          }
          pos.needsUpdate = true;
        }
      });

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

  // ─── Update markers for both modes when clusters change ───
  useEffect(() => {
    const { surfaceMarkerGroup, planetMarkerGroup } = sceneRef.current;
    if (!surfaceMarkerGroup || !planetMarkerGroup) return;

    while (surfaceMarkerGroup.children.length) surfaceMarkerGroup.remove(surfaceMarkerGroup.children[0]);
    while (planetMarkerGroup.children.length) planetMarkerGroup.remove(planetMarkerGroup.children[0]);
    markersRef.current = [];

    clusterData.forEach((c, idx) => {
      // Shared texture — larger canvas with emotion-colored glow halo
      const canvas = document.createElement("canvas");
      canvas.width = 48; canvas.height = 48;
      const ctx = canvas.getContext("2d");
      const hex = c.colorData.hex;

      // Outer glow halo — soft radial gradient in emotion color
      const grad = ctx.createRadialGradient(24, 24, 4, 24, 24, 22);
      grad.addColorStop(0, hex + "aa");
      grad.addColorStop(0.4, hex + "44");
      grad.addColorStop(1, hex + "00");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 48, 48);

      // Diamond marker
      ctx.shadowColor = hex; ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(24, 6); ctx.lineTo(38, 24); ctx.lineTo(24, 42); ctx.lineTo(10, 24);
      ctx.closePath();
      ctx.fillStyle = hex; ctx.globalAlpha = 0.95; ctx.fill();
      ctx.globalAlpha = 1; ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 1; ctx.stroke();
      // Inner bright core for high frequency clusters
      if (c.frequency >= 3) {
        ctx.beginPath(); ctx.arc(24, 24, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.9; ctx.fill();
      }
      if (c.frequency >= 6) {
        // Extra ring for massive clusters
        ctx.beginPath(); ctx.arc(24, 24, 8, 0, Math.PI * 2);
        ctx.strokeStyle = hex; ctx.globalAlpha = 0.4; ctx.lineWidth = 1.5; ctx.stroke();
      }
      const texture = new THREE.CanvasTexture(canvas);

      // Surface marker: floating above flat terrain
      const surfMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, sizeAttenuation: true });
      const surfSprite = new THREE.Sprite(surfMat);
      surfSprite.position.set(c.planeX, 0.8 + (c.flareScale || 0) * 2, c.planeZ);
      const surfBase = 0.35 + Math.min(c.frequency * 0.04, 0.3);
      surfSprite.scale.setScalar(surfBase);
      surfSprite.userData = { clusterLabel: c.label, seed: idx * 1.7, baseScale: surfBase };
      surfaceMarkerGroup.add(surfSprite);
      markersRef.current.push(surfSprite);

      // Planet marker: on sphere surface
      const planetMat = new THREE.SpriteMaterial({ map: texture.clone(), transparent: true, depthWrite: false, sizeAttenuation: true });
      const planetSprite = new THREE.Sprite(planetMat);
      const planetPos = c.direction.clone().multiplyScalar(2.8 + 0.06 + (c.flareScale || 0));
      planetSprite.position.copy(planetPos);
      const planetBase = 0.04 + Math.min(c.frequency * 0.005, 0.04);
      planetSprite.scale.setScalar(planetBase);
      planetSprite.userData = { clusterLabel: c.label, seed: idx * 1.7, baseScale: planetBase };
      planetMarkerGroup.add(planetSprite);
      markersRef.current.push(planetSprite);

      // Emission point light at each cluster on the planet — illuminates nearby terrain
      if (c.frequency >= 2) {
        const lightColor = new THREE.Color(c.colorData.r, c.colorData.g, c.colorData.b);
        const intensity = Math.min(c.frequency * 0.08, 0.6);
        const clusterLight = new THREE.PointLight(lightColor, intensity, 2.5);
        const lightPos = c.direction.clone().multiplyScalar(2.8 + 0.15);
        clusterLight.position.copy(lightPos);
        planetMarkerGroup.add(clusterLight);
      }

      // Surface mode: point light too for terrain glow
      if (c.frequency >= 2) {
        const lightColor = new THREE.Color(c.colorData.r, c.colorData.g, c.colorData.b);
        const intensity = Math.min(c.frequency * 0.1, 0.8);
        const surfLight = new THREE.PointLight(lightColor, intensity, 6);
        surfLight.position.set(c.planeX, 1.5 + (c.flareScale || 0) * 2, c.planeZ);
        surfaceMarkerGroup.add(surfLight);
      }
    });
  }, [clusterData]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, cursor: "grab", touchAction: "none" }} />;
}


// ─── Cluster Popup (shows thoughts for a clicked marker) ───
function ClusterPopup({ cluster, entries, onClose }) {
  if (!cluster) return null;
  const ec = getEmotionColor(cluster.emotion);
  const relatedEntries = entries.filter(e => e.keywords.includes(cluster.label));
  const trend = emotionToTrend(cluster.emotion);
  const typeLabel = trend === "stress" ? "crater" : trend === "resolved" ? "flare" : "ridge";

  return (
    <div style={{
      position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      background: `${COLORS.bg}f5`, backdropFilter: "blur(24px)",
      border: `1px solid ${ec.hex}44`, borderRadius: 16, padding: "24px 28px",
      maxWidth: 380, width: "90%", zIndex: 40, maxHeight: "60vh", overflowY: "auto",
      boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${ec.hex}15`,
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
  );
}


// ─── Category Sidebar (auto-minimized) ───
function CategorySidebar({ clusters, entries, isOpen, onToggle }) {
  const [openCats, setOpenCats] = useState({});

  const grouped = useMemo(() => {
    const allKw = clusters.map(c => c.label);
    const cats = categorizeKeywords(allKw);
    const result = {};
    for (const [cat, keywords] of Object.entries(cats)) {
      result[cat] = keywords.map(kw => clusters.find(c => c.label === kw)).filter(Boolean);
    }
    return result;
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
        background: `${COLORS.surface}cc`, border: `1px solid ${COLORS.surfaceLight}`,
        color: COLORS.amber, cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 16, zIndex: 30, backdropFilter: "blur(8px)",
      }}>
        {isOpen ? "×" : "≡"}
      </button>
      <div data-sidebar="true" style={{
        position: "absolute", top: 0, left: 0, width: 300, height: "100%",
        background: `${COLORS.bg}f8`, backdropFilter: "blur(24px)",
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
                    <div key={i} style={{ padding: "8px 0 8px 24px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: ec.hex, boxShadow: `0 0 6px ${ec.hex}44` }} />
                        <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 13, color: COLORS.textPrimary }}>{item.label}</span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: ec.hex, marginLeft: "auto" }}>
                          {item.frequency}× · {trend === "stress" ? "crater" : trend === "resolved" ? "flare" : "ridge"}
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
function HotkeyPanel({ isOpen, onToggle, viewMode }) {
  const surfaceKeys = [
    { key: "W / ↑", action: "Walk forward" },
    { key: "S / ↓", action: "Walk backward" },
    { key: "A / ←", action: "Walk left" },
    { key: "D / →", action: "Walk right" },
    { key: "Drag", action: "Look around" },
    { key: "Click marker", action: "View thoughts" },
    { key: "Tap marker", action: "View thoughts (mobile)" },
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
        position: "absolute", bottom: 18, right: 18, width: 34, height: 34, borderRadius: 8,
        background: `${COLORS.surface}cc`, border: `1px solid ${COLORS.surfaceLight}`,
        color: COLORS.textMuted, cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 13, zIndex: 30, backdropFilter: "blur(8px)",
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        ?
      </button>
      <div data-panel="true" style={{
        position: "absolute", bottom: 60, right: 18, width: 220,
        background: `${COLORS.bg}f5`, backdropFilter: "blur(20px)",
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


// ─── Main ───
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
    // Phase 1: aggregate by keyword
    list.forEach(e => e.keywords.forEach(k => {
      if (!m[k]) m[k] = { label: k, frequency: 0, firstSeen: e.timestamp, lastSeen: e.timestamp, emotion: e.emotion, entries: [], emotionCounts: {} };
      m[k].frequency++; m[k].lastSeen = e.timestamp; m[k].entries.push(e.id);
      // Track emotion frequency to pick the dominant emotion for each cluster
      m[k].emotionCounts[e.emotion] = (m[k].emotionCounts[e.emotion] || 0) + 1;
    }));
    // Phase 2: assign dominant emotion (most frequent emotion for this keyword)
    Object.values(m).forEach(cluster => {
      let maxCount = 0, dominant = cluster.emotion;
      for (const [em, count] of Object.entries(cluster.emotionCounts)) {
        if (count > maxCount) { maxCount = count; dominant = em; }
      }
      cluster.emotion = dominant;
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
    setEntries(all); setClusters(buildClusters(all)); setInputText("");
    setFlash(true); setTimeout(() => setFlash(false), 800);
    sound.play("impact");
    // Zoom camera to the new thought
    if (kw.length > 0) {
      setTimeout(() => setZoomTarget(kw[0]), 300);
    }
  }, [inputText, entries, buildClusters]);

  const handleMarkerClick = useCallback((label) => {
    const cluster = clusters.find(c => c.label === label);
    if (cluster) setSelectedCluster(cluster);
  }, [clusters]);

  useEffect(() => {
    const l = document.createElement("link");
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300;9..144,0,400;9..144,1,300&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap";
    l.rel = "stylesheet"; document.head.appendChild(l);
    return () => { if (document.head.contains(l)) document.head.removeChild(l); };
  }, []);

  if (phase === "intro") return <CinematicIntro onEnter={handleEnter} />;

  return (
    <div style={{ width: "100%", height: "100vh", background: COLORS.bg, position: "relative", overflow: "hidden", fontFamily: "'DM Sans', system-ui" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, mixBlendMode: "overlay", opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {flash && <div style={{ position: "absolute", inset: 0, zIndex: 50, pointerEvents: "none",
        background: `radial-gradient(circle at 50% 50%, ${COLORS.glowAmber} 0%, transparent 50%)`,
        animation: "flashOut 0.8s ease-out forwards" }} />}

      <PlanetScene clusters={clusters} entries={entries} onMarkerClick={handleMarkerClick} zoomTarget={zoomTarget} viewMode={viewMode} />

      {/* Header — top center so it doesn't overlap the toggle button */}
      <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 20, display: "flex", alignItems: "center", gap: 10, animation: "fadeDown 1s ease 0.4s both", pointerEvents: "none" }}>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, color: COLORS.textPrimary, fontWeight: 300, textShadow: `0 0 30px ${COLORS.glowAmber}` }}>COIL</div>
        <div style={{ width: 1, height: 16, background: COLORS.surfaceLight }} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textMuted, letterSpacing: "0.1em" }}>{entries.length} MAPPED</div>
      </div>

      <CategorySidebar clusters={clusters} entries={entries} isOpen={sidebarOpen} onToggle={() => { setSidebarOpen(!sidebarOpen); sound.play("hover"); }} />
      <HotkeyPanel isOpen={hotkeyOpen} onToggle={() => setHotkeyOpen(!hotkeyOpen)} viewMode={viewMode} />

      {/* View Mode Toggle */}
      <button onClick={() => { setViewMode(v => v === "surface" ? "planet" : "surface"); sound.play("reveal"); }}
        onMouseEnter={() => sound.play("hover")}
        style={{
          position: "absolute", top: 18, right: 18, zIndex: 30,
          background: `${COLORS.surface}cc`, border: `1px solid ${COLORS.surfaceLight}`,
          borderRadius: 10, padding: "8px 14px", cursor: "pointer",
          backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 8,
          transition: "all 0.3s ease",
        }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.12em", color: COLORS.amber }}>
          {viewMode === "surface" ? "◈ SURFACE" : "◎ PLANET"}
        </span>
      </button>

      {selectedCluster && <ClusterPopup cluster={selectedCluster} entries={entries} onClose={() => setSelectedCluster(null)} />}

      {/* Input */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", width: "90%", maxWidth: 500, zIndex: 20, animation: "fadeUp 1s ease 0.6s both" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: inputFocused ? COLORS.amber : COLORS.textMuted, letterSpacing: "0.2em", marginBottom: 8, marginLeft: 4, transition: "color 0.4s" }}>
          WHAT'S LOOPING?
        </div>
        <div style={{ position: "relative", borderRadius: 14 }}>
          <div style={{
            position: "absolute", inset: 0, borderRadius: 14, pointerEvents: "none", zIndex: 2,
            border: `1px solid ${inputFocused ? COLORS.amber + "44" : COLORS.surfaceLight}`,
            boxShadow: inputFocused ? `0 0 28px ${COLORS.glowAmber}` : "none",
            transition: "all 0.5s ease",
            animation: !flash && !inputFocused ? "breathe 5s ease-in-out infinite" : "none",
          }} />
          <textarea value={inputText} onChange={e => setInputText(e.target.value)}
            onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(); } }}
            placeholder="dump whatever is on your mind..."
            rows={2}
            style={{
              width: "100%", background: `${COLORS.surface}dd`, backdropFilter: "blur(20px)",
              border: "none", borderRadius: 14, padding: "16px 54px 16px 18px",
              color: COLORS.textPrimary, fontFamily: "'DM Sans', system-ui", fontSize: 14,
              lineHeight: 1.6, resize: "none", outline: "none", boxSizing: "border-box",
            }} />
          <button onClick={handleSubmit} onMouseEnter={() => inputText.trim() && sound.play("hover")}
            style={{
              position: "absolute", right: 12, bottom: 12, width: 34, height: 34, borderRadius: 10,
              border: "none", cursor: inputText.trim() ? "pointer" : "default",
              background: inputText.trim() ? `linear-gradient(135deg, ${COLORS.amber}, ${COLORS.amberDim})` : COLORS.surfaceLight,
              color: inputText.trim() ? COLORS.bg : COLORS.textMuted,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
              transition: "all 0.3s ease", zIndex: 3,
              boxShadow: inputText.trim() ? `0 4px 14px ${COLORS.amber}33` : "none",
            }}>↑</button>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 5, left: "50%", transform: "translateX(-50%)", fontFamily: "'JetBrains Mono', monospace", fontSize: 7, color: COLORS.textMuted, letterSpacing: "0.25em", opacity: 0.35, zIndex: 15, pointerEvents: "none" }}>
        A LIRIO LABS INSTRUMENT
      </div>

      <style>{`
        @keyframes breathe { 0%,100%{border-color:${COLORS.surfaceLight};box-shadow:none} 50%{border-color:${COLORS.amber}22;box-shadow:0 0 18px ${COLORS.glowAmber}} }
        @keyframes fadeUp { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flashOut { 0%{opacity:0.5} 100%{opacity:0} }
        textarea::placeholder{color:${COLORS.textMuted};font-style:italic}
        ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:${COLORS.surfaceLight};border-radius:3px}
        *{box-sizing:border-box}
      `}</style>
    </div>
  );
}
