import { defineComponent, PropType } from 'vue'
import { Menu } from 'ant-design-vue'
import * as Icon from '@ant-design/icons-vue'

interface MenuOption {
  name: string
  path: string
  icon?: string
  children?: MenuOption[]
}

interface DataProps {
  selectedKeys: string[],
  openKeys: string[]
}

const MenuTree = defineComponent({
  props: {
    options: {
      type: Array as PropType<MenuOption[]>,
      required: true
    }
  },
  data () {
    return {
      selectedKeys: [],
      openKeys: []
    } as DataProps
  },
  components:{
    Icon,
    DeploymentUnitOutlined: Icon.DeploymentUnitOutlined
  },
  mounted () {
    this.getDefaultMenuId()
  },
  methods: {
    loopMenuItem (options: MenuOption[], prefix = 'm-') {
      return options.map((item, index) => {
        const IconComponent = item.icon && (Icon as any)[item.icon]
        const key = prefix + index
        if (item.children) {
          return (
            <Menu.SubMenu
              key={key}
              title={(
                <span>
                {IconComponent && <IconComponent />}
                <span>{item.name}</span>
              </span>
             ) as any}
            >
              {this.loopMenuItem(item.children, key + '-')}
            </Menu.SubMenu>
          )
        }
        return (
          <Menu.Item
            key={key}
            onClick={() => {
              this.$router.push(item.path)
            }}
          >
            <span>{IconComponent && <IconComponent />}</span>
            {item.name}
          </Menu.Item>
        )
      })
    },
    getDefaultMenuId () {
      const path = this.$route.path
      const multiPath = path.match(/(\/(\w|-|_)+)/g) || []
      const allPath: string[] = []
      multiPath.map((v, i) => {
        allPath.push((allPath[allPath.length - 1] || '') + v)
      })
      const keys: string[] = []
      function loop (options: MenuOption[], pre = 'm-') {
        options.map((item, index) => {
          const key = pre + index
          if (allPath.includes(item.path)) {
            keys.push(key)
          }
          if (item.children) {
            loop(item.children, key + '-')
          }
        })
      }
      loop(this.options)
      this.selectedKeys = keys
      this.openKeys = keys
    }
  },
  updated () {
    console.log(this.openKeys, this.selectedKeys, 'updated')
  },
  render () {
    console.log(this.openKeys, this.selectedKeys, 'render')
    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={this.selectedKeys}
        openKeys={this.openKeys}
        v-model={[this.openKeys, 'openKeys']}
        onClick={(payload: any) => {
          this.openKeys = payload.keyPath
          this.selectedKeys = [payload.key]
        }}
      >
        {this.loopMenuItem(this.options)}
      </Menu>
    );
  }
});
export default MenuTree