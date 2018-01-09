<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
	$uname = $_GET['username'];
	if($uname =='jack'){
		echo '欢迎您:'.$uname;
	}else{
		echo '没有找到用户名:'.$uname;
	}
?>
</body>
</html>