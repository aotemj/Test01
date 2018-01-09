<?php
	header("Content-type:text/html;charset=utf-8");
	//header(“Content-Type:text/plain;charset=utf-8;”)
	$arr=Array();
	$arr["123"]=Array("name"=>"zs","chinese"=>"98","math"=>"16");
	$arr["124"]=Array("name"=>"ls","chinese"=>"18","math"=>"88");
	$arr["125"]=Array("name"=>"ww","chinese"=>"33","math"=>"99");
	$arr["126"]=Array("name"=>"zl","chinese"=>"110","math"=>"90");
	
	$code=$_POST['code'];
	if($code=="admin"){
		foreach($arr as $k=>$v){
			echo "<ul><li>学号: ".$k."</li><li>姓名: ".$v['name']."</li><li>语文: ".$v['chinese']."</li><li>数学: ".$v['math']."</li></ul>";
		}
	}else{
		$score=$arr[$code];
		echo "<ul><li>学号: ".$code."</li><li>姓名: ".$score['name']."</li><li>语文: ".$score['chinese']."</li><li>数学: ".$score['math']."</li></ul>";
	}
?>