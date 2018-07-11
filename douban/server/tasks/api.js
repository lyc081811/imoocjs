// http://api.douban.com/v2/user/1000001/v2/movie/subject/1764796
const rp = require('request-promise-native')
async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/user/1000001/v2/movie/subject/${item.doubanId}`
    const res = await rp(url)
    return res
}
;(async () => {
    let movies = [
        {
            douabnId: 3914513,
            title: '马戏之王',
            rate: 7.3,
            poster: ''
        }
    ]
    movies.map(async movice => {
        let movieDate = await fetchMovie(movice)
        console.log(movieDate)
    })
})()