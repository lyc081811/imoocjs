const koa = require('koa')
const app = new koa()
const logger = require('koa-logger')
const session = require('koa-session')
app.keys = ['hi,look']
app.use(logger())
app.use(session(app))
app.use(ctx => {
    if (ctx.path === '/favicon.ico') return
    let n = ctx.session.views || 0
    ctx.session.views = ++ n
    ctx.body = n
})
app.listen(2000)
