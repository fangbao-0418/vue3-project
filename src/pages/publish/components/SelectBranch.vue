<template>
<div class="select-branch">
  <a-select v-model:value="value.appid" allowClear class="mr8" placeholder="app" show-search :filter-option="filterAppOption" @change="onAppChange">
    <a-select-option :label="item.name" :key="item.id" v-for="(item) in apps" :value="item.id">
      {{ item.name }}
    </a-select-option>
  </a-select>
  <a-select @focus="branchFocus" v-model:value="value.branchid" placeholder="branch" show-search :filter-option="filterBranchOption" @change="onBranchChange">
    <a-select-option :label="item.name" :key="index" v-for="(item, index) in branchs" :value="item.id">
      {{ item.name }}
    </a-select-option>
  </a-select>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  // PropType
}
from 'vue'

import * as api from '../api'

interface DataProps {
  apps: ApplicationProps[]
  branchs: BranchProps[]
  value: ValueProps
}

interface ValueProps {
  appid: any
  brandid: any
}

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default: () => {}
    }
  },
  data(): DataProps {
    return {
      apps: [],
      branchs: [],
      value: {
        appid: this.modelValue.appid,
        brandid: this.modelValue.brandid
      },
    }
  },
  created() {
    api.fetchAppList().then((res) => {
      this.apps = res
    })
  },
  mounted() {
    console.log(this.value, 'updated')
  },
  methods: {
    filterAppOption(input: string, option: any) {
      return option.props.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    filterBranchOption(input: string, option: any) {
      return option.props.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onAppChange(id: any) {
      this.value.appid = id
      api.fetchBranchList(id).then((res) => {
        this.branchs = res
        this.$emit('update:modelValue', {
          ...this.modelValue,
          ...this.value
        })
      })
    },
    onBranchChange(id: any) {
      this.value.brandid = id
      this.$emit('update:modelValue', {
        ...this.modelValue,
        ...this.value
      })
    },
    branchFocus() {
      this.onAppChange(this.value.appid)
      console.log('branchClick')
    }
  }
})
</script>

<style lang="stylus" scoped>
.select-branch {
  display: flex;

  :global(.ant-select) {
    line-height: 32px !important;
    height: 32px !important;

  }
}
</style>
