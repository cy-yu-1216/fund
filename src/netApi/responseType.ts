export interface ResponseDataType {
  code: string | Number
  message: string
  body: unknown
}
export interface ResponseConfigType {
  statusText: string
  status: number
  data: ResponseType
  headers: unknown
  config: unknown
}
