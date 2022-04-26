// 整数转罗马数字

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let one   = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  let two   = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  let three = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  let four  = ['', 'M', 'MM', 'MMM']
  return four[parseInt(num / 1000)] + three[parseInt(num % 1000 / 100)] + two[parseInt(num % 100 / 10)] + one[parseInt(num % 10)]
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(intToRoman(1994));
