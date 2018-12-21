const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'

mongoose.connect(DB_URL, {useNewUrlParser:true}, function(err){
    if(!err) {
        console.log('success')
    }
})

const models = {
    user: {
        'name': {
            type: String,
            require: true
        },
        'pwd': {
            type: String,
            require: true,
        },
        'type': {
            type: Number,
            require: true
        },
        'avatar': { // 头像
            type: String
        },
        'desc': { // 职位简介
            type: String
        },
        'title': { // 职位名称
            type: String
        },
        'company': { // boss特有
            type: String
        },
        'money': { // boss特有
            type: String
        }
    },
    chat: {}
}

for(let i in models) {
    mongoose.model(i, new mongoose.Schema(models[i]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}



/*
// mongoose Schame
const userSchame = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
})
// 根据schame创建model
const User = mongoose.model('user', userSchame)
*/