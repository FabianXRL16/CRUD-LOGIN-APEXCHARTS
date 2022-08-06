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
    showModal: false,
    usersUpdateType: true // true is add and false is edit
  },
  actions: {
    userToSearch: ({ commit }, dni) => {
      commit("USER_TO_SEARCH", dni);
    },
    showModal: ({ commit }, stateModal) => {
      commit("CHANGE_STATE_MODAL", stateModal)
    },
    addUser: ({ commit }, data) => {
      commit("ADD_USER", data)
    },
    updateType: ({ commit }, stateType) => {
      commit("UPDATE_TYPE", stateType)
    },
    deleteUser: ({ commit }, dni) => {
      commit("DELETE_USER", dni)
    }
  },
  mutations: {
    USER_TO_SEARCH(state, dni) {
      state.userToSearch = dni;
    },
    CHANGE_STATE_MODAL(state, stateModal) {
      state.showModal = stateModal;
    },
    ADD_USER(state, data) {
      if (!state.users.some((i) => i.dni === data.dni)) {
        state.users.unshift(data);
      }
    },
    UPDATE_TYPE(state, type) {
      state.usersUpdateType = type
    },
    DELETE_USER(state, dni) {
      let pos = state.users.findIndex(i => i.dni === dni)
      state.users.splice(pos,1)
    }
  },
  modules: {
  }
})
