/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var out = []
    var left = []
    let count = 0
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == val) {
            out.push(nums[i])
        } else {
            left.push(nums[i])
            count++
        }
    }
    
    var all = [...left, ...out]
    
    for(let i=0; i<nums.length; i++) {
        nums[i] = all[i]
    }
    
    return count
};