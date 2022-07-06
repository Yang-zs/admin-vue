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
        path: '/sys/users',
        name: 'userCenter',
        component: () => import('../views/users'),
        meta: { title: '用户管理' }
      },
      {
        path: '/sys/roles',
        name: 'userLIst',
        component: () => import('../views/roles'),
        meta: { title: '角色管理' }
      },
      {
        path: '/sys/menus',
        name: 'roleList',
        component: () => import('../views/menus'),
        meta: { title: '菜单管理' }
      },
      {
        path: '/sys/dicts',
        name: 'dictList',
        component: () => import('../views/dictList'),
        meta: { title: '数字管理' }
      },
      {
        path: '/usercenter',
        name: 'usercenter',
        component: () => import('../views/usercenter'),
        meta: { title: '个人中心' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicPath
})

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/login') return next()
  const tokenStr = localStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
