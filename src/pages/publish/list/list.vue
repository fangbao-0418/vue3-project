<template>
<page :breadcrumb="[{name: '上线单管理', path: '/publish/list'}]">
  <a-tabs type="card" v-model:activeKey="form.envid" @change="onTabChange">
    <a-tab-pane v-for="(item) in tabsCfgs" :key="item.id" :tab="item.name">
    </a-tab-pane>
  </a-tabs>
  <a-form layout="inline" :model="form" @submit="handleSubmit" @submit.prevent>
    <a-form-item label="应用名称">
      <a-input v-model:value="form.titleorgroup" placeholder="应用名称">
        <template v-slot:prefix>
          <UserOutlined style="color:rgba(0,0,0,.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="申请时间">
      <a-range-picker v-model:value="form.date1" show-time type="date" style="width: 100%;" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="search">
        查询
      </a-button>
    </a-form-item>
  </a-form>
  <div class="operate">
    <a-button type="primary" @click="addPublish">
      +新建发布单
    </a-button>
  </div>
  <a-table :columns="columns" :data-source="data">
    <template v-slot:action="{ text }">
      <span class="href" @click="goDetail(text)">
        详情
      </span>
    </template>
  </a-table>
  <AddPublishModal v-model:visible="publishModalVisibled" @v-on:onOk="addOk" />
</page>
</template>

<script lang="ts">
import * as api from '../api'
import AddPublishModal from './components/AddPublishModal.vue'
import {
  defineComponent
} from 'vue'
import {
  Tabs
} from 'ant-design-vue'
const columns = [{
    title: '申请标题',
    dataIndex: 'title'
  },
  {
    title: '环境',
    dataIndex: 'env.name'
  },
  {
    title: '申请人',
    dataIndex: 'applier.first_name'
  },
  {
    title: '审批人',
    dataIndex: 'approver.first_name'
  },
  {
    title: '审批意见',
    dataIndex: 'comments'
  },
  {
    title: '创建时间',
    dataIndex: 'created_time'
  },
  {
    title: '完成时间',
    key: 'action',
  },
  {
    title: '应用名称',
    // key: 'action'
  },
  {
    title: '分支名称',
    // key: 'action',
  },
  {
    title: '发布类型',
    // key: 'action',
  },
  {
    title: '发布状态',
    dataIndex: 'status.status',
  },
  {
    title: '操作',
    // key: 'action',
    slots: {
      customRender: 'action'
    },
  },
];

interface FormProps {
  applierid ? : string
  titleorgroup ? : string
}

interface DataProps {
  visible: boolean
  data: any[]
  columns: any[]
  form: FormProps
  publishModalVisibled: boolean,
    tabsCfgs: EnvProps[]
}

export default defineComponent({
  data(): DataProps {
    return {
      visible: false,
      publishModalVisibled: false,
      data: [],
      columns,
      form: {
        // titleorgroup: '',
        // applierid: ''
      },
      tabsCfgs: []
    }
  },
  components: {
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    AddPublishModal
  },
  watch: {
    publishModalVisibled() {
      console.log('publishModalVisibled change')
    }
  },
  created() {
    this.fetchEnv().then(() => {
      // this.form.envid = res[0].id
      this.fetchData()
    })
  },
  methods: {
    fetchData() {
      api.fetchPublishList(this.form).then((res) => {
        this.data = res.records
      })
    },
    fetchEnv() {
      return api.fetchEnv().then((res) => {
        this.tabsCfgs = res
        return res
      })
    },
    search() {
      this.fetchData()
    },
    handleSubmit() {
      //
    },
    addPublish() {
      this.publishModalVisibled = true
    },
    goDetail(record: any) {
      this.$router.push(`/publish/detail/${record.traceid}`)
    },
    addOk() {
      this.publishModalVisibled = false
      this.fetchData()
    },
    onTabChange(key: any) {
      console.log(key, 'key')
    }
  }
})
</script>

<style lang="stylus">
.operate {
  margin: 10px 0;
}
</style>
