import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // 커스텀 도메인은 항상 루트에서 제공됨

  server: {
    port: 3000,
    open: true,
    host: true
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: { main: './index.html' }
    }
  },

  css: {
    devSourcemap: true
  },

  optimizeDeps: {
    include: ['font-awesome']
  },

  plugins: []
})
