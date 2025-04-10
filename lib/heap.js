/**
 * 由数组构建大根堆
 * @param {number[]} arr
 * @return {number[]}
 */
var buildMaxHeap = function(arr) {
  let n = arr.length

  const heapify = (arr, n, i) => {
    let largest = i
    let left = i * 2 + 1
    let right = i * 2 + 2

    if (left < n && arr[left] > arr[largest])
      largest = left

    if (right < n && arr[right] > arr[largest])
      largest = right

    if (largest !== i) {
      // 需要交换
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapify(arr, n, largest)
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }

  return arr
}

/**
 * Test below
 * 下面是测试代码
 */
console.log(buildMaxHeap([53, 17, 78, 9, 45, 65, 87, 32]))
