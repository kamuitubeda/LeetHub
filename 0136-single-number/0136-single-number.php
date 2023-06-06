class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums) {
        $result = 0;

        for($i =0; $i<count($nums); $i++) {
            $result = $result ^ $nums[$i];
        }
        
        return $result; 
    }
}