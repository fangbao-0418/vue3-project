<template>
<div class="login">
  <div class="box">
    <div class="logo" />
    <h2>欢迎来到 XT_OPS！</h2>
    <a-form class="form" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item>
        <a-input v-model:value="form.username" type="password" placeholder="用户名">
          <template v-slot:prefix>
            <UserOutlined style="color:rgba(0,0,0,.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input @keydown.enter="onSubmit" v-model:value="form.password" type="password" placeholder="密码">
          <template v-slot:prefix>
            <LockOutlined style="color:rgba(0,0,0,.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button class="login_btn" @click="onSubmit" type="primary">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import * as api from './api'
export default defineComponent({
  data() {
    return {
      labelCol: {
        span: 0
      },
      wrapperCol: {
        span: 24
      },
      form: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    onSubmit() {
      api.login(this.form).then(() => {
        this.$router.push('/')
      })
    }
  }
})
</script>

<style lang="stylus" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url('~@/assets/login.jpg') 0 0 / 100% 100%;

  .box {
    width: 400px;
    text-align: center;

    .logo {
      height: 130px;
      background: url('~@/assets/jenkins.svg') center center / 100px auto no-repeat;
      margin-bottom: 20px;
    }

    .form {
      width: 300px;
      margin: 0 auto;

      :global(.ant-form-item) {
        margin-bottom: 15px;
      }

      :global(.ant-input) {
        height: 36px !important;
      }
    }

    .login_btn {
      width: 100%;
      height: 36px;
    }
  }
}
</style>
