// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/a11y-webtesting/', // use your new repo name here
  plugins: [react()],
});