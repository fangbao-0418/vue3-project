import { App } from 'vue'

import Page from '@/components/Page.vue'

export default function (app: App) {
  app.component(Page.name, Page)
}