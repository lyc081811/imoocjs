const mongoose = require('mongoose');
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const {resolve} = require('path')
const {connect, initSchemas, initAdmin} = require('../database')
// const router = require('../routes/index')
;(async () => {
    await connect()
    await initSchemas()
    require('../puppeteer/movie')
    // require('../puppeteer/api')
})()
app.use(views(resolve(__dirname, '../views'), {
    extension: 'pug'
}))
// app.use(router.routes()).use(router.allowedMethods())
app.use(async (ctx, next) => {
    await ctx.render('index', {})
})
app.listen(2001)
