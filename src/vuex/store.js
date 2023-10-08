import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false, 
  },
  mutations: {
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
  },
  actions: {},
  modules: {},
});