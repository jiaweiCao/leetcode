/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/**
 * 首刷
 */
 var combinationSum3 = function(k, n) {
    let result = []

    const backTracking = (arr, sum, cur) =>{

        if (arr.length === k && sum === n) {
            result.push(arr)
        }

        const maxLength = n - sum > 9 ? 9 :  n - sum

        for (let i = cur; i <= maxLength; ++i) {
            if (sum + i > n || arr.length > k ) {
                continue
            }
            backTracking([...arr, i], sum + i, i + 1)
        }
    }
    backTracking([], 0, 1)
    return result
};