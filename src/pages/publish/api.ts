import http from '@/utils/http'

/** 获取发布列表 */
export function fetchPublishList () {
    return http.get('/api/deploy/history/')
}
