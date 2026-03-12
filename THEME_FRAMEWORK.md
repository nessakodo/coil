# COIL Theme Framework
### Thought Pattern Mapper — Lirio Labs

This document defines the complete stylistic, structural, and behavioral architecture of COIL's 3D thought terrain. It serves as the canonical reference for building additional planet themes.

---

## Architecture Overview

COIL is a single-file React + Three.js application (`COIL.jsx`) that maps user thoughts onto an explorable 3D terrain. The entire rendering pipeline, audio engine, and UI exist in one component tree with no external state management.

### Dual View System

COIL operates in two camera modes sharing the same scene graph:

**Surface Mode (FPV Walking)**
- Camera: PerspectiveCamera at ground level (~1.8 units above terrain)
- Movement: WASD/arrow keys for walking, mouse drag for yaw/pitch
- Terrain: PlaneGeometry (200x200 units, 160 segments) with toroidal wrapping
- Player follow light provides local warmth
- Thought markers wrap around player position for infinite exploration

**Planet Mode (Orbital)**
- Camera: PerspectiveCamera orbiting a central sphere
- Movement: WASD orbits, Q/E zooms, mouse drag rotates, scroll zooms
- Terrain: SphereGeometry (radius 2.8, 128 segments) with vertex deformation
- Slow auto-rotation (0.0002 rad/frame)
- Atmosphere rim shader (Fresnel rim glow, additive blending)

Both modes share the same deep space backdrop, markers, and lighting system. Mode switch is a single state toggle — no scene reconstruction.

---

## Rendering Pipeline

### Renderer Configuration
```
WebGLRenderer
  antialias: true
  toneMapping: ACESFilmicToneMapping
  toneMappingExposure: 1.2
  clearColor: 0x060504
  pixelRatio: capped at 2.0
  far plane: 800
```

### Lighting Stack
All lights are mode-adaptive (intensity shifts between surface/planet):

| Light | Type | Surface | Planet | Purpose |
|-------|------|---------|--------|---------|
| Ambient | AmbientLight 0xd8ccc0 | 0.35 | 0.30 | Base fill |
| Hemisphere | HemisphereLight | 0.25 | 0.20 | Sky/ground gradient |
| DL1 | DirectionalLight 0xf0e0c8 | 0.20 | 0.15 | Primary depth/shadow |
| DL2 | DirectionalLight 0xc8d0e0 | 0.12 | 0.10 | Cool fill |
| DL3 | DirectionalLight 0xd0c8b8 | 0.10 | 0.08 | Underside fill |
| Player | PointLight 0xd4a574 | 0.30 | 0.00 | Local warmth (surface only) |

Terrain and planet mesh use `emissive` for self-illumination, reducing dependency on scene lights.

### Material Strategy
- **Terrain/Planet**: MeshStandardMaterial with vertexColors, flatShading, emissive (0x2a2018 / 0x201810)
- **Wireframe overlay**: MeshBasicMaterial, wireframe, very low opacity (0.012-0.025)
- **Markers**: SpriteMaterial with AdditiveBlending (critical for dark scene)
- **Space elements**: AdditiveBlending throughout for glow-on-black rendering
- **Atmosphere**: ShaderMaterial with Fresnel rim calculation

---

## Thought Representation

### Individual Thoughts (Stars)
Each submitted thought becomes a tiny clickable sprite:
- Canvas: 16x16 pixels
- Visual: White core fading to emotion color radial gradient + cross flare
- SpriteMaterial with AdditiveBlending
- Surface scale: 0.12 (aggregated) / 0.18 (standalone)
- Planet scale: 0.012 (aggregated) / 0.018 (standalone)
- Animation: Twinkle at 4.0 Hz + seed variation, amplitude 0.3x base

**Standalone behavior**: Fixed position based on keyword hash, gentle vertical bob

**Aggregated behavior** (when parent cluster freq >= 3): Orbits the diamond center at 0.4-0.7 rad/s, orbit radius = 60% of spread distance

### Aggregated Themes (Diamonds)
When a keyword reaches frequency 3+, thought stars coalesce into a diamond marker:
- Canvas: 64x64 pixels
- Visual: Emotion-colored diamond shape with glow halo, white core, edge highlights
- Extra glow ring at freq 6+
- SpriteMaterial with AdditiveBlending + premultiplyAlpha
- Formation animation: 2-second easeInOutCubic scale-up from 0
- Pulse: 2.5 Hz sinusoidal, amplitude 0.15x base
- Coalesce sound triggers on threshold crossing
- Surface scale: 0.45 + min(freq * 0.05, 0.35)
- Planet scale: 0.05 + min(freq * 0.006, 0.05)

