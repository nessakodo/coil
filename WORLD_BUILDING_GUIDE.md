# COIL World Building Guide
### Creating New Themed Planets — Lirio Labs

This document is the practical handoff for creating new COIL worlds. Each world is a themed planet with its own visual identity, sound design, and thought-to-terrain mapping system. The core mechanics (dual camera, keyword hashing, aggregation threshold, mini-diamond → diamond hierarchy) stay the same. Everything else is a theme variable.

---

## How Themes Work

A COIL theme defines the sensory layer on top of the engine. When a user submits a thought, the engine extracts keywords, detects emotion, hashes to coordinates, and checks aggregation thresholds. The theme controls what that looks like, sounds like, and feels like.

### Theme Object Structure

Every theme is a single configuration object. The engine reads from this at initialization and during the animate loop.

```javascript
const THEME = {
  id: "obsidian",           // kebab-case unique identifier
  name: "Obsidian",         // display name
  version: "0.3",

  // ── Visual Identity ──
  colors: {
    bg: "#0f0d0b",          // app background
    surface: "#1e1b17",     // card/input backgrounds
    surfaceLight: "#2d2a25", // borders inactive
    surfaceMid: "#3a3530",  // gradient endpoints
    accent: "#d4a574",      // primary accent (buttons, labels)
    accentBright: "#f0c896",// hover states
    accentDim: "#8b6b4a",   // subtle accents
    textPrimary: "#ede5d8", // main text
    textSecondary: "#8a8278",// secondary labels
    textMuted: "#4a4540",   // muted/placeholder
    glow: "rgba(212,165,116,0.25)", // glow effects
  },

  // ── Emotion Mapping ──
  // Each emotion gets a hex color + RGB floats for Three.js materials
  emotions: {
    anger:       { hex: "#d94f4f", r: 0.85, g: 0.31, b: 0.31 },
    frustration: { hex: "#e06b45", r: 0.88, g: 0.42, b: 0.27 },
    anxiety:     { hex: "#d98a3d", r: 0.85, g: 0.54, b: 0.24 },
    // ... all 17 emotions
    neutral:     { hex: "#d4a574", r: 0.83, g: 0.65, b: 0.46 },
  },

  // ── Terrain ──
  terrain: {
    emissive: 0x2a2018,      // self-illumination color
    emissiveIntensity: 0.6,
    roughness: 0.7,
    metalness: 0.05,
    // Displacement scales per frequency tier
    deform: {
      stress:   { none: 0, subtle: 0.005, visible: 0.01, deep: 0.018 },
      resolved: { none: 0, subtle: 0.004, visible: 0.008, tall: 0.014 },
      neutral:  { multiplier: 0.003 },
    },
    // Planet-specific: fbm parameters
    planetDetail: {
      continentalScale: 2.2,   // broad shapes
      continentalOctaves: 6,
      ridgeScale: 5.5,          // tectonic folds
      microScale: 12,           // erosion detail
    },
    // Color bands by elevation
    colorBands: [
      { threshold: 0.7, color: [0.52, 0.38, 0.26] },  // highland
      { threshold: 0.4, color: [0.38, 0.30, 0.24] },  // mid
      { threshold: 0.0, color: [0.28, 0.25, 0.24] },  // basin
    ],
  },

  // ── Markers (what thoughts look like) ──
  markers: {
    // Mini-diamond (individual thought)
    mini: {
      canvas: [48, 64],        // width x height
      glowRadius: 28,
      halfWidth: 11,
      surfaceScale: 0.35,      // standalone
      surfaceScaleAggregated: 0.18,
      planetScale: 0.032,
      planetScaleAggregated: 0.018,
      elevation: 1.8,
      pulseHz: 3.5,
      pulseAmplitude: 0.2,
      aspectRatio: 1.35,       // height:width
    },
    // Big diamond (aggregated cluster)
    big: {
      canvas: [64, 96],
      glowRadius: 40,
      halfWidth: 16,
      surfaceBaseScale: 0.55,
      surfaceScalePerFreq: 0.06,
      surfaceScaleMax: 0.4,
      planetBaseScale: 0.06,
      elevation: 2.0,
      pulseHz: 2.5,
      pulseAmplitude: 0.15,
      aspectRatio: 1.4,
      formationDuration: 2000,  // ms
    },
    // Shape function — can be overridden for completely different marker shapes
    // Default draws a faceted diamond. Themes can draw trees, runes, crystals, etc.
    drawMini: null,  // (ctx, cx, cy, emotionColor) => void
    drawBig: null,   // (ctx, cx, cy, emotionColor, frequency) => void
  },

  // ── Space Environment ──
  space: {
    starCount: 8000,
    starColorWeights: { white: 0.4, blueWhite: 0.2, yellowWhite: 0.2, orange: 0.1, emotion: 0.1 },
    milkyWayTilt: 23,         // degrees
    nebulae: [
      { color: 0xff6633, angle: 0.8, dist: 120, scale: 18, tilt: 0.3 },
      // ... 7 total
    ],
    planets: [
      { type: "gas", radius: 3.5, dist: 280, elev: 120, color: 0x8b6b4a, ring: true },
      // ... 4 total
    ],
    suns: [
      { radius: 1.8, dist: 380, elev: 160, color: 0xffd866, intensity: 0.4 },
      // ... 3 total
    ],
    asteroidBelt: { count: 600, heroCount: 6, innerRadius: 80, outerRadius: 120, tilt: 15 },
    dustLayers: 3,
    comets: 5,
  },

  // ── Audio ──
  audio: {
    submit: { type: "triad", freqs: [523, 659, 784] },
    impact: { type: "drop", from: 180, to: 40 },
    miniClick: { type: "marbleDrop", freq: 2400, pingFreq: 4200 },
    bigClick: { type: "bell", fundamental: 262, harmonics: [1, 2, 3, 4.75, 6.2], sub: 82 },
    transform: { type: "cascade", range: [330, 880] },
    drone: { freqs: [55, 82.5], filter: 350 },
  },

  // ── Typography ──
  fonts: {
    heading: "'Fraunces', Georgia, serif",
    body: "'DM Sans', system-ui",
    mono: "'JetBrains Mono', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=...",
  },

  // ── Atmosphere ──
  atmosphere: {
    rimPower: 4.0,
    rimIntensity: 0.18,
    color: [0.83, 0.65, 0.46],
    radius: 2.95,
  },
};
```

