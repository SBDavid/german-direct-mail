<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container" v-on:click="articleSelected">
    <div class="surface" v-bind:style=surfaceStyle></div>
    <div style="display: inline-block;vertical-align: top;max-width: 240px;width: 60%">
      <div class="title">{{article.title}}</div>
      <div class="subTitle">{{article.subTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    surfaceStyle() {
      return `background-image: url(${this.article.surface})`;
    },
  },
  methods: {
    articleSelected() {
      this.$emit('articleSelected', this.article);
    },
  },
  components: {
  },
};
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

  @import "../../assets/style/base";
  @import "../../assets/style/color";
  @import "../../assets/style/font";

  .container {
    height: 60px;
    padding: 10px;
    border-bottom: 1px solid $line-gray;
  }

  .surface {
    background-repeat: no-repeat;
    background-position: center;
    height: 60px;
    min-width: 60px;
    width: 20%;
    margin-right: 20px;
    margin-left: 5px;
    display: inline-block;
  }

  .title {
    font-size: $font-size-l;
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>
