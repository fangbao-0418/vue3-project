import { createRouter, createWebHashHistory } from 'vue-router'
import DecimalPage from '../pages/decimal/index.vue'
import Dashboard from '../containers/dashboard/index.vue'
import Login from '../pages/login'

console.log(DecimalPage, 'DecimalPage')

const routes = [
  {
    path: '/',
    // name: 'main',
    component: Dashboard,
    children: [
      {
        path: '/decimal',
        component: DecimalPage
      }
    ]
  },
  {
    path: '/login',
    component: Login
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

export default router
