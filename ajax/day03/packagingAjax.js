function ajax(obj){
	var defaults={
		type:'get',
		dataType:'text',
		data:'',
		url:'',
		success:function(){}		
	}
	for(var k in obj ){
		defaults[k]=obj[k];
	}

	var x = new XMLHttpRequest();

	var param='';
	for(var k in defaults.data){
			param += k+'='+defaults.data[k]+'&';
		}
	if(param){
		param=param.substring(0,param.length-1);
	}
	if(defaults.type=='get'){
		defaults.url+='?'+k+'='+defaults.data[k];
	}
	x.open(defaults.type,defaults.url);
	var data = null;
	if(defaults.type=='post'){
		data = param;
		x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}

	x.send(data);

	x.onreadystatechange=function(){
		if(x.readyState==4&&x.status==200){
			var data = x.responseText;
			// data = JSON.parse(data);
			defaults.success(data);
		}
	}
}


