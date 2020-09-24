import http from '@/utils/http'

export function logout () {
    return http.get('/api/user/logout/')
}