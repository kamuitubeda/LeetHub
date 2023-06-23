/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeros = []
    var number = []
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == 0) {
            zeros.push(nums[i])
        } else {
            number.push(nums[i])
        }
    }
    
    var all = [...number, ...zeros]
    for(let i=0; i<nums.length; i++) {
        nums[i] = all[i]
    }
};