import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
import { login } from '@/netApi/common'
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
    loginUser(username: string, password: string) {
      return new Promise((resolve, reject) => {
        //存储token
        localCache.setCache('token', '12asdas')
        localCache.setCache('panelStatus', false)
        resolve(12)
      })
      // return new Promise(async (resolve, reject) => {
      //   try {
      //     let res = await login({ username, password })
      //     //存储token
      //     localCache.setCache('token', res.token)
      //     this.userName = res.userName
      //     resolve(res)
      //   } catch (error) {
      //     // reject(error)
      //   }
      // })
    }
  }
})
