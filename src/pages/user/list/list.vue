<template>
<page>
  <a-table></a-table>
</page>
</template>

<script>
import * as api from '../api'
export default {
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      api.fetcuUserList()
    }
  }
}
</script>

<style>

</style>
