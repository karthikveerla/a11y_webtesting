// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_DEPLOY_TARGET === 'github'
    ? '/a11y_testing/'   // GitHub Pages
    : '/',               // Render (or default)
})