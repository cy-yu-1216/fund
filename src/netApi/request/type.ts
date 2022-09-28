import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (value: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (value: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (value: any) => any
}
export interface handleRequest<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}
