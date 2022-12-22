// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
//
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let length = matrix.length

  // create a array to store every layer of matrix
  let layer = []
  const newMatrix = []
  for (let i = 0; i < length; i++) {
    for (let j = length - 1; j >= 0; j--) {
      layer.push(matrix[j][i])
    }
    newMatrix.push(layer)
    layer = []
  }

  for (let i = 0; i < length; i++) {
    matrix[i] = newMatrix[i]
  }
};
