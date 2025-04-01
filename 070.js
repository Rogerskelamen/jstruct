// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 2) return 1

  let first = 1, second = 1, third = 2
  while (n-- > 2) {
    first = second
    second = third
    third = first + second
  }
  return third
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(climbStairs(45));
