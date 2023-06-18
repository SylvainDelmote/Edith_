import {defineStore} from 'pinia'

export const authStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  getters: {
    getToken(state) {
      return state.token
    }
  },
  actions: {
    addToken(myToken) {
      this.token = myToken
    }
  }
})