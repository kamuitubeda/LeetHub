class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isIsomorphic($s, $t) {
        $letterMap1 = [];
        $letterMap2 = [];
        
        for($i=0; $i<strlen($s); $i++) {
            $first = $s[$i];
            $second = $t[$i];
            
            if(!array_key_exists($first, $letterMap1)) {
                $letterMap1[$first] = $second;
            } else if($letterMap1[$first] != $second) {
                return false;
            }
            
            if(!array_key_exists($second, $letterMap2)) {
                $letterMap2[$second] = $first;
            } else if($letterMap2[$second] != $first) {
                return false;
            }
        }
        
        return true;
    }
}