export const menuOptions = [
  {
    path: '/publish',
    name: '发布管理',
    icon: 'DeploymentUnitOutlined',
    children: [
      {
        path: '/publish/deploy',
        name: '服务部署'
      },
      {
        path: '/publish/apply',
        name: '上线单管理'
      }
    ]
  },
  {
    path: '/app/list',
    name: '应用管理',
    icon: 'DeploymentUnitOutlined',
  },
  {
    path: '/user',
    name: '用户管理',
    icon: 'DeploymentUnitOutlined',
    children: [
      {
        path: '/user/list',
        name: '用户列表'
      },
      {
        path: '/user/role/list',
        name: '角色管理'
      }
    ]
  },
]

