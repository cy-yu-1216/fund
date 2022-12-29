import { defineStore } from 'pinia'
export const mainStore = defineStore('mainMsg', {
  state() {
    return {
      activeRoute: sessionStorage.getItem('activeRoute') || 'home',
      clientWidth: Number(sessionStorage.getItem('clientWidth')) || 0
    }
  },
  getters: {
    getActiveRoute: (state): string => {
      return state.activeRoute
    },
    getClientWidth: (state): number => {
      return state.clientWidth
    }
  },
  actions: {
    setActiveRoute(value: string) {
      sessionStorage.setItem('activeRoute', value)
      this.activeRoute = value
    },
    setClientWidth(value: number) {
      sessionStorage.setItem('clientWidth', value.toString())
      this.clientWidth = value
    }
  }
})()
