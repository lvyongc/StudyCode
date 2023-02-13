import Vue from 'vue'
import Vuex from 'vuex'
import {apiLogin} from "../api/index";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    login(state,payload){
      state.token = payload.token;
      localStorage.setItem('token',payload.token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const { username, password } = payload;
      const res = await apiLogin({ username, password });
      commit("login", {
        token: res.data.token,
      });
      console.log(res)
    },
  },
  modules: {
  }
})
