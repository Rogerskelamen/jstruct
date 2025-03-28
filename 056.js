// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 1) return intervals

  // sort first
  intervals.sort((a, b) => a[0] - b[0])

  let ret = []
  let min = intervals[0][0]
  let max = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    if (max >= intervals[i][0]) {
      if (max < intervals[i][1]) {
        max = intervals[i][1]
      }
    }else {
      ret.push([min, max])
      min = intervals[i][0]
      max = intervals[i][1]
    }

    if (i === intervals.length - 1) {
      ret.push([min, max])
    }
  }

  return ret
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
