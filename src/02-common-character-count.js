/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = [];

  for (let i = 0; i < s2.length; i++) {
    arr.push(s2[i]);
  }

  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    if (arr.indexOf(s1[i]) !== -1) {
      result++;
      const a = arr.indexOf(s1[i]);
      delete arr[a];
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
