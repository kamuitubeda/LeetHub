class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function searchInsert($nums, $target) {
        $counter = 0;
        while($counter < count($nums)) {
            if ($target <= $nums[$counter] && $counter == 0) {
                return 0;
            } else if($target >= $nums[$counter]  && $target <= $nums[$counter+1]) {
                return $counter+1;
            } else if ($target >= $nums[$counter] && $counter == count($nums)-1) {
                return count($nums);
            }
            
            $counter ++;
        }
    }
}