# COIL Theme Framework
### Thought Pattern Mapper — Lirio Labs

This document defines the complete stylistic, structural, and behavioral architecture of COIL's 3D thought terrain. It serves as the canonical reference for building additional planet themes.

**Philosophy**: You are already capable. You just need a mirror with memory. COIL never gives advice. Never coaches. Never nudges. It just reflects.

---

## Architecture Overview

COIL is a single-file React + Three.js application (`COIL.jsx`) that maps user thoughts onto an explorable 3D terrain. The entire rendering pipeline, audio engine, and UI exist in one component tree with no external state management. The planet is a complete world. Your inner world has geography. It has weather. It has seasons.

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
- **Wireframe overlay**: MeshBasicMaterial, wireframe, visible opacity (surface: 0.08, planet: 0.05) — responds to scene settings slider
- **Markers**: SpriteMaterial with AdditiveBlending (critical for dark scene)
- **Space elements**: AdditiveBlending throughout for glow-on-black rendering
- **Atmosphere**: ShaderMaterial with Fresnel rim calculation

---

## Thought Representation

### Design Principle: White Diamonds with Emotion Aura
All diamond markers (every lifecycle stage) share a core visual identity: WHITE gem bodies with emotion-colored outer glow. The diamond itself is always a clean, sleek, white crystal (linear gradient #fff → #dddbe6). The emotion color lives in the surrounding glow halo and a faint (12-15%) overlay bleed. This ensures diamonds read as sharp, faceted gems from any distance while the emotion aura creates the living color field visible from orbit.

### Growth Lifecycle: Seed → Crystal → Cluster → Formation → Landmark

> **Implementation status**: Stages 1-2 (Seed and Crystal) are fully built. Stages 3-5 (Cluster, Formation, Landmark) and the temporal color evolution system are specced and ready for implementation. The theme object structure supports all five stages.

Every thought pattern follows a five-stage lifecycle. The base visual unit is always the diamond, but it grows in complexity, scale, and terrain influence as more thoughts feed the pattern.

**Stage 1: Seed (1-2 entries)** — individual thought, the first mark on the planet
- What it is now: Mini-diamonds. Each submitted thought renders as a small, persistent, clickable white diamond sprite
- Canvas: 48x64 pixels (proportional gem shape)
- Visual: WHITE faceted gem body with subtle emotion-colored outer glow halo, facet lines in #b8b4c8, crisp white edge stroke, core sparkle
- SpriteMaterial with AdditiveBlending + premultiplyAlpha
- Non-uniform scale: 1:1.35 ratio (matching gem proportions)
- Surface scale: 0.18 (aggregated, orbiting) / 0.35 (standalone), elevated 1.8+ units above terrain
- Planet scale: 0.018 (aggregated) / 0.032 (standalone)
- Animation: Gentle pulse at 3.5 Hz + seed variation, amplitude 0.2x base
- Sound on click: `miniDiamondClick` (glass marble drop — sine 2400→1600 Hz through highpass + metallic ping at 4200 Hz)
- Behavior: Fixed position based on keyword hash, gentle pulse. Click opens ThoughtPopup showing raw thought text, emotion, timestamp, and growth progress bar (X/3 toward crystal)

**Stage 2: Crystal (3-5 entries)** — the first coalescence, pattern is real
- What it is now: Big diamonds. When a keyword reaches frequency 3+, seeds coalesce into a large diamond marker
- Canvas: 64x96 pixels (taller canvas for elongated gem)
- Visual: Tall WHITE faceted gem body with 15% emotion-color overlay bleed, facet cut lines in #b8b4c8, dual sparkle points (upper + lower)
- Glow halo: emotion-colored radial gradient bloom at reduced intensity (max 40% alpha at center)
- Non-uniform scale: 1:1.4 ratio for authentic gem silhouette
- Formation animation: 2-second easeInOutCubic scale-up from 0
- Pulse: 2.5 Hz sinusoidal, amplitude 0.15x base
- Surface elevation: 2.0+ units (scales with frequency and flare)
- Surface scale: 0.55 + min(freq * 0.06, 0.4)
- Planet scale: 0.06 + min(freq * 0.007, 0.05)
- Sound on click: `diamondClick` (cathedral bell — C4 fundamental + 4 harmonics, 1.2s decay + sub rumble 82 Hz)
- Behavior: Click opens ClusterPopup showing all thoughts in the cluster

**Stage 3: Cluster (6-10 entries)** — the pattern is deepening, visible from mid-orbit
- Visual: Multiple crystal geometries growing from the same terrain anchor point. The central diamond grows taller, and 2-3 smaller satellite crystals sprout at angular offsets around its base (like a crystal formation growing from rock)
- Scale: Central diamond 1.3x stage 2 size. Satellite crystals at 40-60% of central size
- New: Faint connecting filaments (thin glowing lines) between central and satellite crystals
- Terrain influence: Subtle vertex displacement begins radiating outward from the cluster center (0.5-unit radius)
- Glow intensifies: outer halo radius grows 1.5x, alpha ceiling rises to 50%
- Sound: `diamondClick` gains an additional harmonic layer (5th overtone)
- Planet view: Clearly visible as a distinct bright point with structure

**Stage 4: Formation (11-20 entries)** — a defining feature of the planet's geography
- Visual: The crystal cluster becomes a terrain feature. Contour lines (thin glowing rings) radiate outward from the formation on the planet surface, like topographic elevation markers
- Scale: Central structure 1.8x stage 2 size. 4-6 satellite crystals arranged in a natural growth pattern
- New: Visible label appears in planet view (keyword name in small monospace text, fades with distance). Contour lines (3-5 concentric ground-level rings at increasing radii) pulse slowly
- Terrain influence: Significant vertex displacement (2-unit radius), the formation visibly raises or depresses the terrain around it
- From orbit: unmistakable. The formation has its own light signature and contour pattern

**Stage 5: Landmark (20+ entries)** — a major feature of the inner world
- Visual: Monumental crystal structure with particle system. Tiny luminous particles orbit the landmark in a slow spiral, like dust caught in a gravity well
- Scale: Central structure 2.5x stage 2 size. Full crystal garden at base
- New: Orbiting particle cloud (50-100 small points in a toroidal orbit pattern). Permanent name label visible from orbit. Custom sound on approach (ambient harmonic drone fades in within 5 units on surface)
- Terrain influence: Major displacement (4-unit radius), the landmark defines a geographic region. Other nearby clusters are visually subordinate
- From orbit: the most prominent features on the planet. These are the mountains, the volcanoes, the great forests of the mental world

### Lifecycle Transitions

**Seed → Crystal (threshold 3)**: All associated seeds play a convergence animation:
1. Seeds accelerate their orbit (spin speed 2.0 → 8.0 rad/s)
2. Orbit radius shrinks by 85% (converging toward center)
3. Seeds rise then descend (y: 1.2 + 1.5 → 1.2)
4. Brightness increases 1.5x → 3x during convergence
5. `transform` sound plays: ascending cascade (330-880 Hz) + crystallization snap
6. After 1.5s, the crystal marker appears with its formation animation
- Uses ease-in acceleration for a natural gravity-pull feel

**Crystal → Cluster (threshold 6)**: The existing diamond pulses bright, then satellite crystals emerge from its base over 2 seconds. A deeper `transform` variant plays (lower octave, more harmonics). The terrain begins to subtly respond.

**Cluster → Formation (threshold 11)**: Contour lines ripple outward from the cluster center. The formation "claims" its territory on the planet. A sustained resonant tone plays. The label fades in from orbit view.

**Formation → Landmark (threshold 20)**: The particle cloud ignites. A deep, slow ascending chord plays over 3 seconds. The terrain displacement reaches its maximum radius. The landmark is now a permanent geographic feature of the mind.

### Crater/Flare Type Indicators
Each crystal-stage-and-above marker has detached, subtle arc wisps that signal terrain type without blurring the gem silhouette:
- **Crater (stress)**: Two thin arcs positioned BELOW the diamond body (botY + 4/6), radius 14/10px, alpha 0.1 + freq*0.03 (max 0.35). Suggests depth/sinking into terrain.
- **Flare (resolved)**: Two thin arcs positioned ABOVE the diamond body (topY - 4/6), radius 14/10px, same alpha. Suggests rising energy.
- **Neutral**: Full ring at freq 5+ pushed outward (radius 24px, alpha 0.15, lineWidth 0.6)
- All indicators use emotion color but are spatially separated from the gem body so the diamond reads as a clean sharp shape from any distance
- At cluster stage and above, indicator arcs scale up proportionally with the central crystal

### Birth Animation
When a thought is submitted, a centered overlay plays:
1. **Outer pulse ring** — expanding circle border in emotion color
2. **Star burst** — large (180px) bright radial gradient explosion
3. **Inner core flash** — 24px white-to-emotion gradient
4. **Cross flare rays** — horizontal and vertical light streaks
5. **Mini-diamond SVG icon** — small WHITE faceted gem (linearGradient #fff → #dddbe6) with emotion-colored drop shadow, appears above text
6. **Text label** — keyword name in emotion color with heavy glow text-shadow
7. **Emotion subtag** — uppercase emotion name, monospace, delayed 0.2s
- Camera snaps to 3.5 units behind the new thought's position, facing toward it
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

### Temporal Color Evolution

Colors are not static. They evolve based on the emotional trajectory of a thought pattern over time. This is the planet breathing.

**Color states based on pattern trajectory:**
- **Active/New (default)**: Amber (#d4a574) — warm, alive, present. This is the starting color for any new pattern.
- **Stress trajectory (frequency increasing)**: Shifts toward clay/red (#d4a574 → #c4785a → #a04a3a). The terrain literally reddens as a thought loop intensifies. Triggers when a pattern receives 3+ entries in the last 7 days with increasing frequency.
- **Resolving trajectory (frequency decreasing)**: Shifts toward sage green (#d4a574 → #7a9b7a → #a0c8a0). The terrain cools and softens as a pattern loses urgency. Triggers when a pattern has been decreasing in frequency over 14+ days.
- **Dormant (no entries in 14+ days)**: Shifts toward stone gray (#d4a574 → #8a8278 → #6a6a6a). The pattern fossilizes. It is still there, still visible, but it has gone quiet.
- **Resurfaced (dormant then active again)**: Brief bloom of bright gold (#f0c896) lasting 48 hours before settling back to the active color. The planet remembers and lights up when an old pattern returns.

**Implementation:**
- Each cluster stores `lastEntryTimestamp`, `entryTimestamps[]` (last 30), and a computed `trajectory` value
- Trajectory = rolling 14-day frequency delta. Positive = stress. Negative = resolving. Zero for 14+ days = dormant.
- Color shift happens gradually: each render frame interpolates 1% toward the target color (lerp). This means color changes are visible over hours/days, not seconds
- The emotion-specific color (anger red, joy gold, etc.) is the base. The trajectory overlay modulates it: stress warms/reddens ANY emotion, resolving cools/greens ANY emotion, dormancy desaturates toward gray
- The trajectory color affects: terrain vertex colors around the cluster, the glow halo of the diamond marker, the contour lines (formation+), and the particle cloud (landmark)
- The diamond body itself stays WHITE. Only the aura and terrain respond to trajectory

**Color interpolation formula:**
```
targetColor = lerpColor(emotionBaseColor, trajectoryTargetColor, trajectoryStrength)
trajectoryStrength = clamp(abs(trajectory) / maxTrajectory, 0, 0.6)
// Max 60% shift — the original emotion color is always visible underneath
```

**Terrain erosion (dormant patterns):**
When a pattern goes dormant (14+ days no activity), its terrain displacement amplitude decreases by 2% per day of continued inactivity. The mountains slowly flatten. The craters fill in. The planet surface smooths over time, reflecting how the mind naturally lets go of patterns that are no longer active. If the pattern reactivates, erosion stops and displacement rebuilds at the normal rate.

### Planet Terrain Detail
The planet sphere uses multi-layer displacement for rich visual texture:
- **Continental shapes**: fbm3D at 6 octaves (scale 2.2), amplitude 0.025 — broad rolling terrain
- **Tectonic ridges**: absolute fbm3D at 3 octaves (scale 5.5), inverted — sharp mountain folds
- **Micro erosion**: fbm3D at 2 octaves (scale 12), amplitude 0.004 — fine grain visible up close
- **Color bands**: elevation-mapped (highland amber/ochre > mid earthy brown > low basin cool tones)
- Ridge presence adds warm color variation for visual depth

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
| Nebulae | 7 clusters, 5 shells each | 95-150 units, elev 50+ | 0.00004 | Volumetric gas clouds |
| Distant Suns | 3 (yellow, blue, red) | 340-400 units, elev 100-160 | 0.00002 | Bright point sources |
| Distant Planets | 4 (gas giant, ice, rocky, moon) | 200-350 units, elev 65-140 | 0.00002 | Large bodies with atmosphere shaders |
| Asteroid Belt | 600 particles + 6 hero meshes | 80-120 radius, elev 40+ | 0.00025 | Toroidal ring, 15-degree tilt |
| Cosmic Dust | 3 layers (6500 total) | 15-350 units | 0.00006 | Ultra-fine atmospheric particles |
| Comets | 5, 14-point tails | Variable | Drift | Animated streaks |
| Surface Particles | 800 points | Above terrain | N/A | Ambient surface glow |

**CRITICAL**: All celestial bodies must be elevated well above the terrain plane (y=0) to prevent clipping in surface mode. Minimum elevations: nebulae 50+, planets 65+, suns 100+, asteroid belt 40+. The COIL atmosphere mesh (radius 2.95 at origin) must ONLY be visible in planet mode — scene settings must not override mode-based visibility.

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

Web Audio API based, initialized on first user interaction. Sounds are lifecycle-aware — each growth stage has its own distinct click sound that progresses from light/quick to deep/resonant.

### Interaction Sounds
| Sound | Trigger | Character |
|-------|---------|-----------|
| submit | New thought entered | Rising major triad (C-E-G), 523/659/784 Hz |
| impact | Thought lands (no threshold cross) | Descending sine 180→40 Hz |
| coalesce | Additional entry to existing cluster | Rising harmonic shimmer (4 stacked sines) |
| transform | Seeds merge into crystal (threshold 3) | Ascending cascade 330-880 Hz + crystallization snap |
| hover | Button/marker hover | Quick 1200 Hz ping |
| reveal | Mode switch / sidebar click | Descending 660→440 Hz |
| zoom | Mode transition | Filtered sawtooth 40→120 Hz + rising sine |
| drone | Background ambient | 55 Hz + 82.5 Hz through lowpass |

### Lifecycle Click Sounds
| Sound | Stage | Character |
|-------|-------|-----------|
| seedClick | Seed (1-2) | Soft crystal chime: sine 1800→1400 Hz + sparkle overtone 3600 Hz. Quick, gentle. |
| crystalClick | Crystal (3-5) | Glass bell: C5 triangle fundamental + 2 harmonics (3.17x), 0.8s decay. Clear, present. |
| clusterClick | Cluster (6-10) | Resonant chord: G4 triangle + 4 harmonics (1.5-4.5x), low body hum 98 Hz, 1.0s decay. Rich, layered. |
| formationClick | Formation (11-20) | Cathedral bell: C4 triangle + 4 harmonics, 1.5s decay + sub rumble 82 Hz through lowpass. Deep, reverent. |
| landmarkClick | Landmark (20+) | Deep gong: C3 + 6 harmonics (7 total), 2.5s decay + sub 55 Hz through lowpass + high shimmer 2200 Hz. Monumental. |

Each stage sounds like a natural progression — seeds whisper, crystals ring, clusters chord, formations resonate, landmarks reverberate.

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
- Textarea: borderRadius 12, gradient bg (surface ee → surfaceMid 88), no glassmorphism/blur
- Border matches other controls: 1px surfaceLight, amber on focus
- Submit button: floating circle (30px), positioned absolute right inside textarea
- Active submit: amber gradient fill, visible with glow. Inactive: transparent, 0.4 opacity
- No accent lines, no breathing animation — clean and consistent
- Flash overlay on submit (radial gradient pulse)
- Label: 8px JetBrains Mono, 0.25em letter-spacing, glows amber on focus

### Control Buttons (Cohesive Design Language)
All control buttons share the exact same visual DNA as the Surface/Planet toggle:
- **Common style**: `linear-gradient(135deg, surface ee, surfaceMid 88)`, `border-radius: 12px`, `backdrop-filter: blur(12px)`, `padding: 7px 14px`, `box-shadow: 0 2px 10px rgba(0,0,0,0.3)`, `font: JetBrains Mono 9px, letter-spacing 0.12em`
- **Surface/Planet toggle** (top-right): `padding: 9px 16px`, amber text, shows current mode icon + label
- **Settings button** (bottom-left): Gear icon + "SCENE" label, amber when active
- **Hotkey button** (bottom-right): "? KEYS" label, amber when active
- **Active state**: amber border (0.44 alpha)
- **Inactive**: surfaceLight border, textSecondary color
- Click-off-to-close: clicking anywhere on canvas background closes open panels

### Panels & Popups
- **Sidebar**: Category-grouped clusters with entry counts, expandable sections
- **Hotkey panel**: Context-aware (surface vs planet controls)
- **Settings panel**: 9 slider controls for scene layer visibility + 3 presets (Full/Focus/Minimal)
- **Cluster popup (diamond click)**: Shows all thoughts in cluster, emotion/type/frequency header, click-outside-to-close, escape key dismiss, popupIn animation
- **Thought popup (star click)**: Shows individual thought text, emotion, timestamp, aggregation progress bar (X/3 toward diamond), "View Diamond Cluster" button if threshold met
- All popups: backdrop click dismiss, escape key priority chain (popup → thought → settings → sidebar)

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
7. **Lifecycle visual definitions** — what each growth stage looks like in this world

### Optional
8. **Nebula configs** — array of { color, angle, distance, scale, tilt }
9. **Distant bodies** — planet configs with ring/atmosphere options
10. **Sun configs** — { distance, angle, color, intensity }
11. **Asteroid belt** — radius range, count, color palette
12. **Audio variants** — oscillator types, frequency ranges, envelope shapes per lifecycle stage
13. **Typography** — font families, sizes, weights
14. **Wireframe** — color, opacity, segment count
15. **Atmosphere shader** — rim power, color, intensity
16. **Trajectory color overrides** — custom stress/resolving/dormant/resurfaced target colors
17. **Erosion rate** — custom terrain decay rate for dormant patterns (default 2%/day)

### Theme Object Structure
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

  // ── Lifecycle (v0.4+) ──
  lifecycle: {
    thresholds: [1, 3, 6, 11, 20],  // seed, crystal, cluster, formation, landmark
    stages: {
      seed:      { label: "Seed",      scaleMultiplier: 1.0 },
      crystal:   { label: "Crystal",   scaleMultiplier: 1.0 },
      cluster:   { label: "Cluster",   scaleMultiplier: 1.3, satelliteCount: [2, 3] },
      formation: { label: "Formation", scaleMultiplier: 1.8, contourRings: [3, 5], labelVisible: true },
      landmark:  { label: "Landmark",  scaleMultiplier: 2.5, particleCount: [50, 100], labelVisible: true, ambientDrone: true },
    },
    // Custom draw functions per stage (null = use default diamond with scale multiplier)
    drawSeed: null,       // (ctx, cx, cy, emotionColor) => void
    drawCrystal: null,    // (ctx, cx, cy, emotionColor, frequency) => void
    drawCluster: null,    // (ctx, cx, cy, emotionColor, frequency, satellitePositions) => void
    drawFormation: null,  // (ctx, cx, cy, emotionColor, frequency) => void
    drawLandmark: null,   // (ctx, cx, cy, emotionColor, frequency) => void
  },

  // ── Color Evolution (v0.4+) ──
  evolution: {
    trajectoryWindow: 14,           // days to compute trajectory over
    dormantThreshold: 14,           // days of inactivity before dormant
    erosionRate: 0.02,              // terrain displacement decay per day when dormant
    resurfacedBloomDuration: 48,    // hours of gold bloom when dormant pattern reactivates
    maxTrajectoryShift: 0.6,        // max color shift toward trajectory target (0-1)
    colors: {
      stress:     "#a04a3a",        // target color for intensifying patterns
      resolving:  "#a0c8a0",        // target color for calming patterns
      dormant:    "#6a6a6a",        // target color for inactive patterns
      resurfaced: "#f0c896",        // bloom color for reactivated patterns
    },
    lerpSpeed: 0.01,                // per-frame color interpolation rate (1%)
  },
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

*COIL v0.4 — a lirio labs instrument*
