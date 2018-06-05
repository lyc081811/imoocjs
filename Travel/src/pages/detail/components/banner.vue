<template>
<div>
  <div class="banner" @click="showGallaryClick">
    <img class="banner-img" :src="bannerImg" alt="">
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe650;</span>{{gallaryImgs.length}}</div>
    </div>
  </div>
  <fade>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary"  @swiperShow="closeSwiper"></common-gallary>
  </fade>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/gallary'
import Fade from 'common/fade/fade'
export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    Fade
  },
  methods: {
    showGallaryClick () {
      this.showGallary = true
      console.log(this.gallaryImgs)
    },
    closeSwiper () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    width 100%
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex 1
      font-size .3rem
      padding 0 .2rem
    .banner-number
      margin-top .2rem
      padding 0 .4rem
      line-height .4rem
      font-size .24rem
      height .4rem
      border-radius .2rem
      background-color rgba(0,0,0,.8)
      .banner-icon
        font-size .24rem
</style>
