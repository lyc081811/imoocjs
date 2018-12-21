const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const userRouter = require( './user')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.listen(1002, function(){
    console.log('start!')
})
