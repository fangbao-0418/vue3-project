import http from '@/utils/http'

export function fetchAppList () {
  return http.get('/api/deploy/app/')
}
