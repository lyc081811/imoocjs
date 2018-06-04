<template>
<div>
  <div class="banner" @click="showGallaryClick">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1804/c7/c74a66ec65491fc2a3.img.jpg_600x330_42dcf5d4.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">青岛东方影都万达乐园</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe650;</span>47</div>
    </div>
  </div>
  <common-gallary :imgs="imgs" v-show="showGallary"  @swiperShow="closeSwiper"></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201408/04/395fa16ffe26a508313e00a645c5c361.jpg_350x240_08350499.jpg', 'http://img1.qunarzz.com/sight/p0/201408/04/8b3f511cb220c994381d1509f4b1654c.jpg_350x240_4b8615cc.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    showGallaryClick () {
      this.showGallary = true
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
