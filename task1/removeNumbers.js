const StringFormatter = require('./stringformatter')

class RemoveNumbers extends StringFormatter {
  constructor() {
    super()
    this.delete = /\d/g, /-d/g, /.d/g
  }

  removeNonUniqueChars(string) {
    return string.replace(this.delete, '')
  }
}
module.exports = RemoveNumbers