/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var temp = []
    
    for (let i=0; i<nums.length; i++) {
        temp[i] = nums[i]*nums[i]
    }
    
    var result = temp.sort(function(a, b) {
      return a - b;
    });
    
    return result
};