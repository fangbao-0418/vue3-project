import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import antd from './plugins/ant-design-vue'
import './style/main.styl'

const app = createApp(App)

app.use(antd)
app.use(router)
app.mount('#app')
