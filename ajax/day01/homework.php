<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
<?php
//	1.请安装好wamp，之后的课程我们需要一直使用它
//
//2.请创建一个php文件，在该文件中声明一个变量name，并打印"name = 变量name"的信息。
//
	$name="zhangsan";
	echo "name=".$name;

//3.请创建一个php文件，在该文件中定义一个数组，数组中包含5个数字，最后打印这个数组。
	$arr=Array(11,22,33,44,55);
	print_r($arr);
//4.请创建一个php文件，在该文件中定义一个数组，数组中包含信息如下：
//{
//	"name":"jack",
//	"age":"20",
//	"sex":"male",
//	hobbys:["football","girl","game"]	
//}
//
//最后打印该数组。
		$arr1=Array("name"=>"jack","age"=>"20","sex"=>"male","hobbys");
		$arr1["hobbys"]=Array("football","girl","game");
		print_r ($arr1);
		
		
		
		

	
?>	
</body>
</html>