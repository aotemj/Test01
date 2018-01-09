<?php
	$a=$_GET['books'];
	
	$books=array();
	$books['三国演义']=array('name'=>"三国演义","author"=>"罗贯中",'desc'=>'一个战法纷争的年代');
	
//	$books['红楼梦']=['name':"红楼梦","author"=>"曹雪芹",'desc'=>'封建王超的缩影']; 
//	$books['水浒传']=['name':"水浒传","author"=>"罗贯中",'desc'=>'一个战法纷争的年代']; 
//	$books['三国演义']=['name'=>"三国演义","author"=>"罗贯中",'desc'=>'一个战法纷争的年代']; 
	$flag=0;
	foreach($books as $k=>$v){
		if($a==$k){
			$flag=json_encode($books[$a]);
		}
	}
	echo $flag;	
	
?>