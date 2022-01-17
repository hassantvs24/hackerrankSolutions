<?php

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion($s) {
    // Write your code here
     $amp = substr($s, -2);
     $hr = (int)substr($s, 0, 2);
     $same = substr($s, 0, 8);
     $next = substr($s, 2, 6);
     
     if($amp == 'AM'){
         if($hr == 12){
             return '00'.$next;
         }else{
              return $same;
         }
     }else{
        if($hr == 12){
            return $same;
        }else{
            $fin = $hr+12;
            
            return str_pad($fin, 2, "0", STR_PAD_LEFT).$next;
        }
     }
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$s = rtrim(fgets(STDIN), "\r\n");

$result = timeConversion($s);

fwrite($fptr, $result . "\n");

fclose($fptr);
