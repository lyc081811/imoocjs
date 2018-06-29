<template>
  <div class="recommend">
    <div ref="scroll" class="recommend-content">
      <div>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item of recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img class="swiper-img" :src="item.picUrl" alt="">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  name: 'Recommend',
  data () {
    return {
      recommends: [],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000,
        slidesPerView: 'auto',
        loopedSlides: 8
      }
    }
  },
  created () {
    this._getRecommend()
    this._getDscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDscList () {
      getDiscList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.recommend >>> .swiper-img
  width 100%
.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
