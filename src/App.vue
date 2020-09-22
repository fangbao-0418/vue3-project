<template>
<a-config-provider :locale="locale">
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      locale: zh_CN,
    }
  },
  mounted() {
    console.log(this.configProvider, 'this')
  },
  components: {
    // HelloWorld,
    // Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
