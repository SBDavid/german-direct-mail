/* eslint-disable */
export default {
  state: {
    menu: {
      show: false,
    },
    search: {
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
    mShowSearch(state) {
      state.search.show = true;
    },
    mHideSearch(state) {
      state.search.show = false;
    },
  },
  getters: {
    gShowMenu(state) {
      return state.menu.show;
    },
    gShowSearch(state) {
      return state.search.show;
    },
  },
};
