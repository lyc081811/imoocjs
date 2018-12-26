const express = require('express')
const utils = require('utility')

const Router = express.Router()

const model = require('./model')
const User = model.getModel('user')
//测试api-用户列表
Router.get('/list', function(req, res) {
    User.find({}, function(err, doc){
        if (!err) {
            return res.json(doc)
        }
    })
})
//测试api-清空列表
Router.get('/del', function(req, res) {
    User.remove({}, function(err, doc){
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
    const {name, type, pwd} = req.body
    User.findOne({name}, function(err, doc) {
        if (doc) {
            return res.json({
                code: 1,
                msg: '用户名已重复'
            })
        }
        User.create({name, pwd: md5Pwd(pwd), type}, function(err, d) {
            if(!err) {
                return res.json({code: 0,msg: '注册成功'})
            } else {
                return res.json({code: 1, msg: '系统错误，请重试'})
            }
        })
    })
})

//登录
Router.post('/login', function(req, res) {
    const {name, pwd} = req.body
    User.findOne({name, pwd: md5Pwd(pwd)},{pwd: 0}, function(err, doc) {
        if (!doc) {
            return res.json({
                code: 1,
                msg: '用户名或密码错误'
            })
        }
        return res.json({
            code: 0,
            data: doc
        })
    })
})
// 加盐
function md5Pwd(pwd) {
    const salt = 'imooc080818!@#$%'
    return utils.md5(utils.md5(pwd + salt))
}
module.exports = Router


