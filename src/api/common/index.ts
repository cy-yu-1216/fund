import { requestInstance } from '../index'
const firstname = '/common'
//登录
export function login(data: LoginType) {
  return requestInstance.post({
    url: `${firstname}/login`,
    data
  })
}

//注册
export function register(data: RegisterType) {
  return requestInstance.post({
    url: `${firstname}/register`,
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
