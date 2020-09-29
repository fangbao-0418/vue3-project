<template>
<page :breadcrumb="[{name: '上线单管理', path: '/publish/list'}, { name: '上线单详情' }]">
  <a-card title='操作栏'>
    <a-button type="primary" class="mr8" @click="execDeploy">
      执行发布
    </a-button>
    <a-button type="warning" class="mr8">
      暂停发布
    </a-button>
    <a-button type="danger" class="mr8">
      中止发布
    </a-button>
    <a-button type="warning">
      全部回滚
    </a-button>
  </a-card>
  <a-card class='mt8' title='应用信息'>
    <a-table :columns="columns" :data-source="data">
      <template #status="{text}">
        <a-badge color="lime" :text="text.status " />
      </template>
      <template #action="">
        <span class="href">详情</span>
      </template>
      <template #expandedRowRender="text">
        <Logs class="logs" :logs="text.record.logs" :code="text.record.status.code" />
      </template>
      <template #expandIcon="">
        <span>xx</span>
      </template>
    </a-table>
  </a-card>
</page>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
/* eslint-disable no-unused-vars */
import {
  DomainProps
} from '../interface'
import * as api from '../api'
import Logs from './components/Logs.vue'
import {
  DeployCode
} from './enum'

const columns = [{
  title: '应用',
  dataIndex: 'app.name'
}, {
  title: '分支',
  dataIndex: 'branch[0].name'
}, {
  title: '执行时间',
  dataIndex: 'execution_time'
}, {
  title: '完成时间',
  dataIndex: 'end_time'
}, {
  title: '发布状态',
  dataIndex: 'status',
  slots: {
    customRender: 'status'
  }
}, {
  title: '申请人',
  dataIndex: 'applier.first_name'
}, {
  title: '审批人',
  dataIndex: 'approver.first_name'
}, {
  title: '操作',
  slots: {
    customRender: 'action'
  }
}]

interface DataProps {
  columns: any[]
  id: string
  data: DomainProps[]
  expandedRowKeys: any[]
  message: string
}

export default defineComponent({
  components: {
    Logs
  },
  data(): DataProps {
    return {
      columns,
      id: this.$route.params.id as string,
      data: [],
      expandedRowKeys: [],
      message: ''
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    this.socketConnect()
  },
  methods: {
    fetchData() {
      api.fetchPublishDetail(this.id).then((res) => {
        this.data = res.domains
      })
    },
    execDeploy() {
      api.execDeploy({
        traceid: this.id
      })
    },
    socketConnect() {
      if (!("WebSocket" in window)) {
        alert("您的浏览器支持 WebSocket!");
        return
      }
      var Socket = new WebSocket(`ws://192.168.20.199:8001/ws/chat/${this.id}/`);
      Socket.onopen = function () {
        console.log('socket open')
      }
      Socket.onclose = function () {
        console.log('socket onclose')
      }
      Socket.onerror = function () {
        console.log('socket onerror')
      }
      Socket.onmessage = (data) => {
        const result = JSON.parse(data.data)
        this.message = result.result
        this.data = this.data.map((item) => {
          if (item.app.id === result.appid) {
            item.logs = result.msg
            item.status.status = DeployCode[result.code]
            item.status.code = result.code
          }
          return item
        })
      }
    }
  }
})
</script>

<style lang="stylus">
.logs {
  white-space: pre;
  height: 300px;
  overflow-y: auto;
}
</style>
