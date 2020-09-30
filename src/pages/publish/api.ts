import http from '@/utils/http'
import { DeployHistoryListProps } from './interface'

interface PageRecord<T> {
  page: number
  pageSize: number
  total: number
  records: T[]
}

/** 获取发布列表 */
export function fetchPublishList (data: any) {
  return http.get<PageRecord<DeployHistoryListProps>>('/api/deploy/history/', data).then((res) => {
    res.records = (res.records || []).map((item) => {
      let status = {
          id: 0,
          status: '待审核'
      }
      if (item.domains?.length) {
          if (item.domains.every((v) => v.status.status === '发布成功')) {
              status = {
                  id: 4,
                  status: '发布成功'
              }
          } else if (item.domains.every((v) => v.status.status === '待发布')) {
              status = {
                  id: 2,
                  status: '待发布'
              }
          }
      }
      
      return {
        ...item,
        status
      }
    })
    return res
  })
}

/** 获取应用列表 */
export function fetchAppList () {
    return http.get<ApplicationProps[]>('/api/deploy/app/')
}

/** 获取分支列表 */
export function fetchBranchList (appId: number) {
    return http.get<BranchProps[]>(`/api/deploy/branch/${appId}/`)
}

/** 提交发布单 */
export function submitPublish (data: {
    approverid: number
    envid: number
    title: string
    domains: {appid: number, branchid: number}[]
}) {
  return http.post('/api/deploy/request/', data)
}

export function fetchEnv () {
  return http.get<EnvProps[]>('/api/deploy/env/')
}

/** 执行发布 */
export function execDeploy (payload: {
  traceid: string
  /** 0: 执行发布 1：中断后继续发布 */
  skip?: 0 | 1
}) {
  return http.post(`/api/deploy/pipelineonline/${payload.traceid}/`, {
    skip: 1
  })
}

/** 查询发布详情 */
export function fetchPublishDetail (traceid: string) {
  return http.get<DeployHistoryListProps>(`/api/deploy/historydetail/${traceid}/`)
}

/** 中止所有发布 */
export function stopAllPublish (traceid: string) {
  return http.get<DeployHistoryListProps>(`/api/deploy/pipelineonline/${traceid}/`)
}

/** 获取发布组 */
export function fetchDeployGroup () {
  return http.get<any>(`/api/deploy/group/`)
}

/** 创建发布组 */
export function addDeployGroup (data: {
  name: string
}) {
  return http.post<number>(`/api/deploy/group/`, data)
}

/** 添加发布组下应用 */
export function addDeployGroupApp (data: {
  groupId: any
  appIds: any[]
}) {
  return http.post<number>(`/api/deploy/getappundergroup/${data.groupId}/`, {appid: data.appIds})
}

/** 获取发布组下应用 */
export function fetchDeployGroupApp (groupid: any) {
  return http.get<{id: any, name: string}[]>(`/api/deploy/getappundergroup/${groupid}/`)
}

/** 日常/测试/预发发布 */
export function deployOfflineApp (data: {
  title: string
  envid: any
  domains: {appid: number, branchid: any[]}[]
}) {
  return http.post(`/api/deploy/pipelineoffline/`, data)
}