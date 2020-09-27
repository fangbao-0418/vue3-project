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
export default class App extends Vue {}
</script>

<style lang="stylus">

</style>
