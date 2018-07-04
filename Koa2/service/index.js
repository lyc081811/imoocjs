const koa = require('koa')
const app = new koa()

const mid1 = async (ctx, next) => {
    ctx.type = 'text/html, chartset=utf-8'
    await next()
}
const mid2 = async (ctx, next) => {
    ctx.body = 'fosung'
    await next()
    ctx.body = ctx.body + '--33333'
}
const mid3 = async (ctx, next) => {
    ctx.body = ctx.body + '--hello'
    await next()
}
function tail (i) {
    if(i > 3) return
    
}
app.use(mid1)
app.use(mid2)
app.use(mid3)
app.listen(2222)
