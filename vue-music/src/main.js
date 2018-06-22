import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import faskclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
faskclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
