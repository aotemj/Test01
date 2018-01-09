<?php
	
	$name="lisi";
	$age="21";
//	echo '{"name":"'.$name.'","age":'.$age.'}';
	$arr= Array("zhangsan","lisi","wangwu");
	$str=json_encode($arr);
	echo $str;
?>