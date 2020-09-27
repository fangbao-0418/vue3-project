<template>
<page :breadcrumb="[{name: '上线单管理', path: '/publish/list'}, { name: '上线单详情' }]">
  <a-card>
    <a-button type="primary" class="mr8">
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
  <a-card class='mt8'>
    <div>
      111
    </div>
    <div>
      111
    </div>
  </a-card>
</page>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style>

</style>
