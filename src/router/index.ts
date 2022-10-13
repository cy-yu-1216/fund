import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
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
          title: 'fund'
        },
        component: () => import('@/views/fund-1/index.vue'),
        redirect: '/1',
        children: [
          {
            path: '/1',
            name: '1',
            meta: {
              title: 'fund1-1'
            },
            component: () => import('@/views/fund-1/1.vue'),
            children: [
              {
                path: '/1-1',
                name: '1-1',
                meta: {
                  title: 'fund1-1'
                },
                component: () => import('@/views/fund-1/1.vue')
              }
            ]
          },
          {
            path: '/2',
            name: '2',
            meta: {
              title: 'fund1-2'
            },
            component: () => import('@/views/fund-1/2.vue')
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
