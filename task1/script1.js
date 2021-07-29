const StringFormatter = require('./stringformatter')
const removeDate = require('./removeDate')
const removeNumbers = require('./removeNumbers')
const removeString = require('./removeString')

const stringWithUniqueChars = new StringFormatter()
console.log(stringWithUniqueChars.removeNonUniqueChars('Hello, world!'))

const stringWithUniqueCharsNumbers = new removeNumbers()
console.log(stringWithUniqueCharsNumbers.removeNonUniqueChars('1232314325345Hello, world!1234565475876789'))

const stringWithUniqueCharsDate = new removeDate()
console.log(stringWithUniqueCharsDate.removeNonUniqueChars('10/10/1010Hello, world!10-10-1010 10.10.1010'))

const string = new removeString(/beautiful/gs)
console.log(string.removeNonUniqueChars('beautifulHello, world!beautiful'))