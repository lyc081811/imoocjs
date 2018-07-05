const koa = require('koa')
const app = new koa()
app.use(async (ctx, next) => {
    ctx.body = 1
})
app.listen(3000)