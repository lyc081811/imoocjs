<template>
  <div class="search">
    <input type="text" class="serach-input" placeholder="请输入城市名">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  padding 0 .1rem
  background $bgColor
  .serach-input
    box-sizing border-box
    width 100%
    height .62rem
    line-height .62rem
    padding 0 .1rem
    text-align center
    border-radius .06rem
    color #666
</style>
