/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sortarr.push(arr[i]);
    }
  }
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    return null;
  }
  sortarr.sort(compareNumeric);

  const finalarr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      finalarr.push(sortarr[j]);
      j++;
    } else { finalarr.push(-1); }
  }
  return finalarr;
}

module.exports = sortByHeight;
