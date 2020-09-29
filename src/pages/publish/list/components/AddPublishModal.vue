<template>
<a-modal class="form" :width="800" :visible="visible" title="新建发布单" @ok="onOk" @cancel="this.$emit('update:visible', false)" destroyOnClose>
  <a-form :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
    <a-form-item label="选择应用">
      <div style=" margin-top: 5px ">
        <div v-for="(item, index) in form.domains" :key="item.key" class="app-item mb10">
          <select-branch v-model="form.domains[index]" />
          <span class="app-delete-icon">
            <DeleteOutlined @click="deleteApp(index)" />
          </span>
        </div>
        <a-button type="dashed" @click="addApp">+添加应用</a-button>
      </div>
    </a-form-item>
  </a-form>
</a-modal>
</template>

<script>
import {
  defineComponent
} from 'vue'
import SelectBranch from '../../components/SelectBranch.vue'
import {
  DeleteOutlined
} from '@ant-design/icons-vue'
import * as api from '../../api'

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        domains: []
      },
      apps: [],
      index: 0,
    }
  },
  components: {
    DeleteOutlined,
    SelectBranch
  },
  methods: {
    onOk() {
      console.log(this.form)
      console.log(api)
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
    deleteApp(index) {
      // console.log(index, 'index')
      this.form.domains.splice(index, 1)
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
