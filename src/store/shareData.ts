import { reactive } from 'vue'
const store = {
  debug: true,

  state: reactive({
    userInfo: {}
  }),

  setUserInfo(newValue: Object) {
    this.state.userInfo = newValue
  },

  clearUserInfo() {
    this.state.userInfo = {}
  }
}

export default store