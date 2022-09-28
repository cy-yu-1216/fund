import { requestInstance } from '../index'

interface DetailId {
  MaintainTaskId?: Number
}
export function login(params: DetailId) {
  return requestInstance.get({
    // url: `/api/v1/equipmentmaintenance/GetDetail`,
    url: `/api/v1/equipmentmaintenance/GetDetail`,
    // url: `/api/v1/module/GetButtonList?ModuleId=562e7571-a8a7-415a-8dfd-5d9d99941686&UserId=f497f68d-2378-436e-b660-b15614422f5a`
    // url: `/api/user/qryAllUser`
    params
  })
}
