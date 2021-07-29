const StringFormatter = require('./stringformatter')

class removeDate extends StringFormatter {
  constructor() {
    super()
    this.delete = [
      /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|10)\d\d/g,
      /(19|10)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)/g,
    ]
  }

  removeNonUniqueChars(string) {
    this.delete.forEach((reg) => {
      string = string.replace(reg, '')
    })
    return string
  }
}
module.exports = removeDate