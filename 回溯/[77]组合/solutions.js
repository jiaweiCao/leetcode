/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const result= []

    const backTracking = (arr, cur) =>{
        if (arr.length === k) {
            result.push(arr)
            return
        }

        for (let i = cur; i <=n; i++) {
            if (i <= cur) {
                continue
            }
            backTracking([...arr, i], i)
        }
    }

    backTracking([], 0)

    return result
};