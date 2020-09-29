<template>
<div></div>
</template>

<script>
import {
  defineComponent
} from 'vue'
import * as api from './api'
export default defineComponent({
  created() {
    api.logout().then(() => {
      this.$router.push('/login')
    })
  }
})
</script>