### Birth Animation
When a thought is submitted, a centered overlay plays:
1. **Outer pulse ring** — expanding circle border in emotion color
2. **Star burst** — large (180px) bright radial gradient explosion
3. **Inner core flash** — 24px white-to-emotion gradient
4. **Cross flare rays** — horizontal and vertical light streaks
5. **Text label** — keyword name in emotion color with heavy glow text-shadow
6. **Emotion subtag** — uppercase emotion name, monospace, delayed 0.2s
- Total duration: 2.8 seconds
- All elements use CSS keyframe animations

---

## Emotion System

### Color Spectrum (Plutchik-based)
```
Warm Stress:
  anger:       #d94f4f    frustration: #e06b45
  anxiety:     #d98a3d    fear:        #8b5fbf
  sadness:     #5b7fbf    loneliness:  #6b6b9e
  exhaustion:  #7a6b5a    overwhelm:   #c75a7a

Cool Resolved:
  joy:         #d4b84f    peace:       #7ab89e
  hope:        #8fc98f    confidence:  #c9a84f
  clarity:     #8ecae6    gratitude:   #a3d9a5
  excitement:  #e8b84f    love:        #e07aa5

Neutral:
  neutral:     #d4a574
```

### Terrain Deformation by Emotion
Emotions map to physical terrain features via trend classification:

**Stress emotions** create **craters** (depressions):
- freq 1-2: color only, no deformation
- freq 3-4: subtle (0.005 displacement)
- freq 5-7: visible (0.01)
- freq 8+: pronounced (0.018)

**Resolved emotions** create **flares** (elevations):
- Same frequency thresholds as craters
- Animated budding: sinusoidal pulse at 0.6 + freq*0.15 Hz
- Pulse amplitude scales with frequency (0.15 to 0.35)

**Neutral** creates gentle slopes at reduced scales.

Color glow intensity also scales with frequency, creating a living mood map.

---

## Keyword Intelligence

### Normalization System
A CANONICAL_FORMS map unifies word variants before hashing:
```
built/building/builds/builder → build
isolated/alone/loneliness → lonely
exhausted/exhausting/depleted/drained/fatigued → exhaust
```

### Position Hashing
Keywords are hashed (FNV-1a variant) to deterministic positions:
- Two independent hashes produce phi (0.2 to PI-0.2) and theta (0 to 2*PI)
- Same keyword always maps to same location
- Privacy-first: raw text never stored, only keywords

### Edge Case Handling
- Single words: used directly after normalization
- Names: treated as keywords (stop word filter bypassed for >2 chars)
- Empty after filter: fallback to longest word, then "thought"
- Always produces at least one keyword

---

## Deep Space Environment

All space layers use AdditiveBlending and rotate at different rates for parallax depth:

### Layer Stack (back to front)

| Layer | Count/Config | Distance | Rotation Rate | Purpose |
|-------|-------------|----------|---------------|---------|
| Star Field | 8000 points | 20-350 units | 0.00008 | Galaxy backdrop |
| Nebulae | 7 clusters, 5 shells each | 95-150 units | 0.00004 | Volumetric gas clouds |
| Distant Suns | 3 (yellow, blue, red) | 280-350 units | 0.00002 | Bright point sources |
| Distant Planets | 4 (gas giant, ice, rocky, moon) | 90-260 units | 0.00002 | Large bodies with atmosphere shaders |
| Asteroid Belt | 600 particles + 8 hero meshes | 38-56 units | 0.00025 | Toroidal ring, 15-degree tilt |
| Cosmic Dust | 3 layers (6500 total) | 15-350 units | 0.00006 | Ultra-fine atmospheric particles |
| Comets | 5, 14-point tails | Variable | Drift | Animated streaks |
| Surface Particles | 800 points | Above terrain | N/A | Ambient surface glow |

### Star Field Distribution
- 40% milky way band (tight strip with 23-degree tilt)
- 30% general sky (uniform spherical)
- 18% nearby bright (20-40 units)
- 12% distant deep field (150-350 units)
- 2% beacon stars (extra large)
- Colors: white (40%), blue-white (20%), yellow-white (20%), orange (10%), emotion-tinted (10%)

### Nebulae Construction
Each nebula: 5 fbm3D-deformed sphere shells at progressive scales + bright inner core. Organic shape via fractal noise vertex displacement. Low opacity (0.003-0.012) with additive blending creates volumetric glow.

### Planet Atmosphere Shader
Fresnel-based rim glow:
```glsl
float rim = 1.0 - max(0.0, dot(vNormal, viewDir));
float intensity = pow(rim, 4.0) * 0.18;
```
Each distant planet has its own atmosphere instance with color-matched rim.

---

## Scene Customization System

### Configurable Properties
Users can adjust visibility (0-100%) of each space layer independently:

