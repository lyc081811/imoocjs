const http = require('http')
let request = {
    get url() {
        return this.req.url
    }
}
let response = {
    get body() {
        return this._body
    },
    set body(val) {
        this._body = val
    } 
}
let context = {
    get url() {
        return this.request.url
    },
    get body () {
        return this.response.body
    },
    set body (val) {
        this.response.body = val
    }
}

class Application {
    constructor () {
        this.callback = () => {}
    }
    use (callback) {
        this.callback = callback
    }
    listen(...args) {
        const server = http.createServer((req, res) => {
            console.log(req.res)
            this.callback(req, res)
        })
        server.listen(...args)
    }
}
module.exports = Application
