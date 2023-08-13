import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

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

  plugins: [svgr(), react()],
});
