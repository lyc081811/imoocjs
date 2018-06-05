<template>
<div>
  <detail-header></detail-header>
  <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
  <div class="content">
    <detail-list :list="categoryList"></detail-list>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDeatilDate () {
      axios.get('/api/detail.json', {
        params: {id: this.$route.params.id}
      }).then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDeatilDate()
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 20rem
</style>
