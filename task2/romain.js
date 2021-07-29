function arabToRoman(number){
  const arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  const roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
	if(!number) return '0'

	let ret = ''
	let i = arab.length - 1
	while(number > 0){
		if(number >= arab[i]){
			ret += roman[i]
			number -= arab[i]
		}
		else{
			i--
		}
	}
	return ret
}
module.exports = arabToRoman