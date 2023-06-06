class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
        $out = [];
        $left = [];
        
        foreach($nums as $key => $value) {
            if($value == $val) {
                $out[] = $value;
            } else {
                $left[] = $value;
            }
        }
        
        $new = array_merge($left,$out);
        
        for($i=0; $i<count($new); $i++) {
            $nums[$i] = $new[$i];
        }
        
        return count($left);
    }
}