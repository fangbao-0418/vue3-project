
/**
 *  1000: "应用存在",
    1001: "应用不存在",
    1002: "应用发布成功",
    1003: "应用发布失败",
    1004: "应用发布中",
    1010: "所有应用发布完成",

    2000:"分支存在",
    2001:"分支不存在",
    2002:"分支合并或者检测成功",
    2003:"分支合并失败",
 */
type DeployCode = number

export interface DomainProps {
  app: {
    id: number
    name: string
  }
  status: {
    id: number,
    status: string
    code: DeployCode
  }
  logs: string
}

export interface DeployHistoryListProps {
  domains: DomainProps[]
  status: {
    id: number,
    status: string
  }
}