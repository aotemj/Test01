function ajax(obj) {
    var defaults = {
        data: '',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: '',
        url: '',
        success.function() {}
    }
    for (var k in obj) {
        defaults[k] = obj[k];
    }
    var cbName = 'jQuery'+('1.11.1'+Math.random()).replace(/\D/g,'')+'_'+(new Date()).getTime();
    if(defaults.jsonpCallback){
    	defaults.jsonpCallback=cbName;
    }
    window[cbName] =function(data){
    	defaults.success(data);
    }

    var param ='';
    for(var k in defaults.data){
    	param+=k+'='+defaults.data[k]+'&';
    }
    if(param){
    	param=param.substring(0,param.length-1);
    }
	
	var script = document.createElement('script');
	script.src = defaults.url+'?'+defaults.jsonp+'='+cbName+'&'+param;
	document.body.append(script);


}