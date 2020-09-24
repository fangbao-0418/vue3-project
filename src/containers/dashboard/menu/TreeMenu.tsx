import { defineComponent, PropType } from 'vue'
import { Menu } from 'ant-design-vue'

interface MenuOption {
  name: string
  path: string
  children?: MenuOption[]
}


const MenuTree = defineComponent({
  props: {
    options: {
      type: Array as PropType<MenuOption[]>,
      required: true
    }
  },
  methods: {
    loopMenuItem (options: MenuOption[]) {
      return options.map((item) => {
        if (item.children) {
          return (
            <Menu.SubMenu title={item.name}>
              {this.loopMenuItem(item.children)}
            </Menu.SubMenu>
          )
        }
        return (
          <Menu.Item
            onClick={() => {
              this.$router.push(item.path)
            }}
          >
            {item.name}
          </Menu.Item>
        )
      })
    },
  },
  render () {
    return (
      <Menu
        theme="dark"
        mode="inline"
      >
        {this.loopMenuItem(this.options)}
      </Menu>
    );
  }
});
export default MenuTree