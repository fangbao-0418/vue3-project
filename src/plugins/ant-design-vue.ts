
import { App } from 'vue'
import {
  ConfigProvider,
  Layout,
  Menu,
  Button,
} from 'ant-design-vue'
 
export default function (app: App) {
  app.component(ConfigProvider.name, ConfigProvider)
  app.component(Layout.name, Layout)
  app.component(Layout.Sider.name, Layout.Sider)
  app.component(Layout.Content.name, Layout.Content)
  app.component(Layout.Header.name, Layout.Header)
  app.component(Layout.Footer.name, Layout.Footer)
  app.component(Button.name, Button)
  app.component(Menu.name, Menu)
  app.component(Menu.SubMenu.name, Menu.SubMenu)
  app.component(Menu.Item.name, Menu.Item)
}