// 工具函数库
import config from './config'

function requst (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
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
// get获取数据
export function get (url, data) {
  requst(url, 'GET', data)
}
// post请求数据
export function post (url, data) {
  requst(url, 'POST', data)
}

export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'sucess',
    mask: true
  })
}
export function showError (text) {
  wx.showToast({
    title: text,
    icon: 'error',
    mask: true
  })
}
