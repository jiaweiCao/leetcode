/**
 * @param {string} s
 * @return {string[][]}
 */

/**
 * @shoushua
 */

var partition = function (s) {
  const isPartition = (s) => {
    if (!s) {
      return false;
    }
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start += 1;
      end -= 1;
    }
    return true;
  };

  const result = [];

  const path = [];

  const backTracking = (curIndex) => {
    if (curIndex === s.length) {
      result.push(Array.from(path));
      return;
    }

    for (let i = curIndex; i < s.length; ++i) {
      const curStr = s.slice(curIndex, i + 1);
      console.log(curStr);

      if (!isPartition(curStr)) {
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

console.log(partition("aab"));
