import { defineConfig } from 'vite'

export default defineConfig({
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true, // 자동으로 브라우저 열기
    host: true // 네트워크에서 접근 가능하도록 설정
  },
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // 소스맵 생성
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  
  // CSS 설정
  css: {
    devSourcemap: true
  },
  
  // 최적화 설정
  optimizeDeps: {
    include: ['font-awesome']
  },
  
  // 플러그인 설정 (필요시 추가)
  plugins: []
})


