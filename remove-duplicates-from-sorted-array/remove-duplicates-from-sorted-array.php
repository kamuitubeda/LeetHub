class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $out = [];
        $left = [];
        $count = 0;
        
        for($i=0; $i<count($nums); $i++) {
            if (in_array($nums[$i], $left)) {
                $out[] = $nums[$i];
            } else {
                $left[] = $nums[$i];
                $count++;
            }
        }
        
        $fix = array_merge($left, $out);
        for($i=0; $i<count($fix); $i++) {
            $nums[$i] = $fix[$i];
        }
        
        return $count;
    }
}