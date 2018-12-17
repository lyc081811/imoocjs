const cp = require('child_process')
const {resolve} = require('path')
const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')

;(async () => {
    const script = resolve(__dirname, './crawler/trailer-list')
    const child = cp.fork(script, [])
    let invoked = false
    child.on('error', err => {
        if (invoked) return
        invoked = true
        console.log(err)
    })
    child.on('exit', code => {
        if (invoked) return
        invoked = true
        let err = code === 0 ? null : new Error('退出： code' + code)
        console.log(err)
    })
    child.on('message', data => {
        let result = data.result
        result.length = 2;
        result.forEach(async (item,i) => {
            //item._id = i
            console.log(item)
            // let movie = await Movie.findOne({dbId: item.dbId})
            // console.log(item)
            // console.log('-------------')
            // console.log(movie)
            // if (!movie) {
                movie = new Movie(item, {createIndex: false})
                await movie.save()
                // new Movie(item).save()
                // Movie.create(item, function (err, doc) {
                //     if (err) console.log(err)
                //     else console.log(doc)
                // })
            // }
        })
    })
})()
