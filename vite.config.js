import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite.config.js
export default defineConfig({
  // ...
  build: {
    rollupOptions: {
      input: '/src/main.jsx'
    }
  }
});