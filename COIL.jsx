import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

// ============================================================================
// SOUND ENGINE
// ============================================================================
class SoundEngine {
  constructor() {
    this.audioContext = null;
    this.masterGain = null;
    this.oscillators = new Map();
    this.drones = new Map();
    this.initAudio();
  }

  initAudio() {
    if (this.audioContext) return;
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.value = 0.3;
      this.masterGain.connect(this.audioContext.destination);
    } catch (e) { /* AudioContext not available */ }
  }

  playSound(name, duration = 1, type = 'sine') {
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    osc.type = type;
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    if (name === 'zoom') {
      osc.frequency.setValueAtTime(40, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 2.5);
    } else if (name === 'reveal') {
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.6);
    } else if (name === 'submit') {
      const notes = [261.63, 329.63, 392];
      const noteDuration = 0.2;
      notes.forEach((freq, i) => {
        setTimeout(() => {
          if (i > 0) osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
        }, i * noteDuration * 1000);
      });
      duration = 0.6;
    } else if (name === 'hover') {
      osc.frequency.setValueAtTime(1200, now);
      duration = 0.12;
    } else if (name === 'impact') {
      osc.frequency.setValueAtTime(60, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.3);
      duration = 0.3;
    } else if (name === 'bloom') {
      osc.frequency.setValueAtTime(261.63, now);
      osc.frequency.exponentialRampToValueAtTime(329.63, now + 0.25);
      duration = 0.5;
    }

    osc.start(now);
    osc.stop(now + duration);
  }

  startDrone(themeKey, frequency1, frequency2, filterFreq) {
    if (this.drones.has(themeKey)) {
      this.stopDrone(themeKey);
    }

    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    const osc1 = this.audioContext.createOscillator();
    const osc2 = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    osc1.frequency.value = frequency1;
    osc2.frequency.value = frequency2;
    gain.gain.value = 0.02;
    filter.frequency.value = filterFreq;
    filter.type = 'lowpass';

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start();
    osc2.start();

    this.drones.set(themeKey, { osc1, osc2, gain, filter });
  }

  stopDrone(themeKey) {
    if (this.drones.has(themeKey)) {
      const { osc1, osc2 } = this.drones.get(themeKey);
      osc1.stop();
      osc2.stop();
      this.drones.delete(themeKey);
    }
  }

  stopAllDrones() {
    this.drones.forEach((_, key) => this.stopDrone(key));
  }
}

// ============================================================================
// NOISE FUNCTIONS
// ============================================================================
function fbm(x, y, octaves, persistence = 0.5, lacunarity = 2) {
  let value = 0;
  let amplitude = 1;
  let frequency = 1;
  let maxValue = 0;

  for (let i = 0; i < octaves; i++) {
    value += amplitude * perlin(x * frequency, y * frequency);
    maxValue += amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }

  return value / maxValue;
}

// Simple pseudo-random for Perlin-like noise
function perlin(x, y) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;

  const n00 = Math.sin(xi * 12.9898 + yi * 78.233) * 43758.5453;
  const n10 = Math.sin((xi + 1) * 12.9898 + yi * 78.233) * 43758.5453;
  const n01 = Math.sin(xi * 12.9898 + (yi + 1) * 78.233) * 43758.5453;
  const n11 = Math.sin((xi + 1) * 12.9898 + (yi + 1) * 78.233) * 43758.5453;

  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);

  const nx0 = THREE.MathUtils.lerp(n00 - Math.floor(n00), n10 - Math.floor(n10), u);
  const nx1 = THREE.MathUtils.lerp(n01 - Math.floor(n01), n11 - Math.floor(n11), u);
  return THREE.MathUtils.lerp(nx0, nx1, v);
}

// ============================================================================
// THEME DEFINITIONS
// ============================================================================
const THEMES = {
  ghibli: {
    name: 'Studio Ghibli',
    terrainColor1: '#0d4d1d',
    terrainColor2: '#4a9d5f',
    terrainColor3: '#d4a574',
    skyHorizon: '#f5e6d3',
    skySky: '#87CEEB',
    uiBg: '#f5f0e8',
    uiSurface: '#ede5d8',
    uiText: '#2d3436',
    uiAccent: '#4a8c5c',
    uiTextMuted: '#7a8278',
    droneFreq1: 174,
    droneFreq2: 262,
    droneFilter: 400,
    particleColor: '#ffeb3b',
    particleCount: 80,
  },
  alchemy: {
    name: 'Noir Genesis Alchemy',
    terrainColor1: '#0a0808',
    terrainColor2: '#1a1515',
    terrainColor3: '#c9a84c',
    skyHorizon: '#0a0808',
    skySky: '#000000',
    uiBg: '#0a0808',
    uiSurface: '#151010',
    uiText: '#e8e0d0',
    uiAccent: '#c9a84c',
    uiTextMuted: '#5a4a3a',
    droneFreq1: 65,
    droneFreq2: 98,
    droneFilter: 250,
    particleColor: '#c9a84c',
    particleCount: 60,
  },
  terrain: {
    name: 'NASA Terrain',
    terrainColor1: '#1a0f5c',
    terrainColor2: '#d4a574',
    terrainColor3: '#ff4500',
    skyHorizon: '#050510',
    skySky: '#000000',
    uiBg: '#0f0d0b',
    uiSurface: '#1e1b17',
    uiText: '#ede5d8',
    uiAccent: '#d4a574',
    uiTextMuted: '#4a4540',
    droneFreq1: 55,
    droneFreq2: 82.5,
    droneFilter: 350,
    particleColor: '#d4a574',
    particleCount: 100,
  },
};

