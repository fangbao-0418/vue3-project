<template>
<tree-menu :options="options" />
</template>

<script lang="ts">
import {
  Options,
  Vue
} from 'vue-class-component'
import {
  menuOptions
} from './config'
import TreeMenu from './TreeMenu'

@Options({
  components: {
    TreeMenu
  }
})
export default class extends Vue {
  components = {

  }
  selectedKeys = []
  options = menuOptions
  goPage() {
    console.log('go page')
  }
}
</script>
