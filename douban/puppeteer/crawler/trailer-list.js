const url = 'https://movie.douban.com/tag/#/?sort=U&range=7,10&tags='
const puppeteer = require('puppeteer');

const sleep = time => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}
;(async () => {
    console.log('start')
    const browser = await puppeteer.launch({

    })
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: 'networkidle2'
    })
    await sleep(3e3)
    await page.waitForSelector('.more')
    for (let i = 0; i < 1; i++) {
        await sleep(3e3)
        await page.click('.more')
    }

    const result = await page.evaluate(() => {
        var $ = window.$;
        var items = $('.list-wp a')
        var links = []
        if (items.length > 0) {
            items.each((index, item) => {
                let it = $(item)
                let dbId = it.find('div').data('id')
                let title = it.find('.title').text()
                let rate = it.find('.rate').text()
                let poster = it.find('img').attr('src').replace('s_ratio_poster', 'l_ratio_poster')
                links.push({
                   dbId,title,rate,poster
                })
            })
        }
        return links
    })

    browser.close()
    process.send({result})
    process.exit(0)
})()
