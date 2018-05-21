<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/201405/27/4e1c7943ceb94759c8d65eac.jpg_150x150_1b5d04b2.jpg" alt="">
        <div class="item-info">
          <p class="item-title">青岛东方影都万达乐园</p>
          <p class="item-desc">10条评论</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend'
}
</script>
<style lang="stylus" scoped>
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1

</style>
