import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    "process.env": process.env,
  },
  server: {
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
})
