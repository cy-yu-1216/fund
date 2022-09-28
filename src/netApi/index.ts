import RequestBase from './request'
import { ElMessage } from 'element-plus'
import localCache from '@/utils/cache'
export const requestInstance = new RequestBase({
  // baseURL: 'http://121.43.145.130/',
  // baseURL: 'http://116.62.204.86:7610/', // 请求的接口
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers['factorykey'] = token
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      ElMessage({
        message: err.message,
        type: 'error',
        duration: 2 * 1000
      })
    },
    responseInterceptor(res) {
      console.log(res)

      return res
    },
    responseInterceptorCatch(err) {
      console.log(err)

      return err
    }
  }
})
// export function doGet(url: handleRequest) {
//   requestInstance
//     .get(url)
//     .then((res) => {
//       return res
//     })
//     .catch((err) => {
//       return err
//     })
// }
