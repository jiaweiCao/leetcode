/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ").filter((i) => i);
  return arr.reverse().join(" ");
};
