import { defineStore } from 'pinia'
// interface UserMsg {
//   userName: ''
//   userId: ''
// }
export const userMsgStore = defineStore('userMsg', {
  state: () => {
    return {
      userName: '',
      userId: ''
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
    setUserName(userName: string) {
      this.userName = userName
    }
  }
})
