/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const gSort = g.sort((a, b) => a - b);
  const sSort = s.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sSort.length; ++i) {
    let gStart = result;
    while (gStart < gSort.length) {
      if (sSort[i] >= gSort[gStart]) {
        result += 1;
        break;
      }
      gStart += 1;
    }
  }
  return result;
};
