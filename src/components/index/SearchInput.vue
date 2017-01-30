<template>
  <div class="container">
    <div class="input" >
      <input placeholder="搜索">
    </div>
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

  .container .input {
    position: absolute;
    top: 9px;
    left: 9px;
    right: 9px;
    border: 0;
    border-radius: 5px;
    padding-left: 7px;
    height: 30px;
    outline: 0;
    background-color: $common-white;
  }

  .container input {
    border: 0;
    width: 100%;
    margin-top: 7px;
    outline: 0;
  }
</style>
