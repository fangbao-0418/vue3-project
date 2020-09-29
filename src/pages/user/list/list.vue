<template>
<page>
  <a-table :columns="columns" :data-source="data">
    <template v-slot:is_active="{ text: is_active }">
      <a-switch :checked="is_active" />
    </template>
    <template #action="{text}">
      <span>{{text.id}}</span>
    </template>
  </a-table>
</page>
</template>

<script>
import * as api from '../api'

const columns = [{
  title: 'ID',
  dataIndex: 'id',
}, {
  title: '用户名',
  dataIndex: 'username'
}, {
  title: '手机号',
  dataIndex: 'phone'
}, {
  title: '邮箱',
  dataIndex: 'email'
}, {
  title: '状态',
  dataIndex: 'is_active',
  slots: {
    customRender: 'is_active'
  }
}, {
  title: '操作',
  slots: {
    customRender: 'action'
  }
}]

export default {
  data() {
    return {
      columns,
      data: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      api.fetchUserList().then((res) => {
        this.data = res
      })
    }
  }
}
</script>

<style>

</style>
