import Vue from 'vue'
import App from './App'
import router from './router'
import storeVux from './store/index'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  storeVux,
  render: h => h(App),
  data: {
    Bus: new Vue()
  }
})
