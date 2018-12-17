const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')

router.get('/movies', async (ctx, next) => {
    const movies = await Movie.find({}).sort({
        'meta.createdAt': -1
    })
    ctx.body = {
        movies
    }
})