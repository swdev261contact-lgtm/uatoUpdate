import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Force all packages to use the single root React instance.
    // react-emoji-picker@1.0.13 ships react@0.14.10 which creates a
    // duplicate runtime and breaks the hook dispatcher.
    dedupe: ['react', 'react-dom', 'react-dom/client'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
})
