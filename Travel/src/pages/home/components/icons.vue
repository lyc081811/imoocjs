<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img"><img :src="item.imgUrl" alt=""></div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((x, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(x)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top .1rem
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
      ellipsis()
</style>
