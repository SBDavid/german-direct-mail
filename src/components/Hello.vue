<template>
  <div class="container">
    <!--搜索栏-->
    <searchInput class="search-input"></searchInput>
    <router-view class="root-container" keep-alive></router-view>
    <bMenu class="menu" v-show=showMenu></bMenu>
  </div>
</template>

<script>
import searchInput from './index/SearchInput';
import bMenu from './menu/BottomMenu';

export default {
  data() {
    return {
    };
  },
  computed: {
    showMenu() {
      return this.$store.state.bus.menu.show;
    },
  },
  components: {
    bMenu,
    searchInput,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style rel="stylesheet/scss" lang="scss" scoped>

  .container {
    width: 100%;
  }

  .root-container {
    margin-top: 50px;
  }

  .search-input {
    position: fixed !important;
    top: 0;
    left: 0;
    height: 50px !important;
  }

  .menu {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
