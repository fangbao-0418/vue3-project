<template>
<div class="page">
  <router-view />
</div>
</template>

<script lang="ts">
import {
  Options,
  Vue
} from 'vue-class-component';

@Options({})
export default class App extends Vue {
  // data() {
  //   return {
  //     sharedState: shareData.state
  //   }
  // }
}
</script>

<style lang="stylus">

</style>
