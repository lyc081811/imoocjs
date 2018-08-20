<template>
  <div class="container">
    <button @click="login">点击登录</button>
    <div class="userinfo">
      <img :src="userInfo.avatarUrl" alt="">
      <p>{{userInfo.nickName}}</p>
    </div>
    <year-progress></year-progress>
    <button @click="scanCode">添加图书</button>
  </div>
</template>
<script>
import YearProgress from '../components/yearProgress'
import {showSuccess, post} from '../../util'
import qcloud from 'wafer2-client-sdk'
import config from '../../config'
export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userInfo: {}
    }
  },
  created () {

  },
  methods: {
    // 扫码
    scanCode () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },
    async addBook (book) {
      const res = await post('/weapp/addbook', {
        book,
        openid: this.userInfo.openid
      })
      if (res.code === 0 && res.data.title) {
        showSuccess('添加成功')
      }
    },
    // 登录
    login () {
      let user = wx.getStorageSync('userInfo')
      console.log(user)
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: userInfo => {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success: res => {
                showSuccess('登录成功')
                wx.setStorageSync('userInfo', res.data.data)
                this.userInfo = res.data.data
              }
            })
          }
        })
      }
    }
  },
  onShow () {
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.userInfo = userInfo
    }
  }
}
</script>
<style lang="scss">
.container{
  padding:0 30px;
  .userinfo{
    margin-top:10px;
    text-align:center;
    img{
      width: 150px;
      height:150px;
      margin: 20px auto;
      border-radius: 50%;
    }
  }
}

</style>
