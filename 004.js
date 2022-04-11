// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 1. 选定nums1作为最终返回的容器
  // 2. 首先判断一下总长度的奇偶
  var tlength = nums1.length + nums2.length
  // 定义初始的指针位置
  var i = 0
  var j = 0
  var result
  if (tlength % 2 !== 0) {
    // 奇数情况，找一个位置
    var midP = Math.ceil(tlength / 2)
    var count = midP
    while (true) {
      if (nums1[i] < nums2[j] || j === nums2.length) {
        if (count === 1) {
          result = nums1[i]
          break
        }
        i++
      } else if (nums1[i] >= nums2[j] || i === nums1.length) {
        if (count === 1) {
          result = nums2[j]
          break
        }
        j++
      }
      count--
    }
  } else {
    // 偶数情况，找两个位置
    var midP1 = tlength / 2
    //var midP2 = tlength / 2 + 1
    var count = midP1
    var result1, result2
    while (count >= 0) {
      if (nums1[i] < nums2[j] || j === nums2.length) {
        if (count === 1) {
          result1 = nums1[i]
        }
        if (count === 0) {
          result2 = nums1[i]
        }
        i++
      } else if (nums1[i] >= nums2[j] || i === nums1.length) {
        if (count === 1) {
          result1 = nums2[j]
        }
        if (count === 0) {
          result2 = nums2[j]
        }
        j++
      }
      count--
    }
    result = (result1 + result2) / 2
  }
  return parseFloat(result).toFixed(5)
};

/**
 * Test below
 * 下面是测试代码
 */
var arr1 = [0, 0], arr2 = [0, 0]
console.log(findMedianSortedArrays(arr1, arr2));
