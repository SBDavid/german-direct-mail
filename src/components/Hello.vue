<template>
  <div class="root-container">
    <router-view keep-alive></router-view>
    <bMenu class="menu" v-show=showMenu></bMenu>
  </div>
</template>

<script>

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style rel="stylesheet/scss" lang="scss" scoped>

  .root-container {
    width: 100%;
  }

  .menu {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
