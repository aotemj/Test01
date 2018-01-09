
(function(angular){
	var app=angular.module("myApp",["ngRoute"]);
	app.config(["$routeProvider",function($routeProvider){
		$routeProvider.when('home_page',{
			template:'home_page'
		});
	}]);

})(angular)
