/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * 首刷
 * @思路：通过回溯法可以将所有满足条件的穷举出来，但是这里不能有重复的所以还需要加上curIndex
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const backTracking = (arrs, sum, curIndex) => {
    let newArr = [...arrs];

    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(newArr);
      return;
    }

    for (let i = curIndex; i < candidates.length; i++) {
      backTracking([...newArr, candidates[i]], sum + candidates[i], i);
    }
  };
  backTracking([], 0, 0);
  return result;
};
console.log(combinationSum([2, 3, 6, 7], 7));
