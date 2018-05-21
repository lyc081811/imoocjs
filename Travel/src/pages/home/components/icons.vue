<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <div class="icon">
          <div class="icon-img"><img :src="item.url" alt=""></div>
          <p class="icon-desc">{{item.txt}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [
        {
          id: '01',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          txt: '景点门票'
        },
        {
          id: '02',
          url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          txt: '必游榜单'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon
  position relative
  float left
  overflow hidden
  width 25%
  height 0
  padding-bottom 25%
  .icon-img
    position absolute
    width 100%
    bottom .44rem
    top 0
    text-align center
    img
      height 100%
  .icon-desc
    color $darkTextColor
    text-align center
    position absolute
    width 100%
    height .44rem
    line-height .44rem
    bottom 0
</style>
