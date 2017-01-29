/* eslint-disable */
export default {
  state: {
    menu: {
      show: false,
    },
  },
  mutations: {
    mShowMenu(state) {
      state.menu.show = true;
    },
    mHideMenu(state) {
      state.menu.show = false;
    },
  },
  getters: {
    gShowMenu(state) {
      return state.menu.show;
    },
  },
};
