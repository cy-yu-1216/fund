import { defineStore } from 'pinia'
export const mainStore = defineStore('mainMsg', {
  state() {
    return {
      activeRoute: sessionStorage.getItem('activeRoute') || 'home'
    }
  },
  getters: {
    getActiveRoute: (state): string => {
      return state.activeRoute
    }
  },
  actions: {
    setActiveRoute(value: string) {
      sessionStorage.setItem('activeRoute', value)
      this.activeRoute = value
    }
  }
})()
