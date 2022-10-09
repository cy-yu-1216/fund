import { requestInstance } from '../index'

interface DetailId {
  username: string
  password: string
}
export function login(data: DetailId) {
  return requestInstance.post({
    // url: `/api/v1/equipmentmaintenance/GetDetail`,
    url: `/common/login`,
    // url: `/api/v1/module/GetButtonList?ModuleId=562e7571-a8a7-415a-8dfd-5d9d99941686&UserId=f497f68d-2378-436e-b660-b15614422f5a`
    // url: `/api/user/qryAllUser`
    data
  })
}
// https://fundapi.bulududu.com/common/login
// ### login
// POST http://152.32.131.147:8088/common/login
// Content-Type: application/json

// {
//   "username": "buludu",
//   "password": "1q2w32!"
// }
// ### register
// POST http://152.32.131.147:8088/common/register
// Content-Type: application/json

// {
//   "username": "buludu",
//   "password": "1q2w32!",
//   "nickname": "buludu",
//   "phone": "13888888888",
//   "email": "i@bulududu.com",
//   "icon": "",
//   "gender": 2,
//   "birthday": "2020-12-10",
//   "city": "浙江省杭州市",
//   "job": "",
//   "sourceType": 1,
//   "userLevel": 0,
//   "growth": 0
// }
