// const puppeteer = require('puppeteer')
// const expect = require('chai').expect

// const config = require('../lib/config')
// const helpers = require('../lib/helpers')
// const utils = require('../lib/utils')

// describe('My first puppeteer test', () => {
//   let browser
//   let page

//   before(async () => {
//     browser = await puppeteer.launch({
//       headless: config.isHeadless,
//       slowMo: config.slowMo,
//       devtools: config.isDevtools,
//       timeout: config.launchTimeout
//     })
//     page = await browser.newPage()
//     await page.setDefaultTimeout(config.waitingTimeout)
//     await page.setViewport({
//       width: config.viewportWidth,
//       height: config.viewportHeight
//     })
//   })

//   after(async () => {
//     await browser.close()
//   })

//   it('My first test setup', async () => {
//     await helpers.loadUrl(page, config.exampleBaseUrl)
//     await helpers.shouldExist(page, '#nav-search')

//     const url = await page.url()
//     const title = await page.title()

//     expect(url).to.contain('dev')
//     expect(title).to.contain('Community')
//   })

//   it('browser reload', async () => {
//     await page.reload()
//     await helpers.shouldExist(page, '#page-content')

//     await helpers.waitForText(page, 'body', 'WRITE A POST')

//     const url = await page.url()
//     const title = await page.title()

//     expect(url).to.contain('dev')
//     expect(title).to.contain('Community')
//   })

//   it('click method', async () => {
//     await helpers.loadUrl(page, config.exampleBaseUrl)
//     await helpers.click(page, '#write-link')
//     await helpers.shouldExist(page, '.registration-rainbow')

//   })

//   it('submit searchbox', async () => {
//     await helpers.loadUrl(page, config.exampleBaseUrl)
//     await helpers.typeText(page, utils.generateString(15), '#nav-search')
//     await helpers.pressKey(page, 'Enter')
//     await helpers.shouldExist(page, '#articles-list')
//   })
// })