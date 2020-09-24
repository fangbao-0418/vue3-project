import { createRouter, createWebHashHistory, Router } from 'vue-router'
import APP from '@/utils/app'
import DecimalPage from '../pages/decimal/index.vue'
import Dashboard from '../containers/dashboard/index.vue'
import Login from '../pages/login'
import Logout from '../pages/logout'

import PublishList from '@/pages/publish/list'

const routes = [
  {
    path: '/',
    // name: 'main',
    component: Dashboard,
    children: [
      {
        path: '/decimal',
        component: DecimalPage
      },
      {
        name: 'publishList',
        path: '/publish/list',
        component: PublishList
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/logout',
    component: Logout
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

APP.use(router)

export default router
