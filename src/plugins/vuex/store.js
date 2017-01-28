import Vue from 'vue';
import Vuex from 'vuex';
import middlewares from './middlewares';

import bus from './modules/bus';

Vue.use(Vuex);


export default new Vuex.Store({
  // 严格模式下，只能使用mutation改变state，否则会报错
  strict: process.env.NODE_ENV !== 'production',
  // createLogger插件用来输出mutation的console日志（只在dev模式下输出）
  plugins: middlewares,
  // 模块组装
  modules: {
    bus,
  },
});
