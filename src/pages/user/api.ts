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

/** 创建角色 */
export function addRole (data: {
  name: string
  permissions: string[]
}) {
  return http.post(`/api/user/rolelist/`, {
    name: data.name,
    permissions: data.permissions
  })
}

/** 修改角色 */
export function updateRole (data: {
  id: any
  name: string
  permissions: string[]
}) {
  return http.put(`/api/user/roledetail/${data.id}/`, {
    name: data.name,
    permissions: data.permissions
  })
}

/** 删除角色 */
export function deleteRole (id: any) {
  return http.delete(`/api/user/roledetail/${id}/`)
}

/** 获取某个角色 */
export function fetchRoleInfo (id: any) {
  return http.get<{id: number, name: string, codename: string}[]>(`/api/user/roleunderperm/${id}/`)
}
