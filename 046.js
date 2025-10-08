// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) return [nums];

  const ret = [];
  const seq = [];

  const backtrack = (seq, nums) => {
    if (nums.length <= 0) {
      ret.push([...seq]);
      return;
    }
    for (const num of nums) {
      seq.push(num);
      backtrack(seq, nums.filter(item => item !== num));
      seq.pop();
    }
  }

  backtrack(seq, nums);

  return ret;
};

/**
 * Test below
 */
console.log(permute([1, 2, 3]));
