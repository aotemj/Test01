<?php
	$name=$_GET['username'];
	$arr=Array("jack","rose","lucy");
	$flag=0;
	for($i=0;$i<count($arr);$i++){
		if($arr[$i]==$name){
			$flag=1;
		}
	}
	if($flag==0){
		echo "1";
	}else{
		echo "2";
	}
?>
	
	

