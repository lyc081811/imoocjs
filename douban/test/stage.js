const {readFile} = require('fs');
const EventEmitter = require('events');
class EE extends EventEmitter {}

const yy = new EE()


yy.on('event', () => {
    console.log('出事了！')
})
setTimeout(() => {
    console.log('0ms到期后执行的定时器回调')
}, 0)

setTimeout(() => {
    console.log('100ms到期后执行的定时器回调')
}, 100)

setTimeout(() => {
    console.log('200ms到期后执行的定时器回调')
}, 200)

readFile('../package.json', 'utf-8', data => {
    console.log('package.json 完成')
})

readFile('../.gitignore', 'utf-8', data => {
    console.log('gitignore 完成')
})

setImmediate(() => {
    console.log('立即回调')
})

process.nextTick(() => {
    console.log('process.nextTick-01 的回调')
})

Promise.resolve().then(() => {
    yy.emit('event')

    process.nextTick(() => {
        console.log('process.nextTick-02 的回调')
    })

    console.log('promise 01完成')
}).then(() => {
    console.log('promise 02完成')
})