/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2];
    const sorted = merged.sort((a, b) => a - b)
    const length = sorted.length;
    let median = 0;
    
    if(length%2==0) {
        median = (sorted[(length/2)-1] + sorted[(length/2)])/2;
    } else {
        median = sorted[((length+1)/2)-1];
    }
    
    return median;
};