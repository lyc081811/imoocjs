import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import faskclick from 'fastclick'
import 'common/stylus/index.styl'
Vue.config.productionTip = false
faskclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
