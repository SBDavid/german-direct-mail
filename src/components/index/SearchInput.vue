<template>
  <div class="container">
    <input placeholder="搜索"/>
  </div>
</template>

<script>
export default {
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

  @import '../../assets/style/color';

  .container {
    width: 100%;
    height: 50px;
    background-color: $common-gray;
    position: relative;
  }

  .container input {
    position: absolute;
    top: 9px;
    left: 9px;
    border: 0;
    border-radius: 5px;
    padding-left: 10px;
    width: 92%;
    height: 30px;
    outline: 0;
  }
</style>
