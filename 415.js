// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let maxLength = num1.length > num2.length ? num1.length : num2.length

  let ret = []
  let carry = false
  for (let i = 1; i <= maxLength; i++) {
    let n1 = parseInt(num1.at(-i))
    let n2 = parseInt(num2.at(-i))
    n1 = n1 ? n1 : 0
    n2 = n2 ? n2 : 0

    let sum = carry ? n1 + n2 + 1 : n1 + n2
    if (sum > 9) res = sum - 10

    ret.unshift(sum > 9 ? sum - 10 : sum)
    carry = sum > 9 ? true : false
  }

  if (carry) ret.unshift(1)

  return ret.join('')
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(addStrings("584", "18"))
