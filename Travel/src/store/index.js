import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
Vue.use(Vuex)
// let defaultCity = '济南'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

export default new Vuex.Store({
  state: {
    city: localStorage.city || '禹城'
  },
  // 可以直接在页面方法调用mutations
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
