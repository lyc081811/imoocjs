var express = require('express')
var router = express.Router()
var User = require('./../models/user')
require('../util')

// 登录
router.post('/login', function (req, res, next) {
  let param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (doc) {
        res.cookie('userId', doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        res.cookie('userName', doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        // req.session.user = doc
        res.json({
          status: '0',
          result: {
            userName: doc.userName
          }
        })
      }
    }
  })
})
// 登出
router.post('/logout', function (req, res, next) {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: '',
    result: ''
  })
})
// 获取用户信息
router.get('/checkLogin', function (req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName || ''
    })
  } else {
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    })
  }
})
// 购物车列表
router.get('/cart', function (req, res, next) {
  var userId = req.cookies.userId
  User.findOne({userId}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '',
          result: doc.cartList
        })
      }
    }
  })
})

// 购物车删除
router.post('/cart/del', function (req, res, next) {
  var userId = req.cookies.userId
  var productId = req.body.productId
  User.update({userId}, {$pull: {'cartList': {productId}}}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: 'success'
      })
    }
  })
})

// 修改购物车数据
router.post('/cart/edit', function (req, res, next) {
  var userId = req.cookies.userId
  var productId = req.body.productId
  var productNum = req.body.productNum
  var checked = req.body.checked
  User.update({userId, 'cartList.productId': productId}, {'cartList.$.productNum': productNum, 'cartList.$.checked': checked}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: 'success'
      })
    }
  })
})

// 编辑全选toogle
router.post('/cart/checkToogle', function (req, res, next) {
  var userId = req.cookies.userId
  var checkAllFlag = req.body.checkAllFlag ? '1' : '0'
  User.findOne({userId}, function (err, user) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (user) {
        user.cartList.forEach((item, i) => {
          user.cartList[i].checked = checkAllFlag
        })
        user.save(function (err1, doc) {
          if (err1) {
            res.json({
              status: '1',
              msg: err1.message,
              result: ''
            })
          } else {
            console.log('success')
            // res.json({
            //   status: '0',
            //   msg: '',
            //   result: 'success'
            // })
          }
        })
      }
      res.json({
        status: '0',
        msg: '',
        result: 'success'
      })
    }
  })
})

// 查询用户地址接口
router.get('/addressList', function (req, res, next) {
  var userId = req.cookies.userId
  User.findOne({userId}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: doc.addressList
      })
    }
  })
})

// 设置默认地址
router.post('/setDefault', function (req, res, next) {
  var userId = req.cookies.userId
  var addressId = req.body.addressId
  if (!addressId) {
    res.json({
      status: '1003',
      msg: 'addressId is Null',
      result: ''
    })
  }
  User.findOne({userId}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      var addressList = doc.addressList
      addressList.forEach(x => {
        if (x.addressId === addressId) {
          x.isDefault = true
        } else {
          x.isDefault = false
        }
      })
      doc.save(function (err1, doc1) {
        if (err) {
          res.json({
            status: '1',
            msg: err.message,
            result: ''
          })
        } else {
          // console.log('suc')
          res.json({
            status: '0',
            msg: '',
            result: ''
          })
        }
      })
    }
  })
})
// 删除地址
router.post('/delAddress', function (req, res, next) {
  var userId = req.cookies.userId
  var addressId = req.body.addressId
  User.update({userId}, {$pull: {'addressList': {addressId}}}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        message: '',
        result: 'suc'
      })
    }
  })
})

// 订单生成
router.post('/payment', function (req, res, next) {
  var userId = req.cookies.userId
  var orderTotal = req.body.orderTotal
  var addressId = req.body.addressId
  User.findOne({userId}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      let address = ''
      let goodsList = []
      // 获取当前用户的地址信息
      doc.addressList.forEach(x => {
        if (x.addressId === addressId) {
          address = x.addressId
        }
      })
      // 获取用户购买商品
      doc.cartList.filter(x => {
        if (x.checked === '1') {
          goodsList.push(x)
        }
      })
      const platform = '622'
      var r1 = Math.floor(Math.random() * 10)
      var r2 = Math.floor(Math.random() * 10)
      var sysDate = new Date().Format('yyMMddhhmmss')
      var createDate = new Date().Format('yy-mm-dd hh:mm')
      var orderId = platform + r1 + sysDate + r2
      var order = {
        orderId,
        orderTotal,
        addressInfo: address,
        goodsList,
        orderStatus: '1',
        createDate
      }
      doc.orderList.push(order)
      doc.save(function (err1, doc1) {
        if (err1) {
          res.json({
            status: '1',
            msg: err1.message,
            result: ''
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: {
              orderTotal: order.orderTotal,
              orderId: order.orderId
            }
          })
        }
      })
    }
  })
})

// 查询订单信息
router.get('/orderDetail', function (req, res, next) {
  var userId = req.cookies.userId
  var orderId = req.query.orderId
  console.log(userId, orderId)
  User.findOne({userId}, function (err, userInfo) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      var orderInfo = userInfo.orderList.filter(x => {
        return x.orderId === orderId
      })
      console.log(orderInfo)
      res.json({
        status: '0',
        msg: '',
        result: orderInfo
      })
    }
  })
})
module.exports = router
