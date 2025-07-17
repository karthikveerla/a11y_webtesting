import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isGithub = mode === 'github';
  return {
    base: isGithub ? '/a11y-webtesting/' : '/',
    plugins: [react()],
  };
});