import router from './router'
import localCache from '@/utils/cache'
router.beforeEach((to, form, next) => {
  //判断有没有token
  //没有-跳转登录页面
  //有-判断有没有这个路由
  if (!localCache.getCache('token')) {
    //如果当前跳转的是login 继续
    //否则跳到登录页面
    if (to.name == 'login') {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    //如果所要跳转的路由存在跳转
    //否则跳转404
    const routerList = router.getRoutes().filter((res) => res.path == to.path)
    if (routerList.length) {
      next()
    } else {
      next({ path: '/404' })
    }
  }
})
