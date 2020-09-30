<template>
<a-modal :title="record.id !== undefined ? '修改角色' : '创建角色'" :visible="visible" @ok="ok" @cancel="hide" :width="1000">
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="角色名称">
      <a-input placeholder="角色名称" v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="选择权限">
      <a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
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
      form: this.record,
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      },
      indeterminate: true,
      checkAll: false,
      permList: [],
      checkedList: []
    }
  },
  created() {
    this.fetchPermList()
  },
  beforeUpdate() {
    this.form = this.record
  },
  methods: {
    fetchPermList() {
      api.fetchPermList().then((res) => {
        this.permList = res
      })
    },
    onChange() {

    },
    onCheckAllChange() {

    },
    ok() {
      console.log(this.form, 'form')
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
    },
    hide() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style>

</style>
