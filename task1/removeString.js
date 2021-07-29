const StringFormatter = require('./stringformatter')

class removeString extends StringFormatter {
  constructor(reg) {
    super()
    this.delete = reg
  }

  removeNonUniqueChars(string) {
    return string.split(this.delete).join('')
  }
}
module.exports = removeString