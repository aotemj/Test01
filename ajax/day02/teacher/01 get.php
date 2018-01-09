<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 接收前端的请求，如果前端给的数据是一个叫jack的人
	     就打印欢迎您，jack。 如果前端给的数据不是jack，就说
	     查无此人 -->

	<?php
		// 01 get.php?username=jack

		$name = $_GET["username"];
		if($name == 'jack'){
			echo '欢迎您,'.$name;
		}else{
			echo '系统中没有'.$name.'这个用户';
		}
	?>
</body>
</html>