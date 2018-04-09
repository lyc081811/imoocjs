<template>
  <div class="recommend">
    <div class="recommend-content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      recommends: [],
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(data => {
        if (data.code === ERR_OK) {
          this.recommends = data.data.slider
          // console.log(data.data.slider)
        }
      })
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
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
      .swiper-pagination
        span
          width: 12px
          height: 12px
          display: inline-block
          background: #fff
</style>
