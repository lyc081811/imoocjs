// 工具函数库
import config from './config'
export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res)
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

export function showSucess (text) {
  wx.showToast({
    title: text,
    icon: 'sucess',
    mask: true
  })
}
