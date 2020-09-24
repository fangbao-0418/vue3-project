<template>
<a-layout class="container">
  <a-layout-sider class="left" :collapsed="collapsed">
    <div class="logo">XT OPS</div>
    <Menu class="menu" :collapsed="collapsed" />
  </a-layout-sider>
  <a-layout>
    <a-layout-header class="header">
      <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
      <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      <div class="top_right">
        <span>
          方宝
        </span>
        |
        <span @click="logout">
          注销
        </span>
      </div>
    </a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
      <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</a-layout>
</template>

<script>
import Menu from "./menu";
export default {
  data() {
    return {
      collapsed: false,
      selectedKeys: ["4"],
    };
  },
  components: {
    Menu,
  },
  methods: {
    logout() {
      this.$router.push('/logout')
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  height: 100%;
}

.left {
  // position fixed !important;
  // top: 0;
  // left: 0;
  // bottom: 0;
  display: flex;
  flex-direction: column;

  .logo {
    padding: 16px;
    background: #373d41;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  .menu {
    flex: 1;
    background: #001529;
    overflow-y: auto;
  }
}

.header {
  background: #fff;
  padding: 0 20px;

  .top_right {
    float: right;
    font-size: 14px;
    color: #000;

    span {
      cursor: pointer;
    }
  }
}
</style>
