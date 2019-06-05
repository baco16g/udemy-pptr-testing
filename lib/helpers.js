module.exports = {
  click: async (page, selector) => {
    try {
      await page.waitForSelector(selector)
      await page.click(selector)
    } catch {
      throw new Error(`Could not click on selector: ${selector}`)
    }
  },
  typeText: async (page, text, selector) => {
    try {
      await page.waitForSelector(selector)
      await page.type(selector, text)
    } catch {
      throw new Error(`Could not type text into selector: ${selector}`)
    }
  },
  loadUrl: async (page, url) => {
    try {
      await page.goto(url, { waitUntil: 'networkidle0' })
    } catch {
      throw new Error(`Could not load url: ${url}`)
    }
  },
  getText: async (page, selector) => {
    try {
      await page.waitForSelector(selector)
      return page.$eval(seletor, el => el.textContent)
    } catch {
      throw new Error(`Could get text from selector: ${selector}`)
    }
  },
  getCount: async (page, selector) => {
    try {
      await page.waitForSelector(selector)
      return page.$$eval(selector, els => els.length)
    } catch {
      throw new Error(`Could get count of selector: ${selector}`)
    }
  },
  waitForText: async (page, selector, text) => {
    try {
      await page.waitForSelector(selector)
      await page.waitForFunction((selector, text) =>
        document.querySelector(selector).innerText.includes(text),
        {},
        selector,
        text
      )
    } catch {
      throw new Error(`Text: ${text} not found for selector: ${selctor}`)
    }
  },
  pressKey: async (page, key) => {
    try {
      await page.keyboard.press(key)
    } catch {
      throw new Error(`Could press key: ${key} on the keyboard`)
    }
  },
  shouldExist: async (page, selector) => {
    try {
      await page.waitForSelector(selector, { visible: true })
    } catch {
      throw new Error(`Selector: ${selector} not exist`)
    }
  },
  shouldNotExist: async (page, selector) => {
    try {
      await page.waitFor(() => !document.querySelector(selector))
    } catch {
      throw new Error(`Selector: ${selector} is visble, but should not`)
    }
  }
}