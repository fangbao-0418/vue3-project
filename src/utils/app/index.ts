
import { message } from 'ant-design-vue'
const router = require('../../router').default

console.log(router, 'app router')

// export default {
//   $message: {
//     success: (content: string) => {
//       message.success(content)
//     },
//     warning: (content: string) => {
//       message.warning(content)
//     },
//     error: (content: string) => {
//       message.error(content)
//     }
//   },
//   $router: router
// }

class App {
  // config.globalProperties.$router
  $message = {
    success: (content: string) => {
      message.success(content)
    },
    warning: (content: string) => {
      message.warning(content)
    },
    error: (content: string) => {
      message.error(content)
    }
  }
  use (plugin: any) {
    console.log(plugin, 'use plugin')
  }
}

export default new App()
