import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 20
}
const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  }
}
const getter = {
  count: state => {
    return state + 1
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getter
})
