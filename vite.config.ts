<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD
// import path from "path";
>>>>>>> d5678d8 (feat: render seat mpa data from API)
=======
import path from "path";
>>>>>>> 4a7f14e (feat: new folder structure before migrating seatmap code)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      api: path.resolve(__dirname, "./src/api"),
      components: path.resolve(__dirname, "./src/components"),
      global: path.resolve(__dirname, "./src/global"),
      resources: path.resolve(__dirname, "./src/resources"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
      hooks: path.resolve(__dirname, "./src/hooks"),
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
