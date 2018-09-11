var express = require('express')
var router = express.Router()
var User = require('./../models/user')

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
  var checkAllFlag = req.cookies.checkAllFlag ? '1' : '0'
  User.findOne({userId}, function (err, user) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (user) {
        user.cartList.forEach(x => {
          x.checked = checkAllFlag
        })
        user.save(function (err1, doc) {
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
              result: 'success'
            })
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

module.exports = router
