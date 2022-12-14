import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCryptojs from 'vue-cryptojs'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faAddressCard,
  faCakeCandles,
  faMarsAndVenus,
  faCalendar,
  faFlag,
  faUserPen,
  faXmark,
  faVenus,
  faMars,
  faCheck,
  faPlus,
  faEye,
  faEyeSlash,
  faChartPie,
  faHouse,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAddressCard,
  faCakeCandles,
  faMarsAndVenus,
  faCalendar,
  faFlag,
  faUserPen,
  faXmark,
  faVenus,
  faMars,
  faCheck,
  faPlus,
  faEye,
  faEyeSlash,
  faChartPie,
  faHouse,
  faRightFromBracket
)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCryptojs)

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit("INITIALISE_STORE");
  },
  render: (h) => h(App),
}).$mount('#app')
