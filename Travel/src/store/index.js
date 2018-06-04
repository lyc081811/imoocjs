import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // 可以直接在页面方法调用mutations
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + '-' + state.city
    }
  }
})
