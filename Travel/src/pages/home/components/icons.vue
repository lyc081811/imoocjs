<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img"><img :src="item.url" alt=""></div>
          <p class="icon-desc">{{item.txt}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperIconsList: [
        {
          id: '01',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          txt: '景点门票'
        },
        {
          id: '02',
          url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          txt: '必游榜单'
        },
        {
          id: '03',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          txt: '自然风光'
        },
        {
          id: '04',
          url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          txt: '一日游'
        },
        {
          id: '05',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          txt: '踏青赏花'
        },
        {
          id: '06',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          txt: '游乐场'
        },
        {
          id: '07',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          txt: '名胜古迹'
        },
        {
          id: '08',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          txt: '趵突泉'
        },
        {
          id: '09',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          txt: '济南动物园'
        },
        {
          id: '10',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          txt: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.swiperIconsList.forEach((x, index) => {
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
