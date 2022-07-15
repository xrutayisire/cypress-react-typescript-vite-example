import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

/**
 * Vite configuration
 *
 * https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    react({
      // Exclude storybook stories
      exclude: /\.stories\.tsx?$/,
      babel: {
        plugins: ['istanbul'],
      },
    }),
    visualizer({
      filename: '.source-map-stats.html',
      sourcemap: true,
    }),
  ],
  base: '/',
  build: {
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
