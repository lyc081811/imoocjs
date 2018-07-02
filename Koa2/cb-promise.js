const fs = require('fs')
const util = require('util')
util.promisify(fs.readFile)('./package.json')
    .then(JSON.parse)
    .then(data => {
        console.log(data.name)
    })
    .catch(err => {
        console.log(err)
    })

