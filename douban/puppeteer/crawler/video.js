const puppeteer = require('puppeteer')
const videoBase = `https://movie.douban.com/trailer/237731/`
const url = 'https://movie.douban.com/subject/'
const dbId = '26425063'
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
    await page.goto(url+ dbId, {
        waitUntil: 'networkidle2'
    })
    await sleep(1e3)
  
    const result = await page.evaluate(() => {
        var $ = window.$;
        var it = $('.related-pic-video')
        
        if(it&&it.length > 0) {
            var link = it.attr('href')
            var cover = it.css('backgroundImage').split('"')[1]
            return {link, cover}
        }
        return {}
    })

    let video
    if (result.link) {
        await page.goto(result.link, {
            waitUntil: 'networkidle2'
        })
        await sleep(2e3)
        video = await page.evaluate(() => {
            var $ = window.$
            var it = $('source')
            if (it) {
                return it.attr('src')
            } else {
                return ''
            }
        })
    }

    const data = {
        video,
        dbId,
        cover: result.cover
    }

    browser.close()
    process.send(data)
    process.exit(0)
})()
