<template>
<a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys">
  <a-menu-item v-for="(item, index) in menuOptions" :key="index">
    <user-outlined />
    <span class="nav-text" @click="goPage">{{ item.name }}</span>
  </a-menu-item>
</a-menu>
</template>

<script lang="ts">
import {
  UserOutlined
} from '@ant-design/icons-vue';
import {
  Options,
  Vue
} from 'vue-class-component'
import {
  menuOptions
} from './config'

@Options({
  components: {
    UserOutlined
  }
})
export default class extends Vue {
  components = {

  }
  selectedKeys = []
  menuOptions = menuOptions
  // data() {
  //   return {
  //     menuOptions: menuOptions
  //   }
  // }
  goPage() {
    console.log('go page')
  }
}
</script>
