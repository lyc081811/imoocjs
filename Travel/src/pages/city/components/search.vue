<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="serach-input" placeholder="请输入城市名">
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    hasNoData () {
      return !this.list
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.result = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(x => {
            if (x.spell.indexOf(this.keyword) > -1 || x.name.indexOf(this.keyword) > -1) {
              result.push(x)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  padding 0 .1rem
  background $bgColor
  .serach-input
    position relative
    z-index 1
    box-sizing border-box
    width 100%
    height .62rem
    line-height .62rem
    padding 0 .1rem
    text-align center
    border-radius .06rem
    color #666
.search-content
  position absolute
  top 1.58rem
  width 100%
  bottom 0
  background #ccc
  z-index 2
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>
