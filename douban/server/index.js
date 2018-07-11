const koa = require('koa')
const app = new koa()
const views = require('koa-views')
const {resolve} = require('path')
app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))
app.use(async (ctx, next) => {
    ctx.type = 'text/html, chartset="utf-8"'
    await ctx.render('index', {
        you: 'hello',
        me: 'world'
    })
})
app.listen(3000)