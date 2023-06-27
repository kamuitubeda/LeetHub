class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function checkIfExist($arr) {
        $doubled = [];
        $found = [];
        $count = 0;
        for($i=0; $i<count($arr); $i++) {
            $doubled[$i] = $arr[$i]*2;
        }
        
        foreach($doubled as $num) {
            if (in_array($num,$arr)) {
                $count++;
                $found[] = $num;
            } 
        }
        
        if($count == 1 && $found[0] === 0) {
            return false;
        } else if ($count > 0) {
            return true;
        }
        
        return false;
    }
}