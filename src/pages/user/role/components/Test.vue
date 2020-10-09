<template>
  <ul>
    <li :key="index" v-for="(item, index) in dataSource">
      <slot name="action" :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>