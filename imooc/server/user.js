const express = require('express')
const Router = express.Router()

const model = require('./model')
const User = model.getModel('user')
//测试api
Router.get('/list', function(req, res) {
    User.find({}, function(err, doc){
        if (!err) {
            return res.json(doc)
        }
    })
})
// 获取用户信息
Router.get('/info', function(req, res) {
    return res.json({
        code: 0
    })
})
// 注册api

Router.post('/register', function(req, res){
    const {name, pwd, type} = req.body
    User.findOne({name}, function(err, doc) {
        if (doc) {
            return res.json({
                code: 1,
                msg: '用户名已重复'
            })
        }
        User.create({name, pwd, type}, function(err, d) {
            if(!err) {
                return res.json({code: 1,msg: '注册成功'})
            } else {
                return res.json({code: 1, msg: '系统错误，请重试'})
            }
        })
    })
})
module.exports = Router


