import http from '@/utils/http'

export function fetchUserList () {
  return http.get('/api/user/userlist/')
}

export function fetchRoleList () {
  return http.get('/api/user/rolelist/')
}

export function fetchPermList () {
  return http.get('/api/user/permlist/')
}