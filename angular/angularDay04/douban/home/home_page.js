var homeApp=angular.module("homeApp",["ngRoute"]);
homeApp.config(["$routeProvider",function($routeProvider){
$routeProvider.when("/home_page",{
	templateUrl:'home/home_page.html',
});
}]);
homeApp.controller("homeController",["$scope",function($scope){

}]);
