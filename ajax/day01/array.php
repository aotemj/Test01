<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
<?php
	$arr=Array();
	$arr[0]=Array("name"=>"jack","age"=>"20","gender"=>"male");
	$arr[1]=Array("name"=>"rose","age"=>"22","gender"=>"female");
	$arr[2]=Array("name"=>"lucy","age"=>"18","gender"=>"female");
//	print_r($arr);
//	echo "<br>";
//	var_dump($arr);


	$arr1=Array("name"=>"zhangsan","age"=>22,"gender"=>"male");
//	//遍历数组
//	for($i=0;$i<count($arr1);$i++){//
//		echo $arr1[$i];
//		echo "<br>";		
//	}
	foreach($arr1 as $value){
		echo $value;
		echo "<br>";
	}
	$res=json_encode($arr1);
	echo $res;
?>	
</body>
</html>