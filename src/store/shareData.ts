import { reactive } from 'vue'
const store = {
  debug: true,

  state: reactive({
    userInfo: {
    } as any
  }),

  setUserInfo(newValue: any) {
    this.state.userInfo = newValue
  },

  clearUserInfo() {
    this.state.userInfo = {}
  }
}

export default store