<template>
<div>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1804/c7/c74a66ec65491fc2a3.img.jpg_600x330_42dcf5d4.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">青岛东方影都万达乐园</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe650;</span>47</div>
    </div>
  </div>
  <common-gallary></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'Banner',
  components: {
    CommonGallary
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
