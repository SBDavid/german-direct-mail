<template>
  <div class="container">
    <button class="btn" style="border-right: 1px solid #dddddd;">首页</button><button class="btn">有问必答</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  @import '../../assets/style/base';

  .root-container {
    width: 100%;
    height: 40px;
  }

  .btn {
    display: inline-block;
    width: 50%;
    height: 40px;
    background-color: #fff;
    border-top: 1px solid #dddddd;
    outline: 0;
  }
</style>
