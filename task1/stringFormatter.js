class StringFormatter {
  removeNonUniqueChars(string) {
    return Array.from(new Set(string.split(''))).join('')
  }
}
module.exports = StringFormatter