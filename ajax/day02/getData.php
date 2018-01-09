<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
<?php
	 $username=$_GET['username'];
	 $password=$_GET['password'];
	if($username=="jack"&&$password==123456){
		echo "欢迎你".$username;
	}else{
		echo "您的输入有误,请检查后重新输入";
	}
?>	
</body>
</html>