const randomString = require('random-string')

module.exports = {
  generateString: length => randomString({ length }),
  generateEmail: () => `${randomString({ length: 10 }).toLowerCase()}@${randomString({ length: 8 }).toLowerCase()}.com`,
  generateNumbers: length => randomString({ length, letters: false })
}