<template>
<div class="login">
  <div>
    <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item>
        <template v-slot:prefix>
          <UserOutlined style="color:rgba(0,0,0,.25)" />
        </template>
        <a-input v-model:value="form.name" />
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="form.name" />
      </a-form-item>
    </a-form>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  data() {
    return {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 14
      },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  mounted() {
    const input = document.querySelector('input') as HTMLInputElement
    setTimeout(() => {
      // input.focus()
      input.setAttribute('autofocus', 'autofocus')
    }, 1000)

  },
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
  background: url('~@/assets/login.jpg') 0 0 / 100% 100%;
}
</style>
