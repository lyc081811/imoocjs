import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
// import axios from 'axios'
// import qs from 'qs'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
export function getDiscList () {
  const url = 'https://c.y.qq.com/cgi-bin/musicu.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return jsonp(url, data, options)
  // return axios.post(url, qs.stringify(data)).then(resp => { return Promise.resolve(resp.data) })
}
