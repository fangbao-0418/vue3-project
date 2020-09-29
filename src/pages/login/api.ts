import http from '@/utils/http'

export function login (data: {
  password: string
  username: string
}) {
    return http.post('/api/user/login/', data)
}