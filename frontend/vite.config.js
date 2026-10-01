import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    // 로컬 개발: /api 요청을 백엔드로 넘깁니다. 배포 환경에서는 Caddy가 같은 역할을 합니다 (명세서 3.1).
    proxy: {
      '/api': 'http://localhost:8080',
      '/actuator': 'http://localhost:8080',
    },
  },
})
