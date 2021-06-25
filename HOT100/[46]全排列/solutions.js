/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 首刷
 */
 var permute = function(nums) {
    const result= []

    const backTracking = (arr, expArr) => {
        if (arr.length === nums.length) {
            result.push(arr)
            return
        }
        for(let i =0; i < nums.length ; i++) {
            if (expArr.includes(i)) {
                continue
            }
            backTracking([...arr, nums[i]], [...expArr, i])
        }
    }
    backTracking([], [])
    return result
};