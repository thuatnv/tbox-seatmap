import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': '"production"' } ,
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts', // Update to your component's entry file
      name: 'SeatMap', // Replace with your library's name
      formats: ['umd', 'cjs', 'es'], // Generate a UMD bundle
    },
    rollupOptions: {
      input: pkg.source,
      external: ['react', 'react-dom', 'konva', 'react-konva'],
      // output: {
      //   globals: {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //     'konva': 'konva',
      //     'react-konva': 'react-konva',
      //   },
      // },
      // output: [
      //   { entryFileNames: pkg.main, format: 'cjs' },
      //   { entryFileNames: pkg.module, format: 'esm' },
      // ],
      plugins: []
    },
  },
})
