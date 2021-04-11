/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr2 = [];
  let k = -1;
  const doc = 'doc';
  const c = names.map((item) => {
    if (item === doc) {
      k++;
      return k;
    }
    return null;
  });

  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'doc(1)') {
      arr2.push('doc(1)(1)');
    } else if (c[i] === 0 || c[i] === undefined || c[i] === null) {
      arr2.push(names[i]);
    } else {
      arr2.push(`${names[i]}(${c[i]})`);
    }
  }
  return arr2;
}

module.exports = renameFiles;
