import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import antd from './plugins/ant-design-vue'
import gobalComponent from './plugins/global-component'
import './style/main.styl'

console.log(router, 'router main')

const app = createApp(App)
app.use(router)
app.use(antd)
app.use(gobalComponent)

app.mount('#app')
