<template>
<div class="progressbar">
  <progress :percent="percent" show-info activeColor="#e60000"/>
  <p>{{year}}已经过去了{{days}}天</p>
</div>
</template>
<script>
export default {
  name: 'YearProgress',
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      let time = new Date()
      let endTime = time.getTime()
      let starTime = time.setMonth(0, 1)
      let day = (endTime - starTime) / 1000 / 60 / 60 / 24
      return day + 1
    },
    percent () {
      let totalDays = 365
      if (this.year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0)) {
        totalDays = 366
      }
      return (this.days / totalDays * 100).toFixed(0)
    }
  }
}
</script>
<style lang="scss" scoped>
.progressbar{
  text-align: center;
  margin-top:10px;
  margin-bottom:40px;
  width:100%;
  progress{
    margin-bottom: 10px;
  }
}
</style>
