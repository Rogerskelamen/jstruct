// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) return num

  let sum = 0
  while (num !== 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return addDigits(sum)
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(addDigits(38))
