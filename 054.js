// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ret = []
  let row = matrix.length
  let col = matrix[0].length

  let left = 0, top = 0, right = col - 1, bottom = row - 1

  while (true) {
    for (let i = left; i <= right; i++) {
      ret.push(matrix[top][i])
    }
    if (++top > bottom) break
    for (let j = top; j <= bottom; j++) {
      ret.push(matrix[j][right])
    }
    if (--right < left) break
    for (let k = right; k >= left; k--) {
      ret.push(matrix[bottom][k])
    }
    if (--bottom < top) break
    for (let l = bottom; l >= top; l--) {
      ret.push(matrix[l][left])
    }
    if (++left > right) break
  }

  return ret
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
