### es6语法
#### let
1. let 用来声明变量，声明的变量不存在预解析；
2. 在同一个作用域内，let 声明的变量不允许重复
3. for循环中使用 let 声明的变量，只能在循环体内部使用，不可以在 for 循环外部使用

#### const:
1. const 用来声明常量，声明后的常量不可以重新赋值
2. 在使用 const 声明常量的时候必须进行初始化操作，不允许声明未初始化的常量

#### 块级作用域：
1. 在es6中，引入了块级作用域的概念，使用 {} 标记，在 {} 中的代码为一个新的作用域
2. 块内部定义的变量在块外部不可以访问
3. 块级作用域内，变量只能先声明再使用
4. 暂时性死区： 在块级作用域内，在声明变量之前，是不允许访问该变量的

#### 变量的解构赋值
##### 数组的解构赋值
1. eg: let [a,b,c] = [1,2,3]，其中赋值的结果为： a = 1, b = 2,c = 3
2. eg: let [a,b,c] = [,2,]，其中赋值的结果为： a= undefined,b = 2, c =undefined;
3. eg: let [a =1,b,c]= [,2,]，其中赋值的结果为：a = 1, b= 2, c =undefined;
4. 数组的解构赋值和参数的顺序有关。不可以调换变量名或变量值的顺序

##### 对象的解构赋值
1. eg: let {foo,bar} = {foo:'hello',bar:'hi'} ，赋值结果为： foo: 'hello',bar: 'hi',
2. 对象的解构赋值和变量名、变量值的顺序无关，let{foo,bar} = {foo:'hello',bar:'hi'} 与 let {bar,foo} ={foo:'hello',bar:'hi'} 所得到的结果相同
3. 对象属性别名：eg: let {foo:abc,bar} = {bar:'hi',foo:'nihao'};这里的 abc 为对象 foo 的别名, 在访问对象 foo 时，只可以使用 变量名 abc 不可以使用foo
4. 对象解构赋值设置默认值：eg: let {foo:abc='hello',bar} = {bar:'hi'},这里的foo在赋值的时候被赋予了默认值

	'hello',如果此时右侧的又重新给foo赋值的话，foo的值会变成新赋的值 ： eg: let {foo:abc='hello',bar} =

	foo:'newHello',bar:'hi'} 赋值结果为：foo:'newHello',bar:'hi'

##### 字符串的解构赋值
1. eg: let [a,b,c,d,e] = 'hello';赋值结果为：a='h',b='e',c='l',d='l',e='o';

2. eg: let [a,b,c,d] = 'hello'; 赋值解构为：a='h',b='e',c='l',d='l';

3. eg: let {length} ='hi';这行代码的意思是获取 'hi' 字符串的字符个数，注意:这里的 'length'是关键字，不可以换成其他变量名，否则获取不到右侧待检测字符串的个数

##### 字符串相关扩展
1. includes():

		语法：str.includes(subStr,index)

		作用： 从index 位置开始检测str中是否有subStr（有则返回true，否则返回false）

 		eg:'hello world'.includes('world',0);执行结果为true

2. startWidth():

		语法：str.startWidth(subStr);

		作用：检测字符串str 是否以 subStr 开头， 如果是返回true ，否则返回false

		 eg: 'hello world'.startWidth('hello');执行结果为：true

3. endWidth():

		语法：str.endWidth(subStr);

		作用：检测字符串str 是否已subStr 结尾， 如果是返回true ，否则返回false

		eg: 'hello world'.endWidth('world'); 执行结果为：true

4. 模板字符串：

	语法：使用 `` 号包裹要填充的模板，并在要插入数据的位置使用 ${} 将数据包裹 eg:
````js
		let obj = {
			name:"xiaohong",
			age:21,
			gender:'female'
		}
		let template = `
			<div>
				<span>${这里填写要添加的动态数据，入ajax请求结果}</span>
				<span>${obj.name}</span>
				<span>${obj.gender}</span>
			</div>
		`
````
使用时，直接调用template变量就可以了

##### 函数扩展：

	1. 参数默认值
	2. 参数解构赋值
	3. rest参数
	4. ...扩展运算符

##### 箭头函数：
	语法： (形参)=>{函数体}

	1、箭头函数中的this指向取决于函数的定义，而不是函数的调用
	2、箭头函数中不可以使用arguments 获取形参列表， 可以使用 ...params 方式获取
	3、箭头函数中只有一条语句时，{}可以省略，多条语句时，{}不可以省略

##### 类与继承
	语法： 通过 class 关键字来声明类，类中可以定义构造函数、静态方法（通过static关键字来声明）和实例方法，其中静态方法是不允许通过实例对象访问的，只能通过类访问
````js
	class Person{
		//静态方法：
		static sayYes(){
			console.log('yes');
		}
		//构造函数：
		constructor(name,age){
			this.name = name;
			this.age = age;
		}
		//实例方法：
		sayHi(){
			console.log('my name is '+this.name +', I am '+this.age+' years old');
		}
	}
	//实例化对象：
	let p1 = new Person('xiaoming',20);
	p1.sayHi();//'my name is xiaoming , I am 20 years old';
	p1.sayYes();//报错，实例对象不可以访问类的静态方法
````
	继承：类的继承通过 关键字 extends 来实现 ，子类可以继承父类的方法和属性
````js
	class Student extends Person{
		constructor(name,age,score){
			super(name,age);//通过super关键字来调用父类
			this.score = score;
		}
		//子类的实例方法：
		sayScore(){
			console.log('My score is '+this.score);
		}
	}
````

