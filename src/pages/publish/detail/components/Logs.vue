<template>
<div class="logs" ref="logs">
  {{logs}}
  <div v-if="code === 1004">
    <img refs="img" :src="require('@/assets/spinner.gif')" />
  </div>
</div>
</template>

<script>
import {
  defineComponent
} from 'vue'
export default defineComponent({
  props: {
    logs: {
      type: String
    },
    code: {
      type: Number
    }
  },
  data() {
    return {
      autoScroll: true
    }
  },
  mounted() {
    console.log(this.$refs, 'logs')
  },
  beforeUpdate() {
    const el = this.$refs.logs
    const scrollTop = el.scrollTop
    const scrollHeight = el.scrollHeight
    const height = el.clientHeight
    if (scrollTop + height >= scrollHeight) {
      this.autoScroll = true

    } else {
      this.autoScroll = false
    }
    // console.log(this.$refs, 'logs')
    // console.log('before update')
  },
  updated() {
    console.log('update')
    if (this.autoScroll) {
      this.$refs.logs.scrollTop = this.$refs.logs.scrollHeight
    }
  }
})
</script>

<style lang="stylus">
.logs {
  overflow-y: auto;
}
</style>
