/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  let nummin = str[0];
  for (let i = 0; i < str.length; i++) {
    if (nummin > str[i]) {
      nummin = str[i];
    }
  }

  const arr = str.split('');
  const index = arr.indexOf(nummin);
  delete arr[index];

  return arr.join('') / 1;
}

module.exports = deleteDigit;
