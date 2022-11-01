import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
export const appMainStore = defineStore('appMsg', {
  state() {
    return {
      panelStatus: localCache.getCache('panelStatus')
    }
  },
  getters: {
    getPanelStatus: (state): boolean => {
      return state.panelStatus
    }
  },
  actions: {
    setPanelStatus(value: boolean) {
      localCache.setCache('panelStatus', value)
      this.panelStatus = value
    }
  }
})
