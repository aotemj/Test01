<?php
		$uname = $_GET["username"];
		$pwd = $_GET["password"];

		

		if($uname == 'jack'){
			if($pwd == '123'){
				echo "登陆成功";
			}else{
				echo "密码错误";
			}
		}else{
			echo "用户名不正确";
		}

	?>