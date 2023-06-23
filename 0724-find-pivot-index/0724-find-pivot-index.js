/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i=0; i<nums.length; i++) {
        if(i == 0) {
            var b = nums.slice(i+1,nums.length)
            var sum_b = b.reduce((sum, num) => sum + num, 0)
            if(sum_b == 0) return 0
        } else {
            var a = nums.slice(0,i)
            var b = nums.slice(i+1,nums.length)

            var sum_a = a.reduce((sum, num) => sum + num, 0)
            var sum_b = b.reduce((sum, num) => sum + num, 0)

            if(sum_a == sum_b) return i
        }
    }
    
    return -1
};