| Setting | Default | Affects |
|---------|---------|---------|
| Galaxy Stars | 100% | starField opacity |
| Nebulae | 100% | nebulaGroup visibility + child opacities |
| Planets & Suns | 100% | distantBodies visibility |
| Asteroid Belt | 100% | asteroidBelt visibility + child opacities |
| Cosmic Dust | 100% | cosmicDustGroup visibility |
| Comets | 100% | cometGroup visibility |
| Ambient Particles | 100% | surface particle opacity |
| Wireframe Grid | 100% | terrain wireframe opacity |
| Atmosphere Glow | 100% | atmosMesh visibility |

### Presets
- **Full**: All layers at 100%
- **Focus**: Stars 50%, nebulae 20%, planets 30%, dust 10%, particles 60%, wireframe/atmosphere 100%
- **Minimal**: Stars 30%, atmosphere 50%, everything else off

---

## Audio Engine

Web Audio API based, initialized on first user interaction:

| Sound | Trigger | Character |
|-------|---------|-----------|
| submit | New thought entered | Rising major triad (C-E-G) |
| impact | Thought lands on terrain | Descending sine 180→40 Hz |
| coalesce | Cluster crosses threshold 3 | Rising harmonic shimmer (4 stacked sines) |
| hover | Button/marker hover | Quick 1200 Hz ping |
| reveal | Marker click / mode switch | Descending 660→440 Hz |
| zoom | Mode transition | Filtered sawtooth 40→120 Hz + rising sine |
| drone | Background ambient | 55 Hz + 82.5 Hz through lowpass |

---

## UI System

### Typography
- Headers: Fraunces (optical size 9-144, weight 300-400, italic variants)
- Body: DM Sans (300-500)
- Code/labels: JetBrains Mono (300-400)
- All loaded via Google Fonts

### Color Palette (UI)
```
bg:           #0f0d0b
surface:      #1e1b17
surfaceLight: #2d2a25
surfaceMid:   #3a3530
amber:        #d4a574
amberBright:  #f0c896
amberDim:     #8b6b4a
textPrimary:  #ede5d8
textSecondary:#8a8278
textMuted:    #4a4540
glowAmber:    rgba(212,165,116,0.25)
```

### Input System
- Breathing border animation when idle (5s ease-in-out)
- Glow state on focus (amber box-shadow)
- Flash overlay on submit (radial gradient pulse)

### Panels
- Sidebar: Category-grouped clusters with entry counts
- Hotkey panel: Context-aware (surface vs planet controls)
- Settings panel: Slider-based scene customization with presets
- Cluster popup: Click-outside-to-close, escape key dismiss, popupIn animation

---

## Theme Extension Points

To create a new planet theme, define these parameters:

### Required
1. **Color palette** — UI colors (bg, surface, accent, text variants)
2. **Emotion color mapping** — 17 emotion hex values + RGB
3. **Terrain material** — base emissive color, roughness, metalness
4. **Terrain deformation** — crater/flare/neutral scale multipliers per frequency tier
5. **Star field distribution** — milky way band angle, star color probabilities
6. **Lighting** — ambient/hemisphere/directional colors and intensities per mode

### Optional
7. **Nebula configs** — array of { color, angle, distance, scale, tilt }
8. **Distant bodies** — planet configs with ring/atmosphere options
9. **Sun configs** — { distance, angle, color, intensity }
10. **Asteroid belt** — radius range, count, color palette
11. **Audio variants** — oscillator types, frequency ranges, envelope shapes
12. **Typography** — font families, sizes, weights
13. **Wireframe** — color, opacity, segment count
14. **Atmosphere shader** — rim power, color, intensity

### Theme Object Structure (proposed)
```javascript
const THEME = {
  id: "default",
  name: "Obsidian",
  colors: { bg, surface, surfaceLight, surfaceMid, accent, accentBright, accentDim, textPrimary, textSecondary, textMuted, glowAccent },
  emotions: { anger: { hex, r, g, b }, ... },
  terrain: { emissive, emissiveIntensity, roughness, metalness, deformScale: { stress, resolved, neutral } },
  space: { starCount, nebulaConfigs, planetConfigs, sunConfigs, asteroidBelt, dustLayers, cometCount },
  lighting: { ambient, hemisphere, directionals, playerLight },
  audio: { submitFreqs, impactRange, coalesceHarmonics },
  typography: { heading, body, mono },
  atmosphere: { rimPower, rimIntensity, color },
};
```

---

## File Structure
```
coil/
  src/
    COIL.jsx          — entire application (single file)
  index.html          — shell with bg #0f0d0b
  package.json        — v0.3.0 (react, react-dom, three, idb)
  vite.config.js      — Vite + React plugin
  THEME_FRAMEWORK.md  — this document
```

---

*COIL v0.3 — a lirio labs instrument*
