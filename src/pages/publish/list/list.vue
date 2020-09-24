<template>
<div>
  <a-form layout="inline" :model="formInline" @submit="handleSubmit" @submit.prevent>
    <a-form-item label="应用名称">
      <a-input v-model:value="form.user" placeholder="Username">
        <template v-slot:prefix>
          <UserOutlined style="color:rgba(0,0,0,.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="申请时间">
      <a-range-picker v-model:value="form.date1" show-time type="date" placeholder="Pick a date" style="width: 100%;" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  <div class="operate">
    <a-button type="primary" @click="addPublish">
      +新建发布单
    </a-button>
  </div>
  <a-table :columns="columns" :data-source="data">
    <template v-slot:name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template v-slot:customTitle>
      <span>
        <smile-outlined /> Name
      </span>
    </template>
    <template v-slot:tags="{ text: tags }">
      <span>
        <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
  </a-table>
  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">

  </a-modal>
</div>
</template>

<script>
import * as api from '../api'

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
    slots: {
      customRender: 'action'
    },
  },
  {
    title: '应用名称',
    key: 'action'
  },
  {
    title: '分支名称',
    key: 'action',
  },
  {
    title: '发布类型',
    key: 'action',
  },
  {
    title: '发布状态',
    key: 'action',
  },
  {
    title: '操作',
    key: 'action',
    // slots: {
    //   customRender: 'action'
    // },
  },
];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      visible: false,
      data,
      columns,
      form: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      api.fetchPublishList().then((res) => {
        this.data = res
      })
    },
    handleSubmit() {
      //
    },
    addPublish() {
      this.visible = true
    }
  }
}
</script>

<style lang="stylus">
.operate {
  margin: 10px 0;
}
</style>
