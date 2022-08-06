import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { dni: 73860228, birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: 73860222, birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: 73860226, birthDate: new Date(), gender: true, age: 23, state: true },
      { dni: 73860220, birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: 73860221, birthDate: new Date(), gender: false, age: 23, state: false },
      { dni: 73860287, birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: 73860876, birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: 73863534, birthDate: new Date(), gender: true, age: 23, state: true },
      { dni: 73863423, birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: 73862343, birthDate: new Date(), gender: true, age: 23, state: true },
      { dni: 73862334, birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: 73131343, birthDate: new Date(), gender: true, age: 23, state: false },
      { dni: 72342334, birthDate: new Date(), gender: false, age: 23, state: true },
      { dni: 73861230, birthDate: new Date(), gender: true, age: 23, state: false },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
