
import { App } from 'vue'
import {
  ConfigProvider,
  Layout,
  Menu,
  Button,
  Input,
  Form,
  DatePicker,
  Table,
  Modal
} from 'ant-design-vue'
import { UserOutlined, LockOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
 
export default function (app: App) {
  app.component(MenuUnfoldOutlined.name, MenuUnfoldOutlined)
  app.component(MenuFoldOutlined.name, MenuFoldOutlined)
  app.component(UserOutlined.name, UserOutlined)
  app.component(LockOutlined.name, LockOutlined)
  app.component(Modal.name, Modal)
  app.component(Table.name, Table)
  app.component(DatePicker.name, DatePicker)
  app.component(DatePicker.RangePicker.name, DatePicker.RangePicker)
  app.component(Form.name, Form)
  app.component(Form.Item.name, Form.Item)
  app.component(Input.name, Input)
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