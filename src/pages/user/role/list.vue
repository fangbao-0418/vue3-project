<template>
<page>
  <div>
    <a-button type="primary">
      创建角色
    </a-button>
  </div>
  <a-table :columns="columns" :data-source="data">
    <template #action>
      <a-space>
        <span class="href">修改</span>
        <span class="href">删除</span>
      </a-space>
    </template>
  </a-table>
  <RoleModel />
</page>
</template>

<script>
import * as api from '../api'
import RoleModel from './components/RoleModel.vue'
const columns = [{
  title: 'ID',
  dataIndex: 'id'
}, {
  title: '角色名称',
  dataIndex: 'name'
}, {
  title: '角色名称',
  slots: {
    customRender: 'action'
  }
}]
export default {
  components: {
    RoleModel
  },
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
      api.fetchRoleList().then((res) => {
        this.data = res
      })
    }
  }
}
</script>

<style>

</style>
