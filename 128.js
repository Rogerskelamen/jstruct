// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;

  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  let length = 1;

  for (const num of set) {
    if (!set.has(num-1)) {
      let currentLength = 1;
      let n = num;
      while (set.has(n + 1)) {
        currentLength++;
        n++;
      }

      if (currentLength > length) {
        length = currentLength;
      }
    }
  }

  return length;
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
