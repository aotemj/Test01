(function (angular) {
	'use strict';
	var myApp = angular.module("myApp",[]);//创建主模块
	myApp.controller("myController",["$scope","$location","$window",function($scope,$location,$window){//创建控制器
		$scope.getItem=function(){
			$scope.todos=JSON.parse($window.localStorage.getItem("todos")||"[]");//加上空数组防止获取不到数据
		}
		/*封装提交本地数据方法*/
		$scope.setItem=function(){
			$window.localStorage.setItem("todos",JSON.stringify($scope.todos));
		}

		// 获取本地存储数据
		$scope.getItem();
		/*封装获取本地数据方法:*/

		/*功能2:添加数据*/
		$scope.add=function(){
			var obj = {
				content:$scope.newTodo,
				completed:false
			};
		$scope.todos.push(obj);//将新数据添加到事件数组
		$scope.setItem();//更新本地存储
		$scope.newTodo="";//清空输入框
		};

		/*功能3:点击删除数据*/
		$scope.remove=function(id){
			$scope.todos.splice(id,1);
			$scope.setItem();//更新本地存储
		}

		/*功能4:统计所有未完成项目*/
		$scope.getCount=function(){
			var count = 0;
			$scope.todos.forEach(function(v,i){
				if(v.completed==false){
					count++;
				};
			});
			return count;
		}

		/*功能5:点击清除所有已完成项目*/
		$scope.removeAll=function(){
			for(var i =$scope.todos.length-1;i>=0;i--){
				if($scope.todos[i].completed==true){
					$scope.todos.splice(i,1);
				}
			}
			$scope.setItem();//更新本地存储
		}

	/*功能6:监控hash值改变,切换显示不同项目状态*/
	$scope.loca = $location;
	$scope.$watch("loca.url()",function(now,old){
		console.log(now);
		switch(now){
			case "/" : $scope.isCompleted={} ;
			break;
			case "/completed" : $scope.isCompleted={completed:true};
			break;
			case "/active" : $scope.isCompleted={completed:false} ;
			break;
		};
	});

	/*功能7:双击编辑项目*/
	$scope.edit=function(id){
		$scope.editingId=id;
	};
	/*保存*/
	$scope.save = function(){
		$scope.editingId = -1;
		$scope.setItem();//更新本地存储
	}
	/*功能8:点击切换状态*/
	$scope.change=function(id){
			$scope.getItem();
			$scope.todos[id].completed=!$scope.todos[id].completed;
			$scope.setItem();
		}
	}]);
})(angular);
/*功能1:显示数据表格*/
/*功能2:添加数据*/
/*功能3:点击删除数据*/
/*功能4:统计所有未完成项目*/
/*功能5:点击清除所有已完成项目*/
/*功能6:监控hash值改变,切换显示不同项目状态*/
/*功能7:双击编辑项目*/
/*功能8:点击切换状态*/


