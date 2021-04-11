/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  const a3 = 3;
  const a2 = 2;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && str[i] === str[i + 2] && str[i] === str[i + 3]) {
      arr.push(4 + str[i]);
      i += a3;
    } else if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
      arr.push(3 + str[i]);
      i += a2;
    } else if (str[i] === str[i + 1]) {
      arr.push(2 + str[i]);
      i++;
    } else { arr.push(str[i]); }
  }
  const str2 = arr.join('');

  return str2;
}

module.exports = encodeLine;
