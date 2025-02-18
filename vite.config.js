import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), svgr()],
  server: {
    open: true,
    port: 3001,
  },
  define: {
    "process.env": process.env,
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
  build: {
    outDir: 'dist', // This is where Vite places the built files
  },
  server: {
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
})
