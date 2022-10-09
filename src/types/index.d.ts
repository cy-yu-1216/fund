//接口响应返回的类型
declare interface ResponseDataType {
  code: string | Number
  message: string
  body: unknown
}
declare interface ResponseConfigType {
  statusText: string
  status: number
  data: ResponseDataType
  headers: unknown
  config: unknown
}
