import http from '@/utils/http'
import { DeployHistoryListProps } from './interface'

/** 获取发布列表 */
export function fetchPublishList (data: any) {
    return http.get<DeployHistoryListProps[]>('/api/deploy/history/', data).then((res) => {
        return (res || []).map((item) => {
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
export function execDeploy (paylod: {
  traceid: number
  /** 0: 执行发布 1：中断后继续发布 */
  skip: 0 | 1
}) {
  return http.post('/api/deploy/pipelineonline/{traceid}/', {
    skip: 0
  })
}