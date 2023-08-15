import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
// import pkg from "./package.json";

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
  plugins: [svgr(), react()],
  // define: { "process.env.NODE_ENV": '"production"' },
  // build: {
  //   minify: true,
  //   sourcemap: false,
  //   lib: {
  //     entry: "/src/components/SeatMap/SeatMapComponent.tsx", // Update to your component's entry file
  //     name: "SeatMap", // Replace with your library's name
  //     formats: ["umd", "cjs", "es"], // Generate a UMD bundle
  //     fileName: (format) => `seetMap.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ["react", "react-dom"],
  //     output: {
  //       globals: {
  //         react: "React",
  //         "react-dom": "ReactDOM",
  //       },
  //     },
  //   },
  // },
});
