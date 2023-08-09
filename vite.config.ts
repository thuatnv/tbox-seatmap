<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";
>>>>>>> d5678d8 (feat: render seat mpa data from API)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // global: path.resolve(__dirname, "./src/global"),
    },
  },
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
  define: { 'process.env.NODE_ENV': '"production"' } ,
})
