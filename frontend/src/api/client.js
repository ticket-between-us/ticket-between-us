import axios from 'axios'

// 모든 API 호출은 이 인스턴스를 사용합니다.
// 오류 코드별 공통 처리(401 → 로그인 등)는 화면 흐름도 8쪽 공통 규칙을 기준으로 김민수가 추가합니다.
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

export default api
