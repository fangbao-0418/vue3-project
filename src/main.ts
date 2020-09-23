import { Router } from 'vue-router'
/// <reference path="../node_modules/vue-router/dist/vue-router.d.ts" />
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import antd from './plugins/ant-design-vue'


// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//    $router: Router
//   }
// }

const app = createApp(App)
// app.use(store)
app.use(router)
app.use(antd)
app.mount('#app')
