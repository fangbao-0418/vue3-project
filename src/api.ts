import http from '@/utils/http'
/** 获取应用列表 */
export function fetchUserInfo () {
  return http.get<ApplicationProps[]>('/api/user/get_logined_info/')
}