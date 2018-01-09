(function(angular){
	var in_theatersApp =angular.module("in_theatersApp",["serviceApp","ngRoute"]);
	in_theatersApp.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/:movieType/:page?",{
			templateUrl:'in_theaters/in_theaters.html',
			controller:'in_theatersController',
		});
	}]);
	in_theatersApp.controller("in_theatersController",["$scope","$http","$routeParams","$route","myService",function($scope,$http,$routeParams,$route,myService){
			console.log($routeParams);

		// 使用自己封装的jsonp方法
			$scope.page=($routeParams.page||1)-0;
			$scope.pageSize=5;
			var start=($scope.page-1)*$scope.pageSize;
		myService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType,{start:start,count:$scope.pageSize},function(data){
			console.log(data);
			$scope.total=data.total;
			/*总页数*/
			$scope.totalPage=Math.ceil(data.total/$scope.pageSize);
			$scope.data=data;
			$scope.$apply();
		});

		$scope.getCount=function(newPage){
			if(newPage==0||newPage>=$scope.totalPage){
				return;
			}
			$route.updateParams({page:newPage});
		};
	}]);
})(angular);
