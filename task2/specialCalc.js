const Calc = require('./calc')

class SpecialCalc extends Calc {
  constructor(converter) {
    super()
    this.converter = converter
  }

  sum(a, b) {
    const sum = super.sum(a, b)
    return this.converter(sum)
  }

  div(a, b) {
    if(a !== 0 && b !== 0){
      const div = super.div(a, b)
      return this.converter(div)
    }else {
      return 'операция с нулем невозможна'
    }

  }

  mul(a, b) {
    const mul = super.mul(a, b)
    return this.converter(mul)
  }

  sub(a, b) {
    const sub = super.sub(a, b)
    return this.converter(sub)
  }
}
module.exports = SpecialCalc