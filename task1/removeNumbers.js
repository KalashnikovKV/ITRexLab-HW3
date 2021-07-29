const StringFormatter = require('./stringformatter')

class removeNumbers extends StringFormatter {
  constructor() {
    super()
    this.delete = /\d/g, /-d/g, /.d/g
  }

  removeNonUniqueChars(string) {
    return string.replace(this.delete, '')
  }
}
module.exports = removeNumbers