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
 * 插入排序，和冒泡一样具有稳定性，但有序度越高执行时间越少
 * 比冒泡更优
 * @param {number[]} arr
 * @return {number}
 */
var insertSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    let item = arr[j]
    while (j > 0 && arr[j-1] > item) {
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = item
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
    // quit condition
    if (left >= right) return

    // 原地快排，不增加额外空间
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
 * 归并排序，主要用到分治的思想和二叉树后序遍历的技巧
 * 已经拿到两个部分的有序数组，怎么合并为一个大的有序数组
 * 和快排一样也是O(nlogn)的时间复杂度
 */
var mergeSort = function(arr) {
  const partition = (arr) => {
    console.log(arr)

    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length / 2)

    let left = partition(arr.slice(0, mid))
    let right = partition(arr.slice(mid, arr.length))

    let i = 0, j = 0
    let ret = []
    while (i < left.length || j < right.length) {
      if (i >= left.length) {
        ret.push(right[j++])
        continue
      }
      if (j >= right.length) {
        ret.push(left[i++])
        continue
      }
      ret.push(left[i] < right[j] ? left[i++] : right[j++])
    }

    return ret
  }

  return partition(arr)
}


/**
 * Test below
 * 下面是测试代码
 */
console.log(insertSort([5, 3, 1, 9, 10, 0, -1]))
