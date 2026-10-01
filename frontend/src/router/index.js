import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// 화면 경로는 화면 흐름도 v0.1의 제안 경로를 참고해 김민수가 확정합니다.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
