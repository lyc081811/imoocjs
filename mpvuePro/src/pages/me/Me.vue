<template>
  <div class="container">
    <div class="userinfo">
      <!-- <img :src="userInfo.avatarUrl" alt="暂无头像"> -->
      <button open-type="getUserInfo" v-if="canIUse" bindgetuserinfo="bindGetUserInfo">获取信息</button>
      <p v-else>{{userInfo.nickName}}</p>
    </div>
    <progress :percent="percent" show-info activeColor="#e60000"/>
    <p>{{year}}年已经过去{{days}}天了</p>
    <button class="btn" @click="scanBook">添加图书</button>
  </div>
</template>
<script>
// import qcloud from 'wafer2-client-sdk'
// import config from '../../config'
// import YearProgress from '../components/yearProgress'
export default {
  data () {
    return {
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      let offSet = (new Date().getTime() - start.getTime()) / 1000 / 3600 / 24 + 1
      return parseInt(offSet)
    },
    percent () {
      return (this.days / 365 * 100).toFixed(1)
    }
  },
  created () {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  }
}
</script>
<style lang="scss">
.container{
  padding:0 30px;
  .userinfo{
    margin-top:100px;
    text-align:center;
    img{
      width: 150px;
      height:150px;
      margin: 20px;
      border-radius: 50%;
    }
  }
}

</style>
