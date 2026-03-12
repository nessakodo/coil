import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// PWA plugin temporarily disabled due to workbox-build compatibility
// Re-enable with: import { VitePWA } from 'vite-plugin-pwa'
// and add VitePWA({...}) to plugins array

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: true,
  },
});
