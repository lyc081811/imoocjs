<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
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
