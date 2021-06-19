/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 首刷
 */
 var threeSum = function(nums) {
    const n = nums.length
    if(n < 3) {
        return []
    }
    let result = []
    nums.sort((a,b) => a - b)
   for(let i = 0; i < n; i++) {
       if (nums[i] > 0) {break}
       if (i > 0 && nums[i] === nums[i - 1]) {
           continue
       }

       let left = i + 1
       let right = n - 1
       while(left < right) {
                const sum = nums[i] + nums[left] + nums[right]
           if (sum === 0) {
               result.push([nums[i], nums[left], nums[right]])
               while(left < right && nums[left] === nums[left + 1]) {
                   left += 1
               }
               while(left < right && nums[right] === nums[right -1]) {
                   right -= 1
               }
               left += 1
               right -= 1
           } else if (sum > 0) {
               right -= 1
           } else {
               left += 1
           }
       }
   }
   return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))