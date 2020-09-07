import Vue, { createApp } from 'vue'
import App from './App.vue'
// import { Button } from 'ant-design-vue';
import './plugins/ant-design-vue.js'
import {
  // Pagination,
  Menu,
  Button,
} from 'ant-design-vue'
import './plugins/ant-design-vue'

const app = createApp(App)
app.component(Button.name, Button)
app.component(Menu.name, Menu)
app.component(Menu.SubMenu.name, Menu.SubMenu)
app.component(Menu.Item.name, Menu.Item)

app.mount('#app')
