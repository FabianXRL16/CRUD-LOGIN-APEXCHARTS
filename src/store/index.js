import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { dni: '73860228', birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: '73860222', birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: '93860226', birthDate: new Date(), gender: true, age: 23, state: true },
      { dni: '10860220', birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: '10602210', birthDate: new Date(), gender: false, age: 23, state: false },
      { dni: '73860287', birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: '63860876', birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: '13863534', birthDate: new Date(), gender: true, age: 23, state: true },
      { dni: '73863423', birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: '33862343', birthDate: new Date(), gender: true, age: 23, state: true },
      { dni: '73862334', birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: '23131343', birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: '72342334', birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: '03861230', birthDate: new Date(), gender: true, age: 23, state: false },
    ],
    userToSearch: null,
  },
  actions: {
    userToSearch: ({ commit }, dni) => {
      commit("USER_TO_SEARCH", dni);
    },
  },
  mutations: {
    USER_TO_SEARCH(state, dni) {
      state.userToSearch = dni;
    },
  },
  modules: {
  }
})
