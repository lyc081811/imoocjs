import fs from 'fs'
fs.readFile('./package.json',(err, data) => {
    data = JSON.parse(data)
    console.log(data.name)
})