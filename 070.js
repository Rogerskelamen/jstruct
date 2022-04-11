// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  }
  var first = 1
  var second = 2
  for (var i = 3; i <= n; i++) {
    var third = first + second
    first = second
    second = third
  }
  return second
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(climbStairs(45));
