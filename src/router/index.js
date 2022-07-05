import { createRouter, createWebHashHistory } from 'vue-router'
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     // path: '/about',
//     // name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   // }
// ]

export const publicPath = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/layout'),
    children: [
      {
        path: '/index',
        component: () => import('@/views/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/userCenter',
        name: 'userCenter',
        component: () => import('../views/userCenter')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicPath
})

export default router
