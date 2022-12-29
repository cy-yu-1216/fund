import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
import { login } from '@/api/common'

export const userMsgStore = defineStore('userMsg', {
  state: () => {
    return {
      username: localCache.getCache('username') || '',
      nickname: localCache.getCache('nickname') || 'cccc',
      token: localCache.getCache('token') || ''
      // baseData: localCache.getCache('baseData') || ''
    }
  },
  getters: {
    getUsername: (state): string => {
      return state.username
    },
    getNickname: (state): string => {
      return state.nickname
    },
    getToken: (state): string => {
      return state.token
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
          localCache.setCache('username', res.username)
          localCache.setCache('nickname', res.nickname)
          localCache.setCache('baseData', res)
          this.nickname = res.nickname
          this.username = res.username
          this.token = res.token
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
})()
