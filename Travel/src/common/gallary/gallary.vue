<template>
  <div class="container" @click="GallaryClick">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    GallaryClick () {
      this.$emit('swiperShow')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .wiper-pagination
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  text-align center
  position fixed
  width 100%
  top 0
  bottom 0
  background #000
  z-index 2
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .swiper-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
