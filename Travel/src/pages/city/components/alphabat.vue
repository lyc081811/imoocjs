<template>
  <ul class="list">
    <li class="item" v-for="(item, key, index) of cities" :key="key" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleClick" :data-index="index">{{key}}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabat',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', [e.target.innerText, e.target.dataset.index])
    },
    handleTouchStart () {
      console.log(1)
      this.touchStatus = true
    },
    handleTouchMove (e) {
      console.log(1.5)
      if (this.touchStatus) {
        console.log(e.target.dataset.index)
        this.$emit('change', [e.target.innerText, e.target.dataset.index])
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
      console.log(2)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  align-items center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  background #ccc
  .item
    line-height .4rem
    color $bgColor
</style>
