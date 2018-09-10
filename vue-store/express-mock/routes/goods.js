var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Goods = require('../models/goods')
var User = require('../models/user')
// 链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/imooc')
mongoose.connection.on('connected', function () {
  console.log('success')
})
mongoose.connection.on('error', function () {
  console.log('error')
})
mongoose.connection.on('disconnected', function () {
  console.log('disconnected')
})

// 查询商品列表数据
router.get('/list', function (req, res, next) {
  let params = {}
  let page = parseInt(req.param('page'))
  let pageSize = parseInt(req.param('pageSize'))
  let sort = req.param('sortFlag')
  let priceChecked = req.param('priceChecked')
  let priceGT = 0
  let priceLTE = 0
  if (priceChecked !== 'all') {
    switch (priceChecked) {
      case '0':
        priceGT = 0
        priceLTE = 100
        break
      case '1':
        priceGT = 100
        priceLTE = 500
        break
      case '2':
        priceGT = 500
        priceLTE = 1000
        break
      case '3':
        priceGT = 1000
        priceLTE = 5000
        break
    }
    params = {
      salePrice: {
        $gt: priceGT,
        $lte: priceLTE
      }
    }
  }
  let skip = (page - 1) * pageSize
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize)
  goodsModel.sort({
    'salePrice': sort
  })
  goodsModel.exec(function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})
// 加购物车
router.post('/addCart', (req, res, next) => {
  var userId = '100000077'
  var productId = req.body.productId
  User.findOne({userId}, function (err, userDoc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (userDoc) {
        let goodsItem = ''
        userDoc.cartList.forEach(x => {
          if (x.productId === productId) {
            goodsItem = x
            x.productNum++
          }
        })
        if (goodsItem) {
          userDoc.save(function (err2, doc2) {
            if (err2) {
              res.json({
                status: '1',
                msg: err2.message
              })
            } else {
              res.json({
                status: '0',
                msg: '',
                result: 'success'
              })
            }
          })
        } else {
          Goods.findOne({productId}, function (err1, doc) {
            if (err1) {
              res.json({
                status: '1',
                msg: err1.message
              })
            } else {
              if (doc) {
                var doc2 = JSON.parse(JSON.stringify(doc))
                doc2.productNum = '1'
                doc2.checked = '1'
                userDoc.cartList.push(doc2)
                userDoc.save(function (err2, doc2) {
                  if (err2) {
                    res.json({
                      status: '1',
                      msg: err2.message
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
            }
          })
        }
      }
    }
  })
})
module.exports = router
