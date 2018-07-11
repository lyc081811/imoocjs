// 第一阶段

// const http = require('http')
// const server = http.createServer((req,res) => {
//     res.writeHead(200)
//     res.end('hello imooc')
// })
// server.listen(1011, () => {
//     console.log('server start on port 1011')
// })


// 第二阶段
const Woa = require('./application')
const app = new Woa()
app.use((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    })
    res.end('你好，慕课网')
})
app.listen(1012, () => {
    console.log('server start on port 1012')
})


