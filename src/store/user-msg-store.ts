import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
import { login } from '@/api/common'
// interface UserMsg {
//   userName: ''
//   userId: ''
// }
export const userMsgStore = defineStore('userMsg', {
  state: () => {
    return {
      userName: '',
      userId: '',
      token: ''
    }
  },
  getters: {
    getUserName: (state): string => {
      return state.userName
    },
    getUserId: (state): string => {
      return state.userId
    }
  },
  actions: {
    //登录
    loginUser(loginMsg: LoginType) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await login(loginMsg)
          //存储token
          localCache.setCache('token', res.token)
          this.userName = res.userName
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
})
