<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '01',
          img: 'http://img1.qunarzz.com/sight/source/1505/ef/815eec316c47c4.jpg_r_640x214_5bf7f999.jpg',
          title: '济南必游TOP10',
          desc: '名山古寺，清泉旧巷，就是心中的济南'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  background #fff
  margin-bottom .1rem
  overflow hidden
  .item-img-wrapper
    height 0
    padding-bottom 37.4375%
    .item-img
      width 100%
  .item-info
    padding .14rem .2rem .2rem .2rem
    .item-title
      color #212121
      font-size .28rem
      line-height .48rem
      ellipsis()
    .item-desc
      color #616161
      font-size .24rem
      line-height .42rem
      ellipsis()
</style>
