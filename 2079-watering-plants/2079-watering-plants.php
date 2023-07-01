class Solution {

    /**
     * @param Integer[] $plants
     * @param Integer $capacity
     * @return Integer
     */
    function wateringPlants($plants, $capacity) {
        $full = $capacity;
        $step = 0;
        for($i=0; $i<count($plants); $i++) {
            if($plants[$i] <= $capacity) {
                $step++;
                $capacity -= $plants[$i];
            } else {
                $capacity = $full;
                $step += 2*$i+1;
                $capacity -= $plants[$i];
            }
        }
        
        return $step;
    }
}