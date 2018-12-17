// 同步
const doSync = (doSomething, time) => new Promise(resolve => {
    setTimeout(() => {
        console.log(doSomething + '用了' + time / 1e3 + '秒')
        resolve()
    }, time)
})
const doAsync = (doSomething, time, cb) =>{
    setTimeout(() => {
        console.log(doSomething + '用了' + time / 1e3 + '秒')
        cb && cb()
    }, time)
}
const a = {
    doSync,
    doAsync
}
const b = {
    doSync,
    doAsync
}
;(async () => {
    console.log('a来到门口')
    await a.doSync('b刷牙', 1e3)
    console.log('b一直等')
    await b.doSync('a洗澡', 2e3)
    console.log('b走了')


    // console.log('a来到门口')
    // a.doAsync('刷牙', 1e3, () => {
    //     console.log('a完事，通知b')
    //     b.doAsync('洗澡', 2e3)
    // })
})()
