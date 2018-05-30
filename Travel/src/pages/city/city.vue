<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter" :index="index"></city-list>
    <city-alphabat :cities="cities" @change="handleChange"></city-alphabat>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/header'
import CitySearch from '@/pages/city/components/search'
import CityList from '@/pages/city/components/list'
import CityAlphabat from '@/pages/city/components/alphabat'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabat
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      index: 0
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleChange (e) {
      this.letter = e[0]
      this.index = Number(e[1])
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>
