<template>
  <div id="app" class="root">
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};

</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
