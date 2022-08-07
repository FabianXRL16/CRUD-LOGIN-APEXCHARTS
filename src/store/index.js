import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        dni: '73860228',
        birthDate: new Date('12/12/2000'),
        gender: true,
        age: 19,
        state: false,
      },
      {
        dni: '17660223',
        birthDate: new Date('12/12/1998'),
        gender: false,
        age: 21,
        state: true,
      },
      {
        dni: '93860226',
        birthDate: new Date('12/12/2001'),
        gender: true,
        age: 17,
        state: true,
      },
      {
        dni: '10860220',
        birthDate: new Date('12/12/2002'),
        gender: true,
        age: 22,
        state: false,
      },
      {
        dni: '90602210',
        birthDate: new Date('12/12/2000'),
        gender: false,
        age: 18,
        state: false,
      },
      {
        dni: '78790280',
        birthDate: new Date('12/12/2001'),
        gender: true,
        age: 20,
        state: false,
      },
      {
        dni: '63860876',
        birthDate: new Date('12/12/2000'),
        gender: false,
        age: 21,
        state: true,
      },
      {
        dni: '13863534',
        birthDate: new Date('12/12/1998'),
        gender: true,
        age: 20,
        state: true,
      },
      {
        dni: '70803423',
        birthDate: new Date('12/12/2000'),
        gender: true,
        age: 20,
        state: false,
      },
      {
        dni: '33862343',
        birthDate: new Date('12/12/2002'),
        gender: true,
        age: 23,
        state: true,
      },
      {
        dni: '73221334',
        birthDate: new Date('12/12/2001'),
        gender: false,
        age: 22,
        state: true,
      },
      {
        dni: '23131343',
        birthDate: new Date('12/12/2001'),
        gender: true,
        age: 17,
        state: false,
      },
      {
        dni: '52342334',
        birthDate: new Date('12/12/1998'),
        gender: false,
        age: 22,
        state: true,
      },
      {
        dni: '03861230',
        birthDate: new Date('12/12/2000'),
        gender: true,
        age: 18,
        state: false,
      },
    ],
    userToSearch: null,
    showModal: false,
    usersUpdateType: true, // true is add and false is edit
    currentUserDni: null,
    accounts: [
      {
        user: 'fxrl16',
        password: 'U2FsdGVkX19mzkaMlkBRIpQuv6gFAsTIyZTkxirk/d8=',
        id: '6047dcef-8398-4f1f-8ff1-6050c9d0b822',
      },
    ],
    accountAccessAttempt: {},
  },
  actions: {
    userToSearch: ({ commit }, dni) => {
      commit('USER_TO_SEARCH', dni)
    },
    showModal: ({ commit }, stateModal) => {
      commit('CHANGE_STATE_MODAL', stateModal)
    },
    addUser: ({ commit }, data) => {
      commit('ADD_USER', data)
    },
    updateType: ({ commit }, stateType) => {
      commit('UPDATE_TYPE', stateType)
    },
    deleteUser: ({ commit }, dni) => {
      commit('DELETE_USER', dni)
    },
    getDniUser: ({ commit }, dni) => {
      commit('GET_DNI_USER', dni)
    },
    editUser: ({ commit }, data) => {
      commit('EDIT_USER', data)
    },
    addNewAccount: ({ commit }, account) => {
      commit('ADD_ACCOUNT', account)
    },
    findUser: ({ commit }, user) => {
      commit('FIND_USER', user)
    },
  },
  mutations: {
    USER_TO_SEARCH(state, dni) {
      state.userToSearch = dni
    },
    CHANGE_STATE_MODAL(state, stateModal) {
      state.showModal = stateModal
    },
    ADD_USER(state, data) {
      if (!state.users.some((i) => i.dni === data.dni)) {
        state.users.unshift(data)
      }
    },
    UPDATE_TYPE(state, type) {
      state.usersUpdateType = type
    },
    DELETE_USER(state, dni) {
      let pos = state.users.findIndex((i) => i.dni === dni)
      state.users.splice(pos, 1)
    },
    GET_DNI_USER(state, dni) {
      state.currentUserDni = dni
    },
    EDIT_USER(state, data) {
      let pos = state.users.findIndex((i) => i.dni === state.currentUserDni)
      let dni = {
        dni: state.users[pos].dni,
      }
      state.users.splice(pos, 1, Object.assign(data, dni))
    },
    ADD_ACCOUNT(state, account) {
      state.accounts.push(account)
    },
    FIND_USER(state, user) {
      state.accountAccessAttempt = state.accounts.find(
        (acc) => acc.user === user
      )
    },
    // SIGN_IN_ACCOUNT(state, account) {}
  },
  modules: {},
})
