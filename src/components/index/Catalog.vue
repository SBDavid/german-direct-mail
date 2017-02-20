<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="container">
    <img class="pic" v-bind:src=picUrl />
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    picUrl: {
      type: String,
      default: '../../../static/img/index/catalog.png',
    },
    title: {
      type: String,
      default: '标题',
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
  components: {
  },
};
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

  @import "../../assets/style/base";
  @import "../../assets/style/font";

  .container {
    width: 100%;
    text-align: center;
    margin-top: 15px;
  }

  .pic {
    height: 60px;
    margin-bottom: 10px;
  }

  .title {
    font-size: $font-size-m-rem;
  }
</style>
