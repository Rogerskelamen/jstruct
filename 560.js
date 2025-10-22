// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;
  let preMap = new Map();
  preMap.set(0, 1);

  pre = 0;
  for (const n of nums) {
    pre += n;
    if (preMap.has(pre - k))
      count += preMap.get(pre - k);
    if (!preMap.has(pre)) {
      preMap.set(pre, 1)
    }else {
      preMap.set(pre, preMap.get(pre) + 1);
    }
  }

  return count;
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(subarraySum([1,-1,0], 0));
