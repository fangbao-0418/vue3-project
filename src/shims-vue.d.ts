import { Router } from 'vue-router'
import { defineComponent } from 'vue'
declare module '*.vue' {
  const component: ReturnType<typeof defineComponent>
  export default component
}

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $router: Router
//   }
// }