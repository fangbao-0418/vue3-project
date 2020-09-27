export interface DeployHistoryListProps {
  domains: {
    status: {
      id: number,
      status: string
    }
  }[]
  status: {
    id: number,
    status: string
  }
}