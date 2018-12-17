const mongoose = require('mongoose');
const glob = require('glob');
const {resolve} = require('path')
const db = 'mongodb://127.0.0.1:27017/douban'
mongoose.Promise = global.Promise

exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.initAdmin = async () => {
    const User = mongoose.model('User')
    let user = await User.findOne({
        username: 'Scott'
    })
    if (!user) {
        const user = new User({
        username: 'lyc',
        email: 'koa2',
        password: '1'
    })
    user.save()
  }
}

exports.connect = () => {
    let maxConnects = 0
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true)
        }
        mongoose.connect(db,  {useNewUrlParser:true}, err => {
            if (!err) {
                console.log('connected success OK!')
                resolve()
            } else {
                throw new Error('数据库有问题！')
            }
        })
        // mongoose.connection.on('disconnected', () => {
        //     if (maxConnects++ < 5) {
        //         mongoose.connect(db)
        //     } else {
        //         throw new Error('数据库有问题！')
        //     }
        // })
        // mongoose.connection.on('error', err => {
        //    console.log(err)
        // })
        // mongoose.connection.once('open', () => {
        //     // model 可以操作一个集合
        //     // var Dog = mongoose.model('Dog',{
        //     //     name: String
        //     // })
        //     // const dog = new Dog({name: '阿尔法'})
        //     // dog.save().then(() => {
        //     //     console.log('快去看一下吧')
        //     // })

        //     resolve()
        //     console.log('connected success')
        // })
    })    
}
