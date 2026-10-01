<script setup>
import { onMounted, ref } from 'vue'
import api from '@/api/client'

const backendStatus = ref('확인 중…')

onMounted(async () => {
  try {
    const { data } = await api.get('/actuator/health', { baseURL: '' })
    backendStatus.value = data.status
  } catch {
    backendStatus.value = '연결 안 됨'
  }
})
</script>

<template>
  <main>
    <h1>예매한 사이</h1>
    <p>초기 구성 확인용 화면입니다. 백엔드 상태: {{ backendStatus }}</p>
  </main>
</template>
