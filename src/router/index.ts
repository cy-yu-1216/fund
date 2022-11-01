import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    redirect: '/login',
    component: () => import('@/views/login/login.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/register.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/fund',
        name: 'fund',
        meta: {
          title: 'fund',
          icon: 'el-icon-tools'
        },
        redirect: '/1',
        children: [
          {
            path: '/1',
            name: '1',
            meta: {
              title: '1',
              icon: 'el-icon-tools'
            },
            redirect: '/1-1',
            //不加component 要不然子路由会跳转不到相应页面的
            children: [
              {
                path: '/1-1',
                name: '1-1',
                meta: {
                  title: 'fund1-1-1'
                },
                component: () => import('@/views/fund/z.vue')
              }
            ]
          },
          {
            path: '/2',
            name: '2',
            meta: {
              title: 'fund1-2'
            },
            component: () => import('@/views/fund/2.vue')
          }
        ]
      },
      {
        path: '/fund2',
        name: 'fund2',
        meta: {
          title: 'fund2'
        },
        component: () => import('@/views/fund-2/index.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
