/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = [];
  let num = 0;
  arr.push(n[0]);
  arr.push(n[1]);
  arr.push(n[3]);
  arr.push(n[4]);
  arr.push(n[6]);
  arr.push(n[7]);
  arr.push(n[9]);
  arr.push(n[10]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A' || arr[i] === 'B' || arr[i] === 'C' || arr[i] === 'D' || arr[i] === 'E' || arr[i] === 'F' || arr[i] === '0' || arr[i] === '1' || arr[i] === '2' || arr[i] === '3' || arr[i] === '4' || arr[i] === '5' || arr[i] === '6' || arr[i] === '7' || arr[i] === '8' || arr[i] === '9') {
      num++;
    }
  }
  if (num === 8) {
    return true;
  } return false;
}

module.exports = isMAC48Address;
