/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'index',
      },
    },

    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../components/Hello.vue'], resolve),
    },
    {
      path: '/index1',
      name: 'index1',
      component: resolve => require(['../components/Hello.vue'], resolve),
    },
    {
      path: '*',
      component: resolve => require(['../components/common/404.vue'], resolve),
    },
  ],
});
