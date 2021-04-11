/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = n.toString();
  let str1 = '';
  let str2 = '';
  let str3 = '';
  if (str.length === 3) {
    str1 = str[0] / 1 + str[1] / 1 + str[2] / 1;
    if (str1 < 10) { return str1; }
    str2 = str1.toString();
    str3 = str2[0] / 1 + str2[1] / 1;
    if (str3 < 10) { return str3; }
  } else if (str.length === 2) {
    str1 = str[0] / 1 + str[1] / 1;
    if (str1 < 10) { return str1; }
    str2 = str1.toString();
    str3 = str2[0] / 1 + str2[1] / 1;
    if (str3 < 10) { return str3; }
  }
  return null;
}

module.exports = getSumOfDigits;
