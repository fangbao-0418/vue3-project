<template>
<div :style="{ margin: '24px 16px 0', overflow: 'initial' }">
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item :key="index" v-for="(item, index) in breadcrumb" @click="goPage(item)">
      {{ item.name }}
    </a-breadcrumb-item>
  </a-breadcrumb>
  <div :style="{ padding: '24px', background: '#fff' }">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
import {
  // PropType,
  defineComponent,
} from 'vue'

interface Breadcrumb {
  name: string
  path ? : string
}

// type A = PropType < Breadcrumb > ;

export default defineComponent({
  name: 'page',
  props: {
    breadcrumb: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goPage(item: Breadcrumb) {
      item.path && this.$router.push(item.path)
    }
  }
})
</script>

<style>

</style>
