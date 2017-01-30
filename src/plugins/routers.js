/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import bus from './vuex/modules/bus';
import store from './vuex/store';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/Hello.vue'], resolve),
      children: [
        {
          path: '/index',
          name: 'index',
          meta: {
            showMenu: true,
            showSearch: true,
          },
          component: resolve => require(['../components/index/IndexView.vue'], resolve),
        },
        {
          path: '/service',
          name: 'service',
          meta: {
            showMenu: true,
            showSearch: true,
          },
          component: resolve => require(['../components/Hello.vue'], resolve),
        },
        {
          path: '*',
          component: resolve => require(['../components/index/IndexView.vue'], resolve),
          meta: {
            showMenu: true,
            showSearch: true,
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.showMenu)) {
    store.commit({ type: 'mShowMenu' });
  }
  else {
    store.commit({ type: 'mHideMenu' });
  }
  if (to.matched.some(record => record.meta.showSearch)) {
    store.commit({ type: 'mShowSearch' });
  }
  else {
    store.commit({ type: 'mHideSearch' });
  }
  next();
})
