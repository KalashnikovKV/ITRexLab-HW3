const StringFormatter = require('./stringformatter')

class RemoveString extends StringFormatter {
  constructor(reg) {
    super()
    this.delete = reg
  }

  removeNonUniqueChars(string) {
    return string.split(this.delete).join('')
  }
}
module.exports = RemoveString