<template>
<page>
  <div class="mb8">
    <a-button type="primary" @click="addRole">
      创建角色
    </a-button>
  </div>
  <a-table rowKey="id" :columns="columns" :data-source="data">
    <template #action="{record}">
      <a-space>
        <span class="href" @click="editRole(record)">修改</span>
        <a-popconfirm title="确定是否删除该角色" @confirm="deleteRole(record)"><span class="href">删除</span></a-popconfirm>
      </a-space>
    </template>
  </a-table>
  <RoleModel v-model:record="record" v-model:visible="roleModelVisible" @ok="roleModelOk" />
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
      roleModelVisible: false,
      columns,
      data: [],
      record: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    addRole() {
      this.record = {}
      this.roleModelVisible = true
    },
    editRole(record) {
      api.fetchRoleInfo(record.id).then((res) => {
        console.log(res, 'res')
        this.roleModelVisible = true
        this.record = {
          ...record,
          permissions: res.map((item) => item.id)
        }
      })
    },
    deleteRole(record) {
      api.deleteRole(record.id).then(() => {
        this.fetchData()
      })
    },
    fetchData() {
      api.fetchRoleList().then((res) => {
        this.data = res
      })
    },
    roleModelOk() {
      this.fetchData()
    }
  }
}
</script>

<style>

</style>
