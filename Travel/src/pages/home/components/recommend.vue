<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.img" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-comment">
            <span class="iconfont starlevel">&#xe6b9;</span>
            <span class="item-comment-num">12条评论</span>
          </div>
          <div class="item-price">
            ¥<span style="font-size: .4rem">{{item.price}}</span>起
            <span class="item-address">{{item.address}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '01',
          img: 'http://img1.qunarzz.com/sight/201405/27/4e1c7943ceb94759c8d65eac.jpg_150x150_1b5d04b2.jpg',
          title: '青岛东方影都万达乐园',
          price: '192',
          address: '黄岛区'
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
  display flex
  padding .2rem 0
  height 1.9rem
  overflow hidden
  .item-img
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .2rem
    overflow hidden
    .item-title
      margin-top .13rem
      height 0.44rem
      color #212121
      font-size .32rem
      line-height .44rem
      ellipsis()
    .item-comment
      margin-top .14rem
      height 0.34rem
      .starlevel
        color #ffb436
      .item-comment-num
        color #616161
        font-size .24rem
        line-height .34rem
        vertical-align text-bottom
    .item-price
      color #ff8300
      .item-address
        float right
        margin-right .24rem
        color #616161
</style>
