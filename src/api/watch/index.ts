import { requestInstance } from '../index'

export function save(data: { fundCode: string }) {
  return requestInstance.post({
    url: 'watch/save',
    data
  })
}
