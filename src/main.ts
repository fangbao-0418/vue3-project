import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import antd from './plugins/ant-design-vue'
import './style/main.styl'

const app = createApp(App)
app.use(router)
app.use(antd)
app.mount('#app')
