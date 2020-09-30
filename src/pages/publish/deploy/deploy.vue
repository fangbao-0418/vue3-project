<template>
<page>
  <a-form class="form" :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
    <a-form-item label="发布环境">
      <a-radio-group :default-value="form.env" button-style="solid" v-model:value="form.env">
        <a-radio-button :value="item.id" :key="item.id" v-for="(item) in envs">
          {{item.name}}
        </a-radio-button>
      </a-radio-group>
      <!-- <a-select style="width:200px" class="mr8" placeholder="env" v-model="form.env">
        <a-select-option :label="item.name" :key="item.id" v-for="(item) in envs" :value="item.id">
          {{ item.name }}
        </a-select-option>
      </a-select> -->
    </a-form-item>
    <a-form-item label="选择应用">
      <div style=" margin-top: 5px ">
        <a-checkbox-group v-if="form.domains.length" v-model:value="form.apps">
          <div v-for="(item, index) in form.domains" :key="item.key">
            <a-space class="app-item mb10">
              <a-checkbox :disabled="item.appid === undefined" :value="item.appid"></a-checkbox>
              <select-branch style="width: 400px" v-model="form.domains[index]" />
              <span class="app-delete-icon">
                <DeleteOutlined @click="deleteApp(index)" />
              </span>
            </a-space>
          </div>
        </a-checkbox-group>
        <div>
          <a-button type="dashed" @click="addApp">+添加应用</a-button>
        </div>
      </div>
    </a-form-item>
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="20">
        <a-button type="primary" @click="deploy">部署服务</a-button>
      </a-col>
    </a-row>
  </a-form>
</page>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import SelectBranch from '../components/SelectBranch.vue'
import {
  DeleteOutlined
} from '@ant-design/icons-vue'
import shareData from '@/store/shareData'
import * as api from '../api'

interface DataProps {
  form: {
    domains: any[]
    env: any
    apps: any[]
  }
  apps: any[]
  envs: any[]
  index: number
  groupId: any
}

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data(): DataProps {
    return {
      form: {
        domains: [],
        env: {},
        apps: []
      },
      envs: [],
      apps: [],
      index: 0,
      groupId: undefined
    }
  },
  components: {
    DeleteOutlined,
    SelectBranch
  },
  created() {
    this.fetchEnvs()
    this.fetchDeployGroup()
  },
  methods: {
    onOk() {
      api.submitPublish({
        approverid: 2,
        envid: 4,
        title: '测试',
        domains: this.form.domains.map((item) => ({
          ...item,
          key: undefined
        }))
      })
      // this.$emit('update:visible', false)
    },
    addApp() {
      this.form.domains.push({
        key: this.index
      })
      console.log(this.form.domains, 'domains')
      this.index++
    },
    deleteApp(index: number) {
      // console.log(index, 'index')
      this.form.domains.splice(index, 1)
    },
    fetchEnvs() {
      api.fetchEnv().then((res) => {
        this.envs = res
      })
    },
    fetchDeployGroup() {
      api.fetchDeployGroup().then((res) => {
        this.groupId = res?.id
        this.fetchDeployGroupApp(this.groupId)
      })
    },
    fetchDeployGroupApp(groupId: any) {
      api.fetchDeployGroupApp(groupId).then((res) => {
        this.form.domains = res.map((item) => {
          return {
            appid: item.id
          }
        })
        this.form = {
          ...this.form
        }
      })
    },
    deploy() {
      console.log(this.form)
      if (this.groupId) {

        api.addDeployGroupApp({
          groupId: this.groupId,
          appIds: this.form.domains.map((item) => item.appid)
        })
        const domains = this.form.domains.map((item) => {
          return {
            appid: item.appid,
            branchid: [item.branchid]
          }
        })
        console.log(this.form, 'form')
        console.log(domains, 'xxx')
        api.deployOfflineApp({
          title: '',
          envid: this.form.env,
          domains
        })
        return
      }
      api.addDeployGroup({
        name: shareData.state.userInfo.id + '发布组'
      }).then((id) => {
        console.log(id)
      })
    }
  }
})
</script>

<style lang="stylus">
.form {
  .ant-form-item-control {
    line-height: 32px;
  }

  .app-item {
    display: flex;

    .select-branch {
      flex: 1;
    }

    .app-delete-icon {
      width: 10px;
      margin-left: 8px;

      span {
        cursor: pointer;
        color: red;
      }
    }
  }
}
</style>