---

## Creating a New World: Step by Step

### 1. Fork the Theme Object
Copy the default theme and give it a new `id` and `name`. This is your starting canvas.

### 2. Define Your Visual Language
Ask yourself: what do thoughts LOOK like in this world? The default uses gemstones (diamonds). But thoughts could be seeds, runes, flames, sigils, constellations, or anything. This decision shapes everything downstream.

### 3. Customize the Marker Draw Functions
The `drawMini` and `drawBig` functions on the theme object let you completely replace what gets drawn on the canvas textures. If null, the engine uses the default diamond shape (WHITE gem body with emotion-colored outer glow). To make custom shapes, provide a function that takes `(ctx, cx, cy, emotionColor)` and draws on the 2D canvas context. Note: the default engine draws markers as white gems with a subtle emotion hue glow rather than fully emotion-colored, so the diamonds read as clean/sharp from any distance.

### 4. Set Your Color Palette
The emotion colors are the most impactful change. They determine what the terrain looks like from orbit, what the markers glow with, and the overall mood of the world.

### 5. Tune the Terrain
Adjust fbm scales, octave counts, and color bands to get different planetary geography. Higher continental scale = smoother rolling hills. Lower = more jagged. More octaves = more fine detail. Ridge scale controls the sharpness of tectonic features.

