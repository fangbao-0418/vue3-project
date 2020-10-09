<template>
<a-modal :title="record.id !== undefined ? '修改角色' : '创建角色'" :visible="visible" @ok="ok" @cancel="hide" :width="1000">
  <a-form ref="ruleForm" :rules="rules" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="角色名称" name="name">
      <a-input placeholder="角色名称" v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="选择权限" name="permissions">
      <a-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
        Check all
      </a-checkbox>
      <a-checkbox-group v-model:value="form.permissions" @change="onChange">
        <a-row>
          <a-col :span="8" :key="index" v-for="(item, index) in permList">
            <a-checkbox :value="item.id">
              {{item.name}}
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </a-form-item>
  </a-form>
</a-modal>
</template>

<script>
import * as api from '../../api'
import APP from '@/utils/app'
export default {
  props: {
    visible: {
      type: Boolean
    },
    record: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: {...this.record},
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      },
      permList: [],
      // checkAll: false,
      checkedList: [],
      rules: {
        name: [{required: true, message: '角色名称不能为空'}],
        permissions: [
          {
            validator: async (rule, value) => {
              console.log(value, 'validate')
              if (!value?.length) {
                return Promise.reject('请选择权限')
              }
              return Promise.resolve()
            }
          }
        ]
      }
    }
  },
  computed: {
    indeterminate () {
      return !!this.form.permissions?.length && this.form.permissions?.length < this.permList.length
    },
    checkAll () {
      return !!this.permList?.length && this.permList.length === this.form?.permissions?.length
    }
  },
  created() {
    this.fetchPermList()
  },
  beforeUpdate() {
    this.form = this.record
  },
  updated() {
    console.log(this.record, 'updated')
  },
  methods: {
    fetchPermList() {
      api.fetchPermList().then((res) => {
        this.permList = res
      })
    },
    onChange() {

    },
    onCheckAllChange(e) {
      const checked = e.target.checked
      this.form.permissions = checked ? this.permList.map((item) => item.id) : []
    },
    ok() {
      console.log(this.form, 'form')
      this.$refs.ruleForm
      .validate()
      .then(() => {
        let p
        if (this.record.id) {
          p = api.updateRole({
            id: this.record.id,
            ...this.form
          })
        } else {
          p = api.addRole({
            ...this.form
          })
        }
        p.then(() => {
          this.hide()
          this.$emit('ok')
        })
      })
      .catch((e) => {
        console.log(e, 'eee')
        APP.$message.warning('请检查输入项')
      });
    },
    hide() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style>

</style>
