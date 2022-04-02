// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var arr = []

  // 首先将所有的位数拿出来
  for (var i = 0, rest = Math.abs(x); rest > 0; i++) {
    if (i === 32) return 0

    // 获取余数和商
    arr.push(rest % 10)
    rest = parseInt(rest / 10)
  }

  // 将arr中的数组反向输出
  var result = 0
  for (var i = 0; i < arr.length; i++) {
    result = result * 10 + arr[i]
  }

  if (x === 0 || result > 2147483647) {
    return 0
  } else if (x > 0) {
    return result
  } else if (x < 0) {
    return result * -1
  }
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(reverse(-3646));