### 6. Design Your Soundscape
Each interaction has a sound. The audio config lets you swap oscillator types, frequency ranges, and envelope shapes. A gentle world might use soft sine waves. An industrial world might use sawtooth with distortion.

### 7. Style the Space
Nebula colors, planet configs, sun positions, asteroid density. These create the skybox personality. A forest world might have green nebulae and a single warm sun. A void world might strip everything to stars only.

---

## Example World: Ghibli Garden

A Studio Ghibli-inspired world where thoughts grow as plants. Stress thoughts create withered patches (craters). Resolved thoughts bloom into flowers and trees (flares). The terrain is lush green with rolling hills.

```javascript
const GHIBLI_GARDEN = {
  id: "ghibli-garden",
  name: "Ghibli Garden",

  colors: {
    bg: "#0a1a0d",
    surface: "#142218",
    surfaceLight: "#1e3325",
    surfaceMid: "#264030",
    accent: "#7bc89a",       // soft green
    accentBright: "#a8e6c3",
    accentDim: "#4a8a6a",
    textPrimary: "#e8f0e6",
    textSecondary: "#7a9080",
    textMuted: "#3a5040",
    glow: "rgba(123,200,154,0.25)",
  },

  emotions: {
    // Warm stress → autumn/decay colors
    anger:       { hex: "#c45a3a", r: 0.77, g: 0.35, b: 0.23 },
    anxiety:     { hex: "#c49a3a", r: 0.77, g: 0.60, b: 0.23 },
    sadness:     { hex: "#5a7ab0", r: 0.35, g: 0.48, b: 0.69 },
    // Cool resolved → spring/bloom colors
    joy:         { hex: "#e8d44a", r: 0.91, g: 0.83, b: 0.29 },
    peace:       { hex: "#6ac9a0", r: 0.42, g: 0.79, b: 0.63 },
    hope:        { hex: "#88d488", r: 0.53, g: 0.83, b: 0.53 },
    love:        { hex: "#e88aaa", r: 0.91, g: 0.54, b: 0.67 },
    neutral:     { hex: "#7bc89a", r: 0.48, g: 0.78, b: 0.60 },
    // ... complete set
  },

  terrain: {
    emissive: 0x1a2e18,
    emissiveIntensity: 0.5,
    roughness: 0.8,
    metalness: 0.02,
    deform: {
      stress:   { none: 0, subtle: 0.003, visible: 0.006, deep: 0.012 },
      resolved: { none: 0, subtle: 0.005, visible: 0.01, tall: 0.02 },
      // Resolved flares are TALLER in this world — growth is dramatic
    },
    colorBands: [
      { threshold: 0.7, color: [0.35, 0.55, 0.30] },  // hilltop grass
      { threshold: 0.4, color: [0.28, 0.48, 0.28] },  // meadow
      { threshold: 0.0, color: [0.22, 0.38, 0.32] },  // mossy valley
    ],
  },

  markers: {
    // Mini: seed/sprout shape instead of diamond
    mini: {
      canvas: [40, 56],
      elevation: 1.5,
      surfaceScale: 0.30,
      aspectRatio: 1.4,
    },
    // Big: blooming flower/tree shape instead of diamond
    big: {
      canvas: [64, 96],
      elevation: 2.5,
      surfaceBaseScale: 0.5,
      aspectRatio: 1.5,
    },
    drawMini: function(ctx, cx, cy, ec) {
      // Seed shape — small oval with a tiny stem
      ctx.save();
      ctx.shadowColor = ec.hex; ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 4, 6, 10, 0, 0, Math.PI * 2);
      ctx.fillStyle = ec.hex; ctx.fill();
      ctx.restore();
      // Stem
      ctx.strokeStyle = "#4a8a6a"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx, cy - 6); ctx.lineTo(cx, cy - 16);
      ctx.stroke();
      // Tiny leaf
      ctx.beginPath();
      ctx.ellipse(cx + 3, cy - 12, 3, 1.5, 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "#6ac9a0"; ctx.fill();
    },
    drawBig: function(ctx, cx, cy, ec, freq) {
      // Tree/flower — trunk, canopy, and bloom
      ctx.save();
      ctx.shadowColor = ec.hex; ctx.shadowBlur = 12;
      // Trunk
      ctx.fillStyle = "#5a4030";
      ctx.fillRect(cx - 3, cy, 6, 30);
      // Canopy — size scales with frequency
      const canopyR = 12 + Math.min(freq * 2, 10);
      const cGrad = ctx.createRadialGradient(cx, cy - 2, 2, cx, cy - 2, canopyR);
      cGrad.addColorStop(0, ec.hex + "ff");
      cGrad.addColorStop(0.6, ec.hex + "88");
      cGrad.addColorStop(1, ec.hex + "11");
      ctx.fillStyle = cGrad;
      ctx.beginPath(); ctx.arc(cx, cy - 2, canopyR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },

  space: {
    // Warm, gentle sky — single golden sun, green-tinted nebulae
    starCount: 5000,
    suns: [{ radius: 2.5, dist: 300, elev: 140, color: 0xffeebb, intensity: 0.5 }],
    nebulae: [
      { color: 0x66cc88, angle: 1.2, dist: 130, scale: 22, tilt: 0.2 },
      { color: 0xaaddcc, angle: 2.8, dist: 110, scale: 16, tilt: -0.15 },
    ],
    asteroidBelt: null, // no asteroids — too harsh for this world
    comets: 2,          // rare, gentle streaks
  },

  audio: {
    submit: { type: "triad", freqs: [440, 554, 659] }, // A major — warmer
    miniClick: { type: "woodTap" },  // gentle wood percussion
    bigClick: { type: "windChime" }, // layered soft chimes
    drone: { freqs: [65, 98], filter: 250 }, // deeper, earthier
  },

  atmosphere: {
    rimPower: 3.0,        // softer rim
    rimIntensity: 0.22,   // more visible
    color: [0.48, 0.78, 0.60], // green tint
  },
};
```

