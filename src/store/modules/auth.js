import api from '../../api/imgur';

const state = {
  token: null
};

const getters = {
  //!! - easy way to turn value to boolean - !!null : false / !!12jdjf : true
  isLoggedIn: (state) => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  //commit - a function to call mutation
  logout: ({ commit }) => {
    commit('setToken', null);
  }

};

const mutations = {
  setToken: (state, token) => {
    state.token = token;

  }
};
