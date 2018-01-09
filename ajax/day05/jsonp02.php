<?php
$f=$_GET['callback'];
$arr = array(1,2,3);
	echo $f.'('.json_encode($arr).')';
?>