**Key Design Decisions for Ghibli Garden:**
- Thoughts are seeds that grow into trees (mini-diamond → big diamond = seed → tree)
- Stress creates withered patches instead of craters (smaller deformation, autumn colors)
- Resolved creates tall blooms (bigger flare displacement)
- No asteroid belt — the sky is gentle, open, warm
- Single golden sun instead of three, for that trademark Ghibli sunlight
- Green/earth UI palette instead of amber

---

## Example World: Noir Genesis

An alchemical world where thoughts are elemental transmutations. Stress thoughts create lead/mercury pools (heavy, toxic-looking craters). Resolved thoughts create gold/silver crystallizations (bright flares). The terrain is dark volcanic rock with veins of glowing material.

```javascript
const NOIR_GENESIS = {
  id: "noir-genesis",
  name: "Noir Genesis",

  colors: {
    bg: "#08080c",
    surface: "#12121a",
    surfaceLight: "#1e1e2a",
    surfaceMid: "#28283a",
    accent: "#c4a0ff",       // alchemical violet
    accentBright: "#dab8ff",
    accentDim: "#7a60aa",
    textPrimary: "#e0dce8",
    textSecondary: "#8080a0",
    textMuted: "#404060",
    glow: "rgba(196,160,255,0.25)",
  },

  emotions: {
    // Stress spectrum → toxic metals (lead, mercury, rust)
    anger:       { hex: "#ff3344", r: 1.0, g: 0.2, b: 0.27 },
    anxiety:     { hex: "#cc8833", r: 0.80, g: 0.53, b: 0.20 },
    fear:        { hex: "#6644aa", r: 0.40, g: 0.27, b: 0.67 },
    sadness:     { hex: "#334488", r: 0.20, g: 0.27, b: 0.53 },
    // Resolved spectrum → precious metals and crystals
    joy:         { hex: "#ffd700", r: 1.0, g: 0.84, b: 0.0 },   // gold
    peace:       { hex: "#c0c0c0", r: 0.75, g: 0.75, b: 0.75 }, // silver
    clarity:     { hex: "#88ccff", r: 0.53, g: 0.80, b: 1.0 },  // crystal
    hope:        { hex: "#66ffaa", r: 0.40, g: 1.0, b: 0.67 },  // emerald
    love:        { hex: "#ff66aa", r: 1.0, g: 0.40, b: 0.67 },  // ruby
    confidence:  { hex: "#ffaa44", r: 1.0, g: 0.67, b: 0.27 },  // copper → gold
    neutral:     { hex: "#c4a0ff", r: 0.77, g: 0.63, b: 1.0 },  // raw element
    // ... complete set
  },

  terrain: {
    emissive: 0x100818,
    emissiveIntensity: 0.7,  // higher — volcanic glow
    roughness: 0.4,          // smoother — like polished obsidian
    metalness: 0.3,          // metallic sheen
    deform: {
      stress:   { none: 0, subtle: 0.008, visible: 0.016, deep: 0.025 },
      // Deeper craters — toxic pools sink further
      resolved: { none: 0, subtle: 0.006, visible: 0.012, tall: 0.02 },
    },
    planetDetail: {
      continentalScale: 3.0,   // more angular terrain
      continentalOctaves: 5,
      ridgeScale: 8.0,          // sharper ridges
      microScale: 15,           // more textured
    },
    colorBands: [
      { threshold: 0.7, color: [0.30, 0.22, 0.35] },  // obsidian peak
      { threshold: 0.4, color: [0.18, 0.15, 0.22] },  // volcanic mid
      { threshold: 0.0, color: [0.12, 0.10, 0.18] },  // deep void
    ],
  },

  markers: {
    // Mini: alchemical sigil/rune instead of diamond
    mini: {
      canvas: [48, 48],        // square — sigils are balanced
      elevation: 2.0,
      surfaceScale: 0.32,
      aspectRatio: 1.0,        // square
    },
    // Big: transmutation circle with inner element
    big: {
      canvas: [80, 80],
      elevation: 2.5,
      surfaceBaseScale: 0.5,
      aspectRatio: 1.0,
    },
    drawMini: function(ctx, cx, cy, ec) {
      // Small alchemical symbol — circle with inner element
      ctx.save();
      ctx.shadowColor = ec.hex; ctx.shadowBlur = 10;
      ctx.strokeStyle = ec.hex; ctx.lineWidth = 1;
      // Outer circle
      ctx.beginPath(); ctx.arc(cx, cy, 12, 0, Math.PI * 2); ctx.stroke();
      // Inner triangle (fire/earth/water depending on emotion)
      ctx.beginPath();
      ctx.moveTo(cx, cy - 7); ctx.lineTo(cx + 6, cy + 5); ctx.lineTo(cx - 6, cy + 5);
      ctx.closePath(); ctx.fillStyle = ec.hex + "88"; ctx.fill();
      ctx.strokeStyle = ec.hex; ctx.stroke();
      ctx.restore();
    },
    drawBig: function(ctx, cx, cy, ec, freq) {
      // Transmutation circle — concentric rings with symbols
      ctx.save();
      ctx.shadowColor = ec.hex; ctx.shadowBlur = 16;
      const r = 20 + Math.min(freq * 2, 12);
      // Outer ring
      ctx.strokeStyle = ec.hex; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      // Inner ring
      ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.65, 0, Math.PI * 2); ctx.stroke();
      // Cross lines
      ctx.beginPath();
      ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy);
      ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r);
      ctx.stroke();
      // Central element
      const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.4);
      cGrad.addColorStop(0, "#ffffff");
      cGrad.addColorStop(0.3, ec.hex);
      cGrad.addColorStop(1, "transparent");
      ctx.fillStyle = cGrad;
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    },
  },

  space: {
    // Dark, mysterious — deep purple nebulae, no warm suns
    starCount: 10000,         // denser field
    suns: [
      { radius: 1.2, dist: 400, elev: 180, color: 0x8866cc, intensity: 0.3 },
      { radius: 0.8, dist: 350, elev: 90, color: 0xcc4444, intensity: 0.2 },
    ],
    nebulae: [
      { color: 0x6633aa, angle: 0.5, dist: 100, scale: 25, tilt: 0.4 },
      { color: 0x330066, angle: 2.0, dist: 140, scale: 30, tilt: -0.2 },
      { color: 0x880044, angle: 3.5, dist: 90, scale: 14, tilt: 0.1 },
    ],
    asteroidBelt: { count: 1000, heroCount: 8, innerRadius: 70, outerRadius: 130, tilt: 25 },
    comets: 8,
  },

  audio: {
    submit: { type: "triad", freqs: [220, 277, 330] }, // A minor — darker
    miniClick: { type: "metallicPing", freq: 3000 },
    bigClick: { type: "gong", fundamental: 110, decay: 2.0 },
    drone: { freqs: [40, 60], filter: 200 }, // very deep, ominous
  },

  atmosphere: {
    rimPower: 5.0,        // tighter rim
    rimIntensity: 0.15,   // subtle
    color: [0.40, 0.27, 0.67], // purple tint
  },
};
```

