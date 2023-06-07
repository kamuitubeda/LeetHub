class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $left = [];
        $out = [];
        
        $arr = $nums;
        $counter = 1;
        $idx = 0;
        
        for($i=0; $i<count($arr); $i++) {
            if($i == 0) {
                $left[$idx] = $arr[$i];
                $idx++;
            } else {
                if($arr[$i] == $left[$idx-1]) {
                    $counter++;

                    if($counter < 3) {
                        $left[$idx] = $arr[$i];
                        $idx++;
                    } else {
                        $out[] = $arr[$i];
                    }
                } else {
                    $counter = 1;
                    $left[$idx] = $arr[$i];
                    $idx++;
                }
            }
                
        }
        
        $new = array_merge($left, $out);
        
        for($i=0; $i<count($new); $i++) {
            $nums[$i] = $new[$i];
        }
        
        return count($left);
    }
}