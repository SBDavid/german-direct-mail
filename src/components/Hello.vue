<template>
  <div class="root-container">
    <router-view keep-alive></router-view>
    <bMenu v-show=showMenu></bMenu>
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
<style scoped>

  .root-container {
    width: 100%;
  }
</style>
