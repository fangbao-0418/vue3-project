
/** 应用签名 */
interface ApplicationProps {
  name: string
  description: string
  ssh_repo_url: string
}

/** 分支签名 */
interface BranchProps {
  name: string
  description: string
  ssh_repo_url: string
}

/** 环境签名 */
interface EnvProps {
  id: number
  name: string
  created_time: string
}