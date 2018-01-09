(function(angular){
	var serviceApp = angular.module("serviceApp",[]);
	serviceApp.service("myService",[function(){
			this.jsonp = function(src, arg, callback) {
			      var fnName = 'jsonp_' + (('' + Math.random()).substring(2));
			      window[fnName] = callback;//因为从后台返回的js代码那个函数的调用是全局的
			      var oScript = document.createElement('script');
			      var mySrc = src + '?callback=' + fnName;
			      for (var key in arg) {
			          mySrc += '&' + key + '=' + arg[key];
			      }
			      oScript.src = mySrc;
			      document.body.appendChild(oScript);
			  }
	}]);
})(angular);
