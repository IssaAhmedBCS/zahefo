import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',          // Important: assets load from root
  build: {
    minify: false      // Keep original variable names so eval works
  },
  server: {
    port: 3000,
    open: true
  }
});
