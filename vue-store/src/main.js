// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import vueScroll from 'vue-infinite-scroll'
import {currency} from './util/currency'
import './assets/css/base.css'
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: '/static/loading-svg/loading-bars.svg'
})
Vue.use(vueScroll)
Vue.use(Vuex)
Vue.filter('currency', currency)
// require('./mock.js')
const store = new Vuex.Store({
  state: {
    nickName: '',
    cartCount: 0
  },
  mutations: {
    updateInfo (state, name) {
      state.nickName = name
    },
    updateCount (state, cartCount) {
      state.cartCount += cartCount
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
