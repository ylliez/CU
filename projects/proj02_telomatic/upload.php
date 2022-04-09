<?php
$upload_dir = "upload/";
$img = $_POST['p5CanvasImage'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = $upload_dir . mktime() . ".png";
// $file = $upload_dir.$imgName.".png";
//save to file...
$success = file_put_contents($file, $data);
echo($file);
// echo($upload_dir . $imgName . ".png");
?>
