(function (window) {
	// 'use strict';
		var vm = new Vue({
			el:".container",
			data:{
				/*功能1:显示数据*/
				todos:[
				{content:"事件1",completed:false},
				{content:"事件2",completed:true},
				{content:"事件3",completed:false}
				],
				newTodo:'',
				editingId:-1,
			},
			methods:{
				/*功能2:添加数据*/
				add(){
					var obj={
						content:this.newTodo,
						completed:false
					};
					this.todos.push(obj);
					this.newTodo="";
				},
				/*功能2.1:点击删除数据*/
				remove(index){
					this.todos.splice(index,1);
				},
				/*功能3:双击编辑项目*/
				edit(id){
					console.log("123");
					this.editingId=id;
				},
				/*3.1保存项目:*/
				save(){
					this.editingId=-1;
				},
				/*功能5:批量清除所有已完成项目*/
				removeAll(){
					for(var i =this.todos.length-1;i>=0;i--){
						if(this.todos[i].completed==true){
							this.todos.splice(i,1);
						}
					}
				},
				/*功能6:点击显示不同状态的数据*/

			},

			computed:{
				/*功能4:统计所有未完成项目的个数*/
				getCount(){
					return this.todos.filter(function(v,i){
						return v.completed==false;
					}).length;
				}
			}
		});

})(window);
/*功能1:显示数据*/
/*功能2:添加数据*/
/*功能2.1:点击删除数据*/
/*功能3:双击编辑项目*/
/*功能4:统计所有未完成项目的个数*/
/*功能5:批量清除所有已完成项目*/
/*功能6:点击显示不同状态的数据*/





