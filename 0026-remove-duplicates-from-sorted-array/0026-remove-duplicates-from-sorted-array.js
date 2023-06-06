/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = [];
    let duplicate = [];
    nums.forEach((n) => {
        if (!unique.includes(n)) {
            unique.push(n);
        } else {
            duplicate.push(n);
        }
    });
    
    const all = [...unique, ...duplicate];
    
    for(var i=0; i<all.length; i++) {
        nums[i] = all[i];
    }
    
    return unique.length;
};