// ============================================================================
// DEMO DATA
// ============================================================================
const DEMO_PLANET = {
  id: 'planet-demo',
  name: 'inner weather',
  theme: 'terrain',
  createdAt: new Date().toISOString(),
  thoughts: [
    {
      id: 'thought-1',
      text: "can't stop thinking about whether I'm making the right career move",
      keywords: ['career', 'move'],
      tone: 'stress',
      position: { x: -15, z: -10 },
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 'thought-2',
      text: 'money feels tight this month watching every dollar',
      keywords: ['money', 'tight'],
      tone: 'stress',
      position: { x: -12, z: -8 },
      timestamp: new Date(Date.now() - 72000000).toISOString(),
    },
    {
      id: 'thought-3',
      text: 'great conversation with a mentor clarity about direction',
      keywords: ['mentor', 'clarity', 'direction'],
      tone: 'resolved',
      position: { x: 18, z: 15 },
      timestamp: new Date(Date.now() - 60000000).toISOString(),
    },
    {
      id: 'thought-4',
      text: 'career anxiety back comparing myself to everyone online',
      keywords: ['career', 'anxiety', 'comparing'],
      tone: 'stress',
      position: { x: -18, z: -5 },
      timestamp: new Date(Date.now() - 48000000).toISOString(),
    },
    {
      id: 'thought-5',
      text: 'built something cool today forgot about everything for hours',
      keywords: ['built', 'creating'],
      tone: 'resolved',
      position: { x: 20, z: 8 },
      timestamp: new Date(Date.now() - 36000000).toISOString(),
    },
    {
      id: 'thought-6',
      text: 'sleep has been terrible mind racing at 2am',
      keywords: ['sleep', 'racing'],
      tone: 'stress',
      position: { x: -10, z: 10 },
      timestamp: new Date(Date.now() - 24000000).toISOString(),
    },
    {
      id: 'thought-7',
      text: 'money stress again should I take the safe route',
      keywords: ['money', 'stress', 'safe'],
      tone: 'stress',
      position: { x: -15, z: 5 },
      timestamp: new Date(Date.now() - 12000000).toISOString(),
    },
    {
      id: 'thought-8',
      text: 'feeling connected to the music lately creative flow',
      keywords: ['music', 'creative', 'flow'],
      tone: 'resolved',
      position: { x: 15, z: 12 },
      timestamp: new Date(Date.now() - 6000000).toISOString(),
    },
    {
      id: 'thought-9',
      text: 'wondering about purpose and what this is all for',
      keywords: ['purpose', 'meaning'],
      tone: 'neutral',
      position: { x: 0, z: 0 },
      timestamp: new Date(Date.now() - 3000000).toISOString(),
    },
    {
      id: 'thought-10',
      text: "body feels heavy haven't moved enough this week",
      keywords: ['body', 'exercise'],
      tone: 'stress',
      position: { x: -5, z: -15 },
      timestamp: new Date().toISOString(),
    },
  ],
};

