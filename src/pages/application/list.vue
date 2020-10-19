<template>
<page>
  <div>
    <a-button @click="addApp">
      添加应用
    </a-button>
  </div>
  <a-table :columns="columns" :data-source="dataSource"></a-table>
  <a-modal title="Title" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel">
    <p>{{ ModalText }}</p>
  </a-modal>
</page>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import {
  ColumnProps
} from 'ant-design-vue/types/table/column'
import * as api from './api'
import {
  defineComponent
} from 'vue'

interface DataProps {
  dataSource: any[]
  columns: ColumnProps < {} > []
}

const columns: ColumnProps < {} > [] = [{
    title: ''
  },
  {
    title: '应用名称',
    dataIndex: 'name'
  },
  {
    title: '仓库地址',
    dataIndex: 'ssh_repo_url'
  },
  {
    title: '应用描述',
    dataIndex: 'description'
  },
  {
    title: '创建时间',
    dataIndex: 'created_time'
  },
  {
    title: '操作'
  }
]
export default defineComponent({
  data(): DataProps {
    return {
      columns,
      dataSource: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      api.fetchAppList().then((res: any[]) => {
        this.dataSource = res
      })
    },
    addApp() {
      //
    }
  }
})
</script>

<style>

</style>>
