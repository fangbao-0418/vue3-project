import http from '@/utils/http'

export function fetcuUserList () {
  return http.get('/api/user/userlist/')
}