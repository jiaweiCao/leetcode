/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    const tem = s[r];
    s[r] = s[l];
    s[l] = tem;
    l += 1;
    r -= 1;
  }
  return s;
};

console.log(reverseString(["a", "b", "c", "d"]));
