// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

// 如果使用暴力，那么就是从candidates中选取一个数（可以从最小的开始），然后每次都从candidates中抽取(但是抽取的值不能小于当前选取的数)，如果和超过就开始下一次的循环(需要注意的是，只有和超过才进行index的增长，否则还是从那个数开始，以免漏过组合)
// 这题感觉上可以用贪心的策略，从最大的数字开始找，
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 特殊情况，如果没有候选数，那么直接返回空数组
  if (candidates.length === 0) {
    return []
  }

  function dfs(begin, size, list, ans, target) {
    if (target < 0) {
      return
    }
    if (target === 0) {
      ans.push(list)
      return
    }
    for (let index = begin; index < len; index++) {
      dfs(index, size, list.concat(candidates[index]), ans, target - candidates[index])
    }
  }

  let result = []
  let len = candidates.length

  dfs(0, len, [], result, target)

  return result
};

/**
 * Test below
 * 下面是测试代码
 */
const test = combinationSum([2,3,6,7], 7)
console.log(test)
