/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const letterMap = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  const result = [];
  backTracking = (combine, nextIndex) => {
    if (combine.length === digits.length) {
      result.push(combine);
      return;
    }

    const curDigit = digits[nextIndex];
    const curLetter = letterMap.get(curDigit);
    for (let i = 0; i < curLetter.length; i++) {
      backTracking(combine + curLetter[i], nextIndex + 1);
    }
  };
  backTracking("", 0);
  return result;
};
