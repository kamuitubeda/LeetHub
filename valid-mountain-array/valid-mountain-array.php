class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function validMountainArray($arr) {
        if(count($arr) < 3) return false;
        $up = true;
        $down = false;
        $upCount = 0;
            
        for($i=0; $i<count($arr)-1; $i++) {
            if($arr[$i] == $arr[$i+1]) return false;
            
            if($up) {
                if($arr[$i] > $arr[$i+1]) {
                    $up = false;
                    $down = true;
                } else {
                    $upCount++;
                }
            }
            
            if($down) {
                if($arr[$i] <= $arr[$i+1]) return false;
            }
        }
        
        return ($up) ? false : ($upCount > 0 ? true : false);
    }
}