// ============================================================================
// COIL MAIN COMPONENT
// ============================================================================
export default function COIL() {
  // State management
  const [gameState, setGameState] = useState('intro'); // 'intro', 'galaxy', 'surface'
  const [universe, setUniverse] = useState({ planets: [] });
  const [activePlanetId, setActivePlanetId] = useState(null);
  const [currentInput, setCurrentInput] = useState('');
  const [expandedThoughtId, setExpandedThoughtId] = useState(null);
  const [showPlanetModal, setShowPlanetModal] = useState(false);
  const [newPlanetName, setNewPlanetName] = useState('');
  const [newPlanetTheme, setNewPlanetTheme] = useState('terrain');

  // Refs for animation
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const animationFrameRef = useRef(null);
  const soundEngineRef = useRef(new SoundEngine());
  const timeRef = useRef(0);
  const raycasterRef = useRef(new THREE.Raycaster());
  const clickMouseRef = useRef(new THREE.Vector2());
  const sceneObjectsRef = useRef(null);
  const clickStartRef = useRef({ x: 0, y: 0 });

  // Surface view camera
  const surfaceCameraRef = useRef({
    x: 0,
    z: 0,
    height: 1.5,
    yaw: 0,
    pitch: 0.1,
    targetX: 0,
    targetZ: 0,
    targetYaw: 0,
    targetPitch: 0.1,
    isMoving: false,
  });

  const inputRefs = useRef({
    mouse: { x: 0, y: 0, lastX: 0, lastY: 0 },
    dragging: false,
    scrollDelta: 0,
  });

  // ========================================================================
  // INITIALIZATION & SETUP
  // ========================================================================
  useEffect(() => {
    // Initialize with demo planet
    setUniverse({
      planets: [DEMO_PLANET],
    });
  }, []);

  useEffect(() => {
    if (gameState === 'intro') {
      soundEngineRef.current.stopAllDrones();
      return;
    }

    if (!containerRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Input handling
    const onMouseMove = (e) => {
      inputRefs.current.mouse.lastX = inputRefs.current.mouse.x;
      inputRefs.current.mouse.lastY = inputRefs.current.mouse.y;
      inputRefs.current.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      inputRefs.current.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onMouseDown = (e) => {
      inputRefs.current.dragging = true;
      clickStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      inputRefs.current.dragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      inputRefs.current.scrollDelta += e.deltaY * 0.01;
    };

    const onClick = (e) => {
      // Don't raycast if dragging
      if (Math.abs(e.clientX - clickStartRef.current.x) > 5 || Math.abs(e.clientY - clickStartRef.current.y) > 5) return;

      clickMouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      clickMouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycasterRef.current.setFromCamera(clickMouseRef.current, cameraRef.current);

      const objs = sceneObjectsRef.current;
      if (!objs) return;

      if (gameState === 'galaxy' && objs.planets.length > 0) {
        const hits = raycasterRef.current.intersectObjects(objs.planets);
        if (hits.length > 0) {
          const planetId = hits[0].object.userData.planetId;
          if (planetId) handlePlanetClick(planetId);
        }
      } else if (gameState === 'surface' && objs.markers.length > 0) {
        const hits = raycasterRef.current.intersectObjects(objs.markers);
        if (hits.length > 0) {
          const thoughtId = hits[0].object.userData.thoughtId;
          if (thoughtId) {
            handleThoughtClick(thoughtId);
            soundEngineRef.current.playSound('reveal', 0.6);
          }
        }
      }
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        const t = e.touches[0];
        inputRefs.current.dragging = true;
        inputRefs.current.mouse.x = (t.clientX / window.innerWidth) * 2 - 1;
        inputRefs.current.mouse.y = -(t.clientY / window.innerHeight) * 2 + 1;
        inputRefs.current.mouse.lastX = inputRefs.current.mouse.x;
        inputRefs.current.mouse.lastY = inputRefs.current.mouse.y;
        clickStartRef.current = { x: t.clientX, y: t.clientY };
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        const t = e.touches[0];
        inputRefs.current.mouse.lastX = inputRefs.current.mouse.x;
        inputRefs.current.mouse.lastY = inputRefs.current.mouse.y;
        inputRefs.current.mouse.x = (t.clientX / window.innerWidth) * 2 - 1;
        inputRefs.current.mouse.y = -(t.clientY / window.innerHeight) * 2 + 1;
      }
    };

    const onTouchEnd = (e) => {
      inputRefs.current.dragging = false;
      // Treat as tap if barely moved
      if (e.changedTouches.length === 1) {
        const t = e.changedTouches[0];
        if (Math.abs(t.clientX - clickStartRef.current.x) < 10 && Math.abs(t.clientY - clickStartRef.current.y) < 10) {
          onClick({ clientX: t.clientX, clientY: t.clientY });
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('click', onClick);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // Handle resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Build scene objects ONCE (not per frame!)
    const sceneObjects = { planets: [], markers: [], particles: null, stars: null, terrain: null };
    sceneObjectsRef.current = sceneObjects;

    if (gameState === 'galaxy') {
      buildGalaxyScene(scene, sceneObjects);
    } else if (gameState === 'surface') {
      buildSurfaceScene(scene, camera, sceneObjects);
    }

    // Animation loop — only updates camera + small animations, never rebuilds geometry
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      timeRef.current += 0.016;

      if (gameState === 'galaxy') {
        updateGalaxy(scene, camera, sceneObjects, timeRef.current);
      } else if (gameState === 'surface') {
        updateSurface(scene, camera, sceneObjects, timeRef.current);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('click', onClick);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onWindowResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (renderer && containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }

      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [gameState]);

  // ========================================================================
  // SCENE BUILDERS (called ONCE when entering a view, not per frame)
  // ========================================================================
  const buildGalaxyScene = (scene, objects) => {
    scene.background = new THREE.Color('#050510');

    // Stars — created once
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(1500);
    for (let i = 0; i < 1500; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 300;
      starPos[i + 1] = (Math.random() - 0.5) * 300;
      starPos[i + 2] = (Math.random() - 0.5) * 300;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    objects.stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.3, transparent: true, opacity: 0.7 }));
    scene.add(objects.stars);

    // Ambient light
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(50, 50, 50);
    scene.add(dirLight);

    // Build planet meshes
    universe.planets.forEach((planet, idx) => {
      const planetTheme = THEMES[planet.theme] || THEMES.terrain;
      const angle = (idx / Math.max(universe.planets.length, 1)) * Math.PI * 2;
      const distance = 30 + idx * 20;

      const geo = new THREE.IcosahedronGeometry(8, 4);
      const mat = new THREE.MeshPhongMaterial({
        color: new THREE.Color(planetTheme.terrainColor2),
        emissive: new THREE.Color(planetTheme.uiAccent).multiplyScalar(0.15),
        shininess: 20,
      });
      const sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(Math.cos(angle) * distance, 0, Math.sin(angle) * distance);
      sphere.userData = { planetId: planet.id, baseY: 0, angle, distance, idx };
      scene.add(sphere);
      objects.planets.push(sphere);
    });
  };

  const buildSurfaceScene = (scene, camera, objects) => {
    const planet = universe.planets.find(p => p.id === activePlanetId);
    if (!planet) return;

    const theme = THEMES[planet.theme] || THEMES.terrain;
    scene.background = new THREE.Color(theme.skySky);
    scene.fog = new THREE.Fog(new THREE.Color(theme.skyHorizon), 60, 120);

    // Lighting
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(50, 50, 50);
    scene.add(dirLight);
    scene.add(new THREE.AmbientLight(0xffffff, planet.theme === 'ghibli' ? 0.6 : 0.3));

    // Terrain — built ONCE
    const terrainGeo = new THREE.PlaneGeometry(200, 200, 200, 200);
    terrainGeo.rotateX(-Math.PI / 2);

    const positions = terrainGeo.attributes.position;
    const colors = new Float32Array(positions.count * 3);
    const amplitude = planet.theme === 'alchemy' ? 3 : planet.theme === 'ghibli' ? 5 : 8;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      const height = fbm(x * 0.03, z * 0.03, 5) * amplitude;
      positions.setY(i, height);

      const norm = (height + amplitude) / (amplitude * 2);
      const c1 = new THREE.Color(theme.terrainColor1);
      const c2 = new THREE.Color(theme.terrainColor2);
      const c3 = new THREE.Color(theme.terrainColor3);

      let color;
      if (norm < 0.4) {
        color = c1.clone().lerp(c2, norm / 0.4);
      } else {
        color = c2.clone().lerp(c3, (norm - 0.4) / 0.6);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    terrainGeo.computeVertexNormals();

    objects.terrain = new THREE.Mesh(terrainGeo, new THREE.MeshPhongMaterial({
      vertexColors: true, flatShading: true,
    }));
    scene.add(objects.terrain);
    objects.terrainAmplitude = amplitude;

    // Ghibli: Scatter trees across terrain
    if (planet.theme === 'ghibli') {
      objects.trees = [];
      for (let i = 0; i < 40; i++) {
        const tx = (Math.random() - 0.5) * 150;
        const tz = (Math.random() - 0.5) * 150;
        const th = fbm(tx * 0.03, tz * 0.03, 5) * amplitude;

        const treeGroup = new THREE.Group();

        // Trunk
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.15, 0.25, 2, 5),
          new THREE.MeshPhongMaterial({ color: '#5d3a1a', flatShading: true })
        );
        trunk.position.y = 1;
        treeGroup.add(trunk);

        // Canopy layers (round, Ghibli-style)
        const canopyColors = ['#2d7a3a', '#3d9a4a', '#4db85a'];
        for (let c = 0; c < 3; c++) {
          const canopy = new THREE.Mesh(
            new THREE.SphereGeometry(1.2 - c * 0.2, 6, 4),
            new THREE.MeshPhongMaterial({ color: canopyColors[c], flatShading: true })
          );
          canopy.position.y = 2.2 + c * 0.6;
          canopy.scale.y = 0.7;
          treeGroup.add(canopy);
        }

        treeGroup.position.set(tx, th, tz);
        treeGroup.scale.setScalar(0.8 + Math.random() * 0.8);
        scene.add(treeGroup);
        objects.trees.push(treeGroup);
      }

      // Ghibli: Floating clouds
      objects.clouds = [];
      for (let i = 0; i < 8; i++) {
        const cloudGroup = new THREE.Group();
        const numPuffs = 3 + Math.floor(Math.random() * 3);
        for (let p = 0; p < numPuffs; p++) {
          const puff = new THREE.Mesh(
            new THREE.SphereGeometry(2 + Math.random() * 2, 6, 4),
            new THREE.MeshPhongMaterial({ color: '#ffffff', flatShading: true, transparent: true, opacity: 0.85 })
          );
          puff.position.set(p * 2.5 - numPuffs, Math.random() * 0.5, Math.random() * 1.5 - 0.75);
          puff.scale.y = 0.5;
          cloudGroup.add(puff);
        }
        cloudGroup.position.set(
          (Math.random() - 0.5) * 160,
          18 + Math.random() * 10,
          (Math.random() - 0.5) * 160
        );
        scene.add(cloudGroup);
        objects.clouds.push(cloudGroup);
      }
    }

    // Particles
    const pCount = theme.particleCount;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 80;
      pPos[i * 3 + 1] = Math.random() * 15 + 2;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    objects.particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
      color: theme.particleColor,
      size: planet.theme === 'ghibli' ? 0.15 : 0.06,
      transparent: true,
      opacity: planet.theme === 'ghibli' ? 0.6 : 0.4,
      blending: planet.theme === 'ghibli' ? THREE.NormalBlending : THREE.AdditiveBlending,
    }));
    scene.add(objects.particles);

    // Alchemy: spiral vortex, rune stones, ground fog
    if (planet.theme === 'alchemy') {
      // Spiral vortex in the sky
      const vortexGeo = new THREE.BufferGeometry();
      const vortexCount = 800;
      const vortexPos = new Float32Array(vortexCount * 3);
      const vortexColors = new Float32Array(vortexCount * 3);
      for (let i = 0; i < vortexCount; i++) {
        const angle = (i / vortexCount) * Math.PI * 8;
        const radius = 5 + (i / vortexCount) * 40;
        const height = 30 + (i / vortexCount) * 15;
        vortexPos[i * 3] = Math.cos(angle) * radius;
        vortexPos[i * 3 + 1] = height;
        vortexPos[i * 3 + 2] = Math.sin(angle) * radius;

        const gold = new THREE.Color('#c9a84c');
        const crimson = new THREE.Color('#8b0000');
        const t = i / vortexCount;
        const vc = gold.clone().lerp(crimson, t);
        vortexColors[i * 3] = vc.r;
        vortexColors[i * 3 + 1] = vc.g;
        vortexColors[i * 3 + 2] = vc.b;
      }
      vortexGeo.setAttribute('position', new THREE.BufferAttribute(vortexPos, 3));
      vortexGeo.setAttribute('color', new THREE.BufferAttribute(vortexColors, 3));
      objects.vortex = new THREE.Points(vortexGeo, new THREE.PointsMaterial({
        size: 0.25,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      }));
      scene.add(objects.vortex);

      // Floating rune stones
      objects.runeStones = [];
      for (let i = 0; i < 15; i++) {
        const stone = new THREE.Mesh(
          new THREE.BoxGeometry(0.6, 1.2, 0.15),
          new THREE.MeshPhongMaterial({
            color: '#1a1515',
            emissive: '#c9a84c',
            emissiveIntensity: 0.4,
            transparent: true,
            opacity: 0.8,
          })
        );
        stone.position.set(
          (Math.random() - 0.5) * 60,
          5 + Math.random() * 12,
          (Math.random() - 0.5) * 60
        );
        stone.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        stone.userData.baseY = stone.position.y;
        scene.add(stone);
        objects.runeStones.push(stone);
      }

      // Ground fog plane
      const fogPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshBasicMaterial({ color: '#0a0808', transparent: true, opacity: 0.3, side: THREE.DoubleSide })
      );
      fogPlane.rotation.x = -Math.PI / 2;
      fogPlane.position.y = 0.5;
      scene.add(fogPlane);
    }

    // NASA Terrain: solar flare pillars, crater rings
    if (planet.theme === 'terrain') {
      // Solar flare pillars
      objects.flares = [];
      for (let i = 0; i < 6; i++) {
        const fx = (Math.random() - 0.5) * 100;
        const fz = (Math.random() - 0.5) * 100;
        const fh = fbm(fx * 0.03, fz * 0.03, 5) * amplitude;

        const flare = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.8, 8 + Math.random() * 6, 8),
          new THREE.MeshPhongMaterial({
            color: '#ff4500',
            emissive: '#ff4500',
            emissiveIntensity: 0.6,
            transparent: true,
            opacity: 0.7,
          })
        );
        flare.position.set(fx, fh + 4, fz);
        flare.userData.baseY = fh + 4;
        scene.add(flare);
        objects.flares.push(flare);

        // Point light at flare tip
        const light = new THREE.PointLight(0xff4500, 2, 15);
        light.position.set(fx, fh + 8, fz);
        scene.add(light);
      }

      // Crater rings (torus geometry at terrain level)
      objects.craters = [];
      for (let i = 0; i < 5; i++) {
        const cx = (Math.random() - 0.5) * 80;
        const cz = (Math.random() - 0.5) * 80;
        const ch = fbm(cx * 0.03, cz * 0.03, 5) * amplitude;

        const crater = new THREE.Mesh(
          new THREE.TorusGeometry(3 + Math.random() * 2, 0.4, 8, 16),
          new THREE.MeshPhongMaterial({
            color: '#1a0f5c',
            emissive: '#ff4500',
            emissiveIntensity: 0.2,
          })
        );
        crater.rotation.x = -Math.PI / 2;
        crater.position.set(cx, ch + 0.3, cz);
        scene.add(crater);
        objects.craters.push(crater);
      }
    }

    // Thought markers — built once, animated per frame
    if (planet.thoughts) {
      planet.thoughts.forEach(thought => {
        const toneColor = { stress: 0xff6b6b, neutral: 0xffd700, resolved: 0x51cf66 }[thought.tone] || 0xffd700;
        const terrainH = fbm(thought.position.x * 0.03, thought.position.z * 0.03, 5) * amplitude;

        let markerGeo, markerMat;

        if (planet.theme === 'ghibli') {
          // Seeds/plants depending on cluster size
          markerGeo = new THREE.ConeGeometry(0.3, 1.2, 6);
          markerMat = new THREE.MeshPhongMaterial({ color: 0x4a8c5c, emissive: new THREE.Color(0x4a8c5c).multiplyScalar(0.1) });
        } else if (planet.theme === 'alchemy') {
          // Crystals/runes
          markerGeo = new THREE.OctahedronGeometry(0.5);
          markerMat = new THREE.MeshPhongMaterial({ color: toneColor, emissive: new THREE.Color(0xc9a84c).multiplyScalar(0.3), shininess: 60 });
        } else {
          // Terrain beacons
          markerGeo = new THREE.SphereGeometry(0.4, 12, 12);
          markerMat = new THREE.MeshPhongMaterial({ color: toneColor, emissive: new THREE.Color(toneColor).multiplyScalar(0.3) });
        }

        const marker = new THREE.Mesh(markerGeo, markerMat);
        marker.position.set(thought.position.x, terrainH + 1.2, thought.position.z);
        marker.userData = { thoughtId: thought.id };
        scene.add(marker);
        objects.markers.push(marker);
      });
    }

    // Position camera at surface level
    const sc = surfaceCameraRef.current;
    const startH = fbm(sc.x * 0.03, sc.z * 0.03, 5) * amplitude;
    camera.position.set(sc.x, startH + sc.height, sc.z);
    camera.lookAt(sc.x + 20, startH + 2, sc.z + 20);
  };

  // ========================================================================
  // FRAME UPDATE FUNCTIONS (only move camera + animate small things)
  // ========================================================================
  const updateGalaxy = (scene, camera, objects, time) => {
    // Bob and rotate planets
    objects.planets.forEach(sphere => {
      const { baseY, idx } = sphere.userData;
      sphere.position.y = baseY + Math.sin(time * 0.5 + idx * 1.5) * 3;
      sphere.rotation.x = time * 0.15 + idx;
      sphere.rotation.y = time * 0.2 + idx;
    });

    // Slowly rotate star field
    if (objects.stars) {
      objects.stars.rotation.y = time * 0.01;
    }

    // Camera gentle orbit
    camera.position.x = Math.sin(time * 0.05) * 5;
    camera.position.y = 20 + Math.sin(time * 0.1) * 2;
    camera.position.z = 80 + Math.cos(time * 0.05) * 5;
    camera.lookAt(0, 0, 0);
  };

  const updateSurface = (scene, camera, objects, time) => {
    const amplitude = objects.terrainAmplitude || 5;
    const sc = surfaceCameraRef.current;

    // Process scroll movement (walk forward/backward)
    const moveSpeed = inputRefs.current.scrollDelta * 0.8;
    sc.targetX += Math.sin(sc.yaw) * moveSpeed;
    sc.targetZ += Math.cos(sc.yaw) * moveSpeed;
    inputRefs.current.scrollDelta *= 0.85;

    // Clamp to terrain bounds
    sc.targetX = Math.max(-90, Math.min(90, sc.targetX));
    sc.targetZ = Math.max(-90, Math.min(90, sc.targetZ));

    // Smooth camera position
    sc.x += (sc.targetX - sc.x) * 0.08;
    sc.z += (sc.targetZ - sc.z) * 0.08;

    // Process drag (look around)
    if (inputRefs.current.dragging) {
      const dx = inputRefs.current.mouse.x - inputRefs.current.mouse.lastX;
      const dy = inputRefs.current.mouse.y - inputRefs.current.mouse.lastY;
      sc.targetYaw -= dx * 2;
      sc.targetPitch = Math.max(-0.3, Math.min(0.6, sc.targetPitch - dy * 1.5));
    }

    sc.yaw += (sc.targetYaw - sc.yaw) * 0.08;
    sc.pitch += (sc.targetPitch - sc.pitch) * 0.08;

    // Terrain height at camera
    const terrainH = fbm(sc.x * 0.03, sc.z * 0.03, 5) * amplitude;
    const camY = terrainH + sc.height;

    camera.position.set(sc.x, camY, sc.z);
    camera.lookAt(
      sc.x + Math.sin(sc.yaw) * Math.cos(sc.pitch) * 20,
      camY + Math.sin(sc.pitch) * 15,
      sc.z + Math.cos(sc.yaw) * Math.cos(sc.pitch) * 20,
    );

    // Animate thought markers (gentle bob + pulse)
    objects.markers.forEach((marker, i) => {
      marker.position.y += Math.sin(time * 2 + i * 0.7) * 0.003;
      if (marker.material.emissive) {
        const pulse = 0.2 + Math.sin(time * 3 + i) * 0.15;
        marker.material.emissiveIntensity = pulse;
      }
    });

    // Animate particles
    if (objects.particles) {
      const pPos = objects.particles.geometry.attributes.position;
      for (let i = 0; i < pPos.count; i++) {
        let py = pPos.getY(i);
        py += 0.01 + Math.sin(time + i * 0.3) * 0.005;
        if (py > 18) py = 2;
        pPos.setY(i, py);
        pPos.setX(i, pPos.getX(i) + Math.sin(time * 0.3 + i * 0.1) * 0.005);
      }
      pPos.needsUpdate = true;
    }

    // Ghibli: animate clouds drifting
    if (objects.clouds) {
      objects.clouds.forEach((cloud, i) => {
        cloud.position.x += 0.02 * (i % 2 === 0 ? 1 : -1);
        if (cloud.position.x > 100) cloud.position.x = -100;
        if (cloud.position.x < -100) cloud.position.x = 100;
      });
    }

    // Alchemy: rotate vortex, float rune stones
    if (objects.vortex) {
      objects.vortex.rotation.y = time * 0.15;
    }
    if (objects.runeStones) {
      objects.runeStones.forEach((stone, i) => {
        stone.position.y = stone.userData.baseY + Math.sin(time * 0.8 + i * 2) * 1.5;
        stone.rotation.y = time * 0.3 + i;
        stone.rotation.z = Math.sin(time * 0.5 + i) * 0.3;
      });
    }

    // NASA: pulse flares
    if (objects.flares) {
      objects.flares.forEach((flare, i) => {
        const pulse = 0.7 + Math.sin(time * 2 + i * 3) * 0.3;
        flare.material.emissiveIntensity = pulse;
        flare.scale.y = 0.8 + Math.sin(time * 1.5 + i * 2) * 0.3;
        flare.position.y = flare.userData.baseY + Math.sin(time + i) * 0.5;
      });
    }
  };

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================
  const handleStartExplore = () => {
    soundEngineRef.current.playSound('zoom', 2.5);
    setGameState('galaxy');
    soundEngineRef.current.startDrone('galaxy', 174, 262, 400);
  };

  const handleCreateWorld = () => {
    setShowPlanetModal(true);
  };

  const handleCreatePlanet = () => {
    if (!newPlanetName.trim()) return;

    const newPlanet = {
      id: `planet-${Date.now()}`,
      name: newPlanetName,
      theme: newPlanetTheme,
      createdAt: new Date().toISOString(),
      thoughts: [],
    };

    setUniverse({
      planets: [...universe.planets, newPlanet],
    });

    setActivePlanetId(newPlanet.id);
    setNewPlanetName('');
    setShowPlanetModal(false);
    soundEngineRef.current.playSound('zoom', 2.5);
    setGameState('surface');
    soundEngineRef.current.stopDrone('galaxy');
    soundEngineRef.current.startDrone(
      'surface',
      THEMES[newPlanetTheme].droneFreq1,
      THEMES[newPlanetTheme].droneFreq2,
      THEMES[newPlanetTheme].droneFilter
    );
  };

  const handlePlanetClick = (planetId) => {
    setActivePlanetId(planetId);
    soundEngineRef.current.playSound('zoom', 2.5);
    setGameState('surface');
    const planet = universe.planets.find((p) => p.id === planetId);
    soundEngineRef.current.stopDrone('galaxy');
    soundEngineRef.current.startDrone(
      'surface',
      THEMES[planet.theme].droneFreq1,
      THEMES[planet.theme].droneFreq2,
      THEMES[planet.theme].droneFilter
    );
    surfaceCameraRef.current = {
      x: 0,
      z: 0,
      height: 1.5,
      yaw: 0,
      pitch: 0.1,
      targetX: 0,
      targetZ: 0,
      targetYaw: 0,
      targetPitch: 0.1,
    };
  };

  const handleBackToGalaxy = () => {
    soundEngineRef.current.playSound('zoom', 2.5);
    setGameState('galaxy');
    soundEngineRef.current.stopAllDrones();
    soundEngineRef.current.startDrone('galaxy', 174, 262, 400);
    setExpandedThoughtId(null);
  };

  const handleSubmitThought = () => {
    if (!currentInput.trim() || !activePlanetId) return;

    const planet = universe.planets.find((p) => p.id === activePlanetId);
    if (!planet) return;

    const STOP_WORDS = new Set(['about','after','again','also','been','before','being','between','both','cannot','could','does','doing','done','down','during','each','even','every','from','gets','going','gone','good','have','here','into','just','keep','like','long','look','made','make','many','more','most','much','must','need','never','next','only','other','over','part','same','should','some','still','such','take','than','that','them','then','there','these','they','this','those','through','time','under','upon','very','want','were','what','when','where','which','while','will','with','would','your']);
    const keywords = currentInput
      .toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 2 && !STOP_WORDS.has(w))
      .slice(0, 8);
    const stressWords = ['stress','anxiety','worried','fear','panic','overwhelm','angry','frustrat','sad','depress','exhaust','tired','hate','hurt','pain','crying','hopeless','stuck','lost','broken','lonely','insecure','doubt','nervous','dread','tight','heavy','racing','compare','cant','sleep','money'];
    const resolvedWords = ['peace','calm','happy','grateful','clarity','resolved','joy','love','connected','creative','flow','inspired','confident','free','light','relieved','proud','content','serene','mindful','grounded','energized','great','beautiful','amazing','awesome'];
    const lower = currentInput.toLowerCase();
    const stressScore = stressWords.filter(w => lower.includes(w)).length;
    const resolvedScore = resolvedWords.filter(w => lower.includes(w)).length;
    const tone = stressScore > resolvedScore ? 'stress' : resolvedScore > stressScore ? 'resolved' : 'neutral';

    const newThought = {
      id: `thought-${Date.now()}`,
      text: currentInput,
      keywords,
      tone,
      timestamp: new Date().toISOString(),
      position: (() => {
        // Find thoughts sharing keywords for clustering
        const related = planet.thoughts?.filter(t =>
          t.keywords.some(kw => keywords.includes(kw))
        );
        if (related && related.length > 0) {
          // Position near related thoughts (average position + small offset)
          const avgX = related.reduce((s, t) => s + t.position.x, 0) / related.length;
          const avgZ = related.reduce((s, t) => s + t.position.z, 0) / related.length;
          return {
            x: avgX + (Math.random() - 0.5) * 8,
            z: avgZ + (Math.random() - 0.5) * 8,
          };
        }
        return {
          x: (Math.random() - 0.5) * 40,
          z: (Math.random() - 0.5) * 40,
        };
      })(),
    };

    const updatedPlanets = universe.planets.map((p) =>
      p.id === activePlanetId ? { ...p, thoughts: [...(p.thoughts || []), newThought] } : p
    );

    setUniverse({ planets: updatedPlanets });
    setCurrentInput('');
    soundEngineRef.current.playSound('submit', 0.6);
  };

  const handleThoughtClick = (thoughtId) => {
    setExpandedThoughtId(expandedThoughtId === thoughtId ? null : thoughtId);
  };

  // ========================================================================
  // RENDER
  // ========================================================================
  const activeTheme = activePlanetId
    ? THEMES[universe.planets.find((p) => p.id === activePlanetId)?.theme] || THEMES.terrain
    : THEMES.terrain;

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#000',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Intro Screen */}
      {gameState === 'intro' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 100%)',
            zIndex: 100,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '2rem', fontFamily: "'Fraunces'" }}>
            COIL
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#aaa', maxWidth: '600px' }}>
            A thought pattern planet where your inner weather takes physical form. Walk through your
            landscape.
          </p>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem' }}>
            <button
              onClick={handleStartExplore}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                background: '#4a8c5c',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              EXPLORE A UNIVERSE
            </button>
            <button
              onClick={handleCreateWorld}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                background: '#c9a84c',
                border: 'none',
                color: '#000',
                cursor: 'pointer',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              CREATE YOUR FIRST WORLD
            </button>
          </div>
        </div>
      )}

      {/* Galaxy View UI */}
      {gameState === 'galaxy' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              color: '#fff',
              fontSize: '1.2rem',
              fontFamily: "'Fraunces'",
            }}
          >
            COIL
          </div>
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              color: '#aaa',
              fontSize: '0.9rem',
            }}
          >
            {universe.planets.length} WORLDS
          </div>
          <button
            onClick={() => setShowPlanetModal(true)}
            style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2rem',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#4a8c5c',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(74, 140, 92, 0.6)',
            }}
          >
            +
          </button>
        </div>
      )}

      {/* Surface View UI */}
      {gameState === 'surface' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
            }}
          >
            <button
              onClick={handleBackToGalaxy}
              style={{
                background: 'transparent',
                border: `2px solid ${activeTheme.uiAccent}`,
                color: activeTheme.uiText,
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                pointerEvents: 'auto',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                borderRadius: '4px',
                backgroundColor: activeTheme.uiSurface,
              }}
            >
              ← GALAXY
            </button>
          </div>

          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              color: activeTheme.uiText,
              fontSize: '0.9rem',
            }}
          >
            {universe.planets.find((p) => p.id === activePlanetId)?.name || 'Unnamed'} · {universe.planets.find((p) => p.id === activePlanetId)?.thoughts?.length || 0} thoughts
          </div>

          {/* Input bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '600px',
              pointerEvents: 'auto',
            }}
          >
            <textarea
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="WHAT'S LOOPING?"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                border: `2px solid ${activeTheme.uiAccent}`,
                borderRadius: '8px',
                backgroundColor: activeTheme.uiSurface,
                color: activeTheme.uiText,
                fontFamily: "'DM Sans'",
                resize: 'none',
                height: '100px',
                boxSizing: 'border-box',
              }}
              onKeyDown={(e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                  handleSubmitThought();
                }
              }}
            />
            <button
              onClick={handleSubmitThought}
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: activeTheme.uiAccent,
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
                fontWeight: 'bold',
                pointerEvents: 'auto',
              }}
            >
              SUBMIT
            </button>
          </div>

          {/* Thought expansion card */}
          {expandedThoughtId && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: activeTheme.uiSurface,
                border: `2px solid ${activeTheme.uiAccent}`,
                borderRadius: '12px',
                padding: '2rem',
                maxWidth: '500px',
                width: '90%',
                color: activeTheme.uiText,
                zIndex: 200,
                pointerEvents: 'auto',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              }}
            >
              {(() => {
                const planet = universe.planets.find((p) => p.id === activePlanetId);
                const thought = planet?.thoughts?.find((t) => t.id === expandedThoughtId);
                if (!thought) return null;

                return (
                  <>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                      {thought.text}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      {thought.keywords.map((kw) => (
                        <span
                          key={kw}
                          style={{
                            background: activeTheme.uiAccent,
                            color: '#fff',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                          }}
                        >
                          ● {kw}
                        </span>
                      ))}
                    </div>
                    {(() => {
                      const related = planet.thoughts.filter(t =>
                        t.id !== thought.id &&
                        t.keywords.some(kw => thought.keywords.includes(kw))
                      );
                      if (related.length === 0) return null;
                      return (
                        <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                          <p style={{ fontSize: '0.8rem', color: activeTheme.uiTextMuted, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            LINKED THOUGHTS ({related.length})
                          </p>
                          {related.slice(0, 3).map(rt => (
                            <div
                              key={rt.id}
                              onClick={() => setExpandedThoughtId(rt.id)}
                              style={{
                                padding: '0.5rem',
                                marginBottom: '0.25rem',
                                cursor: 'pointer',
                                borderLeft: `3px solid ${rt.tone === 'stress' ? '#ff6b6b' : rt.tone === 'resolved' ? '#51cf66' : '#ffd700'}`,
                                paddingLeft: '0.75rem',
                                fontSize: '0.9rem',
                                opacity: 0.85,
                              }}
                            >
                              {rt.text.slice(0, 60)}{rt.text.length > 60 ? '...' : ''}
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                    <div
                      style={{
                        fontSize: '0.9rem',
                        color: activeTheme.uiTextMuted,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {new Date(thought.timestamp).toLocaleDateString()} · 
                      <span
                        style={{
                          textTransform: 'uppercase',
                          fontWeight: 'bold',
                          color:
                            thought.tone === 'stress'
                              ? '#ff6b6b'
                              : thought.tone === 'resolved'
                                ? '#51cf66'
                                : '#ffd700',
                          marginLeft: '0.5rem',
                        }}
                      >
                        {thought.tone}
                      </span>
                    </div>
                    <button
                      onClick={() => setExpandedThoughtId(null)}
                      style={{
                        background: 'transparent',
                        border: `1px solid ${activeTheme.uiAccent}`,
                        color: activeTheme.uiAccent,
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                      }}
                    >
                      Close
                    </button>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* Planet creation modal */}
      {showPlanetModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: '#1a1a1a',
              border: '2px solid #4a8c5c',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '500px',
              width: '90%',
              color: '#fff',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', fontFamily: "'Fraunces'" }}>Create a New World</h2>
            <input
              type="text"
              value={newPlanetName}
              onChange={(e) => setNewPlanetName(e.target.value)}
              placeholder="World name"
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                background: '#2a2a2a',
                border: '1px solid #4a8c5c',
                color: '#fff',
                borderRadius: '4px',
                boxSizing: 'border-box',
                fontFamily: "'DM Sans'",
              }}
            />
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '1rem' }}>Choose a theme:</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {Object.entries(THEMES).map(([key, theme]) => (
                  <div
                    key={key}
                    onClick={() => setNewPlanetTheme(key)}
                    style={{
                      flex: 1,
                      minWidth: '120px',
                      padding: '1rem',
                      background: newPlanetTheme === key ? '#4a8c5c' : '#2a2a2a',
                      border: `2px solid ${newPlanetTheme === key ? '#4a8c5c' : '#444'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: theme.terrainColor2,
                        margin: '0 auto 0.5rem',
                      }}
                    />
                    <p style={{ fontSize: '0.85rem', margin: 0 }}>{theme.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleCreatePlanet}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  background: '#4a8c5c',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                }}
              >
                Create
              </button>
              <button
                onClick={() => {
                  setShowPlanetModal(false);
                  setNewPlanetName('');
                }}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  background: '#2a2a2a',
                  border: '1px solid #666',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Film grain overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          zIndex: 999,
        }}
      />

      {/* Footer */}
      <div
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          fontSize: '0.75rem',
          color: '#666',
          zIndex: 50,
        }}
      >
        A LIRIO LABS INSTRUMENT · v0.3
      </div>
    </div>
  );
}
