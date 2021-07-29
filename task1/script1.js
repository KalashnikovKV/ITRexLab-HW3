const StringFormatter = require('./stringformatter')
const RemoveDate = require('./removeDate')
const RemoveNumbers = require('./removeNumbers')
const RemoveString = require('./removeString')

const stringWithUniqueChars = new StringFormatter()
console.log(stringWithUniqueChars.removeNonUniqueChars('Hello, world!'))

const stringWithUniqueCharsNumbers = new RemoveNumbers()
console.log(stringWithUniqueCharsNumbers.removeNonUniqueChars('1232314325345Hello, world!1234565475876789'))

const stringWithUniqueCharsDate = new RemoveDate()
console.log(stringWithUniqueCharsDate.removeNonUniqueChars('10/10/1010Hello, world!10-10-1010 10.10.1010'))

const string = new RemoveString(/beautiful/gs)
console.log(string.removeNonUniqueChars('beautifulHello, world!beautiful'))