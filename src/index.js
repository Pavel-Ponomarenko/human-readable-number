module.exports = function toReadable (number) {
    const ones = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
  
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
  
    if(number < 20){
        return ones[number];
    } else if (number >= 20 && number < 100) {
        if(number % 10 === 0) {
            const num = number / 10
            return tens[num];
        } else {
            const ten = Math.floor(number/10);
            const one = number % 10
            return tens[ten] + ' ' + ones[one];
        }
    } else if (number >= 100) {
        if(number % 100 === 0) {
            const num = number / 100
            return ones[num] + ' ' + 'hundred';
        } else if(number % 100 < 10 ){
            const hun = Math.floor(number/100)
            const num = number % 100
            return ones[hun] + ' ' + 'hundred' + ' ' + ones[num]
        } else if (number % 100 >=10 && number % 100 <= 19) {
            const hun = Math.floor(number / 100)
            const num = number % 100
            return ones[hun] + ' ' + 'hundred' + ' ' + ones[num];
        } else {
            if(number % 10 === 0) {
                const hun = Math.floor(number/100)
                const ten = (number - hun*100)/10
                return ones[hun] + ' ' + 'hundred' + ' ' + tens[ten];
            } else {
                const hun = Math.floor(number/100)
                const ten = Math.floor((number - hun*100)/10)
                const one = number % 100 - ten*10
                return ones[hun] + ' ' + 'hundred' + ' ' + tens[ten] + ' ' + ones[one];
            }
        }
    }
  }