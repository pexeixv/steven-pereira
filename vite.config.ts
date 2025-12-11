import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import ssr from 'vite-plugin-ssr/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), ssr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
})
