/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const line = matrix.length;
  const arr = matrix.reduce((prev, item) => prev.concat(item), []);

  const arrlength = arr.length;
  const arr2 = [];
  const add = arrlength / line;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      const a = i + add;
      arr2.push(a);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    delete arr[arr2[i]];
  }
  const result = arr.reduce((sum, current) => sum + current, 0);

  return result;
}

module.exports = getMatrixElementsSum;
