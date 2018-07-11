const koa = require('koa')
const Router = require('koa-router')
const app = new koa()
const router = new Router()

const logger = require('../src/koa-logger.js')

app.use(logger)
router.get('/', (ctx, next) => {
    ctx.body = '我是首页'
})
router.get('/2', (ctx, next) => {
    ctx.body = '我是猪八戒'
})
// const mid1 = async (ctx, next) => {
//     // ctx.type = 'text/html, chartset=utf-8'
//     await next()
// }
// const mid2 = async (ctx, next) => {
//     if (ctx.request.url == '/') {
//         ctx.body = 'fosung'
//     } else if(ctx.request.url == '/hanzi'){
//         ctx.body = '福生加薪'
//     } else {
//         ctx.body = '<h1>404</h1>'
//     }
//     await next()
//     ctx.body = ctx.body + '--33333'
// }
// const mid3 = async (ctx, next) => {
//     ctx.body = ctx.body + '--hello'
//     await next()
// }

// app.use(mid1)
// app.use(mid2)
// app.use(mid3)

app.use(router.routes())
app.listen(2222)
