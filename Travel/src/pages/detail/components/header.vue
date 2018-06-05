<template>
  <div>
    <router-link to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handeScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handeScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handeScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  z-index 2
  left .2rem
  right .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius 50%
  text-align center
  background-color rgba(0,0,0,.8)
  .back-icon
    color #fff
    font-size .4rem
.header-fixed
  position fixed
  top 0
  left 0
  width 100%
  z-index 2
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background $bgColor
  font-size .32rem
  .header-icon
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    color #fff
    font-size .4rem
</style>