**Key Design Decisions for Noir Genesis:**
- Thoughts are alchemical elements — mini-diamonds become sigils, big diamonds become transmutation circles
- Stress = toxic metals (lead pools, mercury pits) with deeper craters
- Resolved = precious metals (gold crystallizations, silver veins)
- Terrain is volcanic obsidian — higher metalness, lower roughness, darker colors
- The sky is denser with more stars, purple nebulae, and a cold violet sun
- Sound design is darker — minor keys, lower frequencies, longer decay
- Square aspect ratio for markers instead of tall diamonds — sigils are balanced

---

## Implementation Checklist

When building a new world, work through these in order:

1. **Define the metaphor**: What are thoughts in this world? (gems, seeds, runes, flames, stars, cells, etc.)
2. **Set the palette**: 11 UI colors + 17 emotion colors. Test by looking at the planet from orbit — you should be able to read the mood map.
3. **Draw your markers**: Write `drawMini` and `drawBig` canvas functions. Test at both surface and planet scale.
4. **Tune the terrain**: Adjust fbm scales and color bands. The planet should look interesting from orbit even with zero thoughts.
5. **Design the skybox**: Pick nebula colors, sun count/positions, asteroid density. This sets the atmosphere.
6. **Craft the audio**: Each interaction needs a sound that matches the world's personality. Dark worlds get low frequencies. Light worlds get high ones.
7. **Typography**: Consider if the default fonts work. A fantasy world might want serif headers. A sci-fi world might want all monospace.
8. **Test the full loop**: Submit 10+ thoughts, watch them appear, click them, watch aggregation happen, see the transformation animation. The whole experience should feel cohesive.

---

## What Stays Constant Across All Worlds

These are engine-level features that every world inherits:

- Dual camera system (surface FPV + orbital planet view)
- Keyword hashing to deterministic coordinates (FNV-1a)
- Keyword normalization (canonical forms)
- Emotion detection from text
- Aggregation threshold (freq 3 → mini-diamonds coalesce into big marker)
- Transformation animation (convergence spiral)
- Category sidebar with grouped clusters
- Scene settings panel (layer visibility sliders)
- Hotkey panel
- Click interactions (mini-diamond → ThoughtPopup, big marker → ClusterPopup)
- Birth animation overlay
- Camera zoom-to-thought on submit
- Privacy-first architecture (no raw text storage, keyword-only)

---

*COIL World Building Guide v0.3 — Lirio Labs*
