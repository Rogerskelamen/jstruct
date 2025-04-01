// 泰波那契序列 Tn 定义如下：
// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) return 0
  if (n <= 2) return 1

  // 采用动规 -- 滑动窗口
  let x = 0, y = 1, z = 1, r = 2
  while (n-- > 3) {
    x = y
    y = z
    z = r
    r = x + y + z
  }

  return r
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(tribonacci(25))
