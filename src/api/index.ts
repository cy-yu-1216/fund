import RequestBase from './request'
import { ElMessage } from 'element-plus'
import localCache from '@/utils/cache'

export const requestInstance = new RequestBase({
  // baseURL: 'http://121.43.145.130/',
  // baseURL: 'http://116.62.204.86:7610/', // 请求的接口
  // baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: 'http://152.32.131.147:8088/',
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers['Access-Token'] = token
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

      const data = res.data
      if (data.code == '200') {
        return data.body
      }
      return Promise.reject(data)
    },
    responseInterceptorCatch(err) {
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
