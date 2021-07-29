function romanToMorze(number) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const morzeNum = [
  '– – – – –',
  '• – – – –',
  '• • – – –',
  '• • • – –',
  '• • • • –',
  '• • • • •',
  '– • • • •',
  '– – • • •',
  '– – – • •', 
  '– – – – •'
]
if(!number) return '0'

let ret = ''
let i = numbers.length - 1
while(number > 0){
  if(number >= numbers[i]){
    ret += morzeNum[i]
    number -= numbers[i]
  }
  else{
    i--
  }
}
return ret
}
module.exports = romanToMorze