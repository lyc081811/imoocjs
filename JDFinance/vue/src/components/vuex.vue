<template>
  <div class="demo">
    <p>{{msg}}</p>
    <h1>{{$store.state.count}}</h1>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>
<script>
import store from '../store/index'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      msg: 'hello vuex'
    }
  },
  computed: mapState({
    count: state => state.count
  }),
  store
}
</script>
<style>

</style>
