import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    users: {
      Name: '',
      Email: '',
      Password: ''
    }
  },
  getters: {
    userName: state => {
      return state.users.Name;
    },
    userEmail: state => {
      return state.users.Email;
    }, 
  },
  mutations: {
    UPDATE_USERS(state, data) {
      state.users = data
    }
  },
  actions: {
    updateUsers( { commit }, {Name, Email, Password} ) {
      commit("UPDATE_USERS", {Name, Email, Password});
    },
  },
});
