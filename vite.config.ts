import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1212,
  },
  preview: {
    port: 2323,
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
  plugins: [react()],
})
