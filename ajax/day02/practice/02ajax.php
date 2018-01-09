<?php
	$name = $_POST["username"];
	$arr = array('jack','rose','lucy');
	//这个变量用来标识$name是否和$arr数组中的元素一致
	//默认为0，代表默认$name不和$arr中的任何元素一致
	$flag = 0;

	for($i=0;$i<count($arr);$i++){
		if($arr[$i]==$name){
			$flag = 1;
		}
	}

	if($flag == 0){
		echo "1";//前端给的用户名不存在，可以注册
	}else if($flag == 1){
		echo "2";//前端给的用户名存在，不能注册
	}

?>