<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary'
}
</script>
<style lang="stylus" scoped>
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
    overflow hidden
    height 0
    padding-bottom 100%
</style>
