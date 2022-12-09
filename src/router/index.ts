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
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/my-choice',
        name: 'my-choice',
        meta: {
          title: '我的自选'
        },
        component: () => import('@/views/my-choice/index.vue')
      },
      {
        path: '/transaction',
        name: 'transaction',
        meta: {
          title: '交易记录'
        },
        component: () => import('@/views/transaction/index.vue'),
        children: [
          {
            path: '/add-transaction',
            name: 'add-transaction',
            meta: {
              title: '新增交易记录'
            },
            component: () => import('@/views/transaction/add-transaction.vue')
          }
        ]
      },
      {
        path: '/profit',
        name: 'profit',
        meta: {
          title: '我的收益'
        },
        component: () => import('@/views/profit/index.vue')
      },
      {
        path: '/remind',
        name: 'remind',
        meta: {
          title: '我的提醒'
        },
        component: () => import('@/views/remind/index.vue')
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
//  redirect: '/1',
//         children: [
//           {
//             path: '/1',
//             name: '1',
//             meta: {
//               title: '1',
//               icon: 'el-icon-tools'
//             },
//             redirect: '/1-1',
//             //不加component 要不然子路由会跳转不到相应页面的
//             children: [
//               {
//                 path: '/1-1',
//                 name: '1-1',
//                 meta: {
//                   title: 'fund1-1-1'
//                 },
//                 component: () => import('@/views/fund/z.vue')
//               }
//             ]
//           },
//           {
//             path: '/2',
//             name: '2',
//             meta: {
//               title: 'fund1-2'
//             },
//             component: () => import('@/views/fund/2.vue')
//           }
//         ]
