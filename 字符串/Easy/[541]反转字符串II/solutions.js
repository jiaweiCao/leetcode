/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let strArr = s.split("");
  const len = strArr.length;
  for (let i = 0; i < len; i += 2 * k) {
    let l = i;
    let r = i + k - 1 > len - 1 ? len - 1 : i + k - 1;
    console.log(l, r);
    while (l <= r) {
      const tem = strArr[r];
      strArr[r] = strArr[l];
      strArr[l] = tem;
      l++;
      r--;
    }
  }
  return strArr.join("");
};
console.log(reverseStr("ba", 1));
