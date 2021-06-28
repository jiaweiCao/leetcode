/**
 * @param {string} s
 * @return {string[]}
 */

/**
 * 首刷，一次写对
 *
 */
const isIpItem = (str) => {
  if (!str) {
    return false;
  }
  if (str !== "0" && str.startsWith("0")) {
    return false;
  }
  if (!(0 <= Number(str) && Number(str) <= 255)) {
    return false;
  }
  return true;
};

var restoreIpAddresses = function (s) {
  const result = [];
  const path = [];
  const backTracking = (curIndex) => {
    if (path.length > 3) {
      return;
    }
    if (path.length === 3) {
      const rest = s.slice(curIndex, s.length);
      if (!isIpItem(rest)) {
        return;
      }
      result.push(Array.from([...path, rest]).join("."));
    }
    for (let i = curIndex; i < s.length; ++i) {
      let curStr = s.slice(curIndex, i + 1);
      if (!isIpItem(curStr)) {
        continue;
      }
      path.push(curStr);
      backTracking(i + 1);
      path.pop();
    }
  };
  backTracking(0);
  return result;
};
console.log(restoreIpAddresses("25525511135"));
