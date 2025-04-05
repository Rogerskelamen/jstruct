// 所有排序一律以升序排序

/**
 * 选择排序
 * @param {number[]} arr
 * @return {number}
 */
var selectSort = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let k = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[k] > arr[j]) k = j
    }
    let tmp = arr[i]
    arr[i] = arr[k]
    arr[k] = tmp
  }

  return arr
}


/**
 * 冒泡排序
 * 相较于选择排序，冒泡排序具有稳定性，在O(n^2)情况下优先考虑冒泡
 * @param {number[]} arr
 * @return {number}
 */
var bubbleSort = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }

  return arr
}


/**
 * 插入排序，和冒泡一样具有稳定性，但有序度(整体或局部)执行时间越少
 * 比冒泡更优
 * @param {number[]} arr
 * @return {number}
 */
var insertSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        let tmp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = tmp
      } else break
    }
  }

  return arr
}


/**
 * 快速排序，主要用到二叉树的前序遍历的思想
 * 先处理中间的值表示，然后递归地处理左边和右边数组
 * 已经跳脱了O(n^2)的时间复杂度，变为O(nlogn)
 * @param {number[]} arr
 * @return {number}
 */
var quickSort = function(arr) {
  const partition = (arr, left, right) => {
    if (left >= right) return

    let pivot = arr[right]
    let i = left - 1
    for (let j = left; j <= right; j++) {
      if (arr[j] <= pivot) {
        i++
        let tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }

    partition(arr, left, i-1)
    partition(arr, i+1, right)
  }

  partition(arr, 0, arr.length-1)

  return arr
}


/**
 * Test below
 * 下面是测试代码
 */
console.log(quickSort([5, 3, 1, 9, 10, 0, -1]))
