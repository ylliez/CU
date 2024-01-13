<?php
// generic check for GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET'){

  // // scan upload directory for files, sort in descending order & echo JSON encoded array back
  // $images = scandir("upload", 1);
  // echo(json_encode($images));

  // // scan upload directory for files, sort in descending order, cull unwanted incidental files by array substraction
  // $images = array_diff(scandir("upload", 1), array('..','.DS_Store'));
  // // create array for final images to echo
  // $imagesToSend = [];
  // // iterate through upload files, cull unwanted incidental files by selective array copying
  // for($i = 0; $i < count($images); $i++) {
  //   if(str_starts_with($images[$i],".") == false) {
  //     // array to array with desired values
  //     $imagesToSend[] = $images[$i];
  //   }
  // }

  // scan upload directory for files, sort in descending order, cull unwanted incidental files by array substraction
  $imagesToSend = array_diff(scandir("../upload", 1), array('.','..','.DS_Store'));
  // echo JSON encoded array back
  echo(json_encode($imagesToSend));
}

// helper function...
function str_starts_with ( $haystack, $needle ) {
  return strpos( $haystack , $needle ) === 0;
}

?>
