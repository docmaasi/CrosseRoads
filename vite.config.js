import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'crosseroads-emblem.png',
        'crosseroads-logo-clear.png',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'CrosseRoads — Guidance • Support • Opportunity',
        short_name: 'CrosseRoads',
        description:
          'Free tools from Dr. Kisa Crosse: career assessment, college planner, parent roadmap, wellness, and guides.',
        start_url: '/CareerPathfinder',
        display: 'standalone',
        theme_color: '#4a2373',
        background_color: '#f6f0fa',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.test.{ts,tsx,js,jsx}'],
  },
});
