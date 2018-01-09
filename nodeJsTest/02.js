// 拼接字符串传统做法
// let obj = {
// 	name:'xioaming',
// 	age:19,
// 	gender:'male'
// }
// let tag = '<div><span>'+obj.name+'</span><span>'+obj.age+'</span><span>'+obj.gender+'</span></div>'
// console.log(tag);
//-------------------------------

// 模板字符串写法：
// let obj = {
// 	name:'xiaohong',
// 	age:20,
// 	gender:'female'
// }

// let template = `
// <div>
// 	<span>${obj.name}</span>
// 	<span>${obj.age}</span>
// 	<span>${obj.gender}</span>
// </div>
// `
// console.log(template);

//函数的扩展：
//1、函数的默认参数
//2、函数参数的解构赋值
//3、rest参数
//4、...扩展运算符：
//
//1、函数的默认参数：
  //传统做法
 	// function foo (a){
 	// 	let p = a||'xiaoming';
 	// 	console.log(p);
 	// }
 	// foo();//'xiaoming'
 	// foo('xiaohong');//'xiaohong'
 	//------------------------------------
 	// function foo(a='xiaoming'){
 	// 	let p = a;
 	// 	console.log(p);
 	// }
 	// foo();//'xiaoming'
 	// foo('xiaohong');//'xiaohong'

// 2、函数参数的解构赋值：
		// 传统赋值方法：
		// function foo(a=1,b=2){
		// 	console.log(a,b);
		// }
		// foo();//1,2
		// foo(3,5,);//3,5
		//------------------------------
		// 参数的解构赋值：
		function foo({a=1,b=2}={}){
			console.log(a,b);
		}
		foo();//1,2

	// 3、 rest参数
	// function foo (a,b,...params){
	// 	console.log(params);
	// }
	// foo(1,2,3,4,5);//[3,4,5] ...+变量名，会将除了变量名之前的多有参数放入一个名为变量名的数组中

	//4、... 扩展运算符
  // function foo(a,b,c,d,e){
  // 	console.log(a+b+c+d+e);
  // }
  // foo(1,2,3,4,5);//15
	// let arr = [1,2,3,4,5,6];
	// 传统做法：
	// foo.apply(null,arr);//上下文模式改变this指向，实现函数的借调
	//es6做法：
	// foo(...arr);//...表示将arr数组解构赋值为foo的每一个参数
	//
