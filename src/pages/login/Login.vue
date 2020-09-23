<template>
<div class="login">
  <div>
    login page
  </div>
  <a-button type="primary" @click="login">
    login
  </a-button>
</div>
</template>

<script lang="ts">
// import {
//   Vue
// } from 'vue-class-component'

import {
  defineComponent
} from 'vue'

// export default class Login extends Vue {
//   login() {
//     console.log(this.$router, '$router')
//   }
// }

export default defineComponent({
  methods: {
    login() {
      console.log(this.$router)
    }
  }
})
</script>

<style lang="stylus">
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
