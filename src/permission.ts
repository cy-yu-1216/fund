import router from './router'
import localCache from '@/utils/cache'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to, form, next) => {
  NProgress.start()
  //如果到登录或者注册页面则清空缓存
  if (to.name == 'login' || to.name == 'register') {
    localCache.clearCache()
    next()
  } else {
    //判断有没有token
    //没有-跳转登录页面
    //有-判断有没有这个路由
    if (!localCache.getCache('token')) {
      next({ path: '/login' })
    } else {
      //如果所要跳转的路由存在跳转
      //否则跳转404
      const routerList = router.getRoutes().filter((res) => res.path == to.path)
      if (routerList.length || to.path == '/') {
        next()
      } else {
        next({ path: '/404' })
      }
    }
  }
  // NProgress.done()
})
router.afterEach(() => {
  //进度条消失
  NProgress.done()
})
