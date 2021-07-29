class Calc {
  sum(a, b) {
    return a + b
  }

  div(a, b) {
    if(a !== 0 && b !== 0){
      return a / b
    }else {
      return 'операция с нулем невозможна'
    }
  }

  mul(a, b) {
    return a * b
  }

  sub(a, b) {
    return a - b
  }
}
module.exports = Calc