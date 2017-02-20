<template>
  <div >
    <!-- content -->
    <div>
      <!--分类-->
      <div class="catalog-container">
        <div class="catalog-slider">
          <catalog class="catalog" /><catalog class="catalog" /><catalog class="catalog" /><catalog class="catalog" />
        </div>
      </div>
      <!--文章类表-->
      <div class="article-container">
        <div class="article-list-title">热门推荐</div>
        <articleListItem v-for="(article, index) in gHotArticles" v-bind:article=article v-on:articleSelected=articleSelected></articleListItem>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

import searchInput from './SearchInput';
import catalog from './Catalog';
import articleListItem from './ArticleListItem';

export default {
  data() {
    return {
    };
  },
  components: {
    searchInput,
    catalog,
    articleListItem,
  },
  computed: {
    ...mapGetters({
      gHotArticles: 'gHotArticles',
    }),
  },
  methods: {
    articleSelected(article) {
      /* eslint-disable no-undef */
      window.location.href = article.url;
    },
  },
};
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

  @import "../../assets/style/base";
  @import "../../assets/style/color";

  .catalog-container {
    height: 120px;
    width: 100%;
    overflow: hidden;
  }

  .catalog-slider {
    width: auto;
    white-space: nowrap;
  }

  .catalog {
    width: 6.6rem !important;
    display: inline-block;
  }

  .article-list-title {
    border-top: 1px solid $line-gray;
    border-bottom: 1px solid $line-gray;
    padding: 6px;
  }
</style>
