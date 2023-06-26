/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let jump = 0
    for(let i=0; i<nums.length; i++) {
        jump = Math.max(nums[i], jump)
        if(jump == 0 && i !== nums.length - 1) return false
        jump--
    }
    return true
};