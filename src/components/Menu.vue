<template>
<div class="hello">
  <a-menu mode="inline" vModel:openKeys="openKeys" vModel:selectedKeys="selectedKeys" style="width: 256px" @openChange="onOpenChange">
    <a-sub-menu key="sub1">
      <template v-slot:title>
        <span>
          <MailOutlined /><span>Navigation One</span>
        </span>
      </template>
      <a-menu-item key="1">decimal.js</a-menu-item>
      <a-menu-item key="2">Option 2</a-menu-item>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template v-slot:title>
        <span>
          <AppstoreOutlined /><span>Navigation Two</span>
        </span>
      </template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub4">
      <template v-slot:title>
        <span>
          <SettingOutlined /><span>Navigation Three</span>
        </span>
      </template>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</div>
</template>

<script lang="ts">
import {
  Options,
  Vue
} from 'vue-class-component';
import {
  MailOutlined,
  // StarOutlined,
  // StarFilled,
  // StarTwoTone,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons-vue';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  openKeys: string[] = []
  rootSubmenuKeys: any[] = []
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      selectedKeys: [],
    };
  }
  components = {
    // HelloWorld,
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    // Menu
  }
  onOpenChange(openKeys: any[]) {
    const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.openKeys = openKeys;
    } else {
      this.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
