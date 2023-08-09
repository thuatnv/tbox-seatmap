import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '',
    rollupOptions: {
      input: pkg.source,
      output: [
        { entryFileNames: pkg.main, format: 'cjs' },
        { entryFileNames: pkg.module, format: 'esm' },
      ],
      plugins: []
    },
  },
})
