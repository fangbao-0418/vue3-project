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
import {
  defineComponent
} from 'vue'
export default defineComponent({
  methods: {
    login() {
      this.$router.push('/decimal')
      console.log(this.$router, 'login')
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
