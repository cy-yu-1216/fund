import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { RequestInterceptors, handleRequest } from './type'

class RequestBase {
  instance: AxiosInstance
  instanceptor?: RequestInterceptors
  constructor(config: handleRequest) {
    this.instance = axios.create(config)
    this.instanceptor = config.interceptors

    this.instance.interceptors.request.use(
      this.instanceptor?.requestInterceptor,
      this.instanceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.instanceptor?.responseInterceptor,
      this.instanceptor?.responseInterceptorCatch
    )

    //全局拦截
    // this.instance.interceptors.request.use(
    //   //onFulfilled
    //   (res: AxiosRequestConfig) => {
    //     return res
    //   },
    //   //onRejected
    //   (err: AxiosRequestConfig) => {
    //     return err
    //   }
    // )
    // this.instance.interceptors.response.use(
    //   //onFulfilled
    //   (res: AxiosRequestConfig) => {
    //     return res
    //   },
    //   //onRejected
    //   (err: AxiosRequestConfig) => {
    //     return err
    //   }
    // )
  }

  request<T = any>(config: handleRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  get<T = any>(config: handleRequest<T>): Promise<T> {
    return this.request({ ...config, method: 'Get' })
  }

  post<T = any>(config: handleRequest<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}

export default RequestBase
