export default {
  state: {
    articles: [
      {
        id: 0,
        title: '文章标题1',
        subTitle: '文章副标题1文章副标题1',
        surface: '../../../../static/img/index/catalog.png',
        url: 'https://zhuanlan.zhihu.com/p/24254969',
      },
      {
        id: 1,
        title: '文章标题2',
        subTitle: '文章副标题2文章副标题2',
        surface: '../../../../static/img/index/catalog.png',
        url: 'https://zhuanlan.zhihu.com/p/24254969',
      },
      {
        id: 2,
        title: '文章标题3',
        subTitle: '文章副标题2文章副标题',
        surface: '../../../../static/img/index/catalog.png',
        url: 'https://zhuanlan.zhihu.com/p/24254969',
      },
      {
        id: 3,
        title: '文章标题4',
        subTitle: '文章副标题2文章副标题',
        surface: '../../../../static/img/index/catalog.png',
        url: 'https://zhuanlan.zhihu.com/p/24254969',
      },
    ],
    // 热门文章
    hotArticles: [0, 1, 2, 3, 3, 2],
  },

  getters: {
    gHotArticles(state) {
      const result = [];
      for (let i = 0; i < state.hotArticles.length; i += 1) {
        const targetIndex = state.articles.map(a => a.id).indexOf(state.hotArticles[i]);
        if (targetIndex !== -1) {
          result.push(state.articles[targetIndex]);
        }
      }
      return result;
    },
  },
};
