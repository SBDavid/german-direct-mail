<template>
  <div >
    <!--搜索栏-->
    <searchInput></searchInput>
    <!--搜索提示-->
    <div v-if=false></div>
    <!-- content -->
    <div>
      <!--分类-->
      <div class="catalog-container">
        <catalog class="catalog" /><catalog class="catalog" /><catalog class="catalog" /><catalog class="catalog" />
      </div>
      <!--文章类表-->
    </div>
  </div>
</template>

<script>

import searchInput from './SearchInput';
import catalog from './Catalog';

export default {
  data() {
    return {
    };
  },
  components: {
    searchInput,
    catalog,
  },
};
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

  .catalog-container {
    height: 120px;
    width: 100%;
  }

  .catalog {
    width: 25% !important;
    display: inline-block;
  }
</style>
