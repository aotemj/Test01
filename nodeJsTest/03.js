// 类与继承

//构造函数的写法：

// function Person (name,age){
// 	this.name = name;
// 	this.age = age;
// }
// Person.prototype.sayHi = function(){
// 	console.log("hi,my name is "+this.name+',I am '+this.age+' years old');
// }

// var a = new Person('xiaohong',19);
// a.sayHi();

// var b = new Person('xiaoming',22);
//b.sayHi();

//es6 中类的定义：使用关键字 class
class Person {
	//静态方法：
	static sayYes(){
		console.log('yes');
	}

	//构造函数
	constructor(name,age){
		this.name = name;
		this.age = age ;
	}
	//方法
	sayHi(){
		console.log('my name is '+this.name+', I am '+this.age+' years old');
	}
}

//实例化对象：
// let a = new Person('xiaoming',19);
// a.sayHi();
// a.sayYes();//报错， 实例对象不可以访问通过类名定义的静态方法

// Person.sayYes();// yes 通过类调用静态方法

//类的继承： 通过extends 关键字
class Student extends Person{
	constructor(name,age,score){
		super(name,age);//使用super关键字用来调用父类
		this.score = score;
	}
	sayScore(){
		console.log('My score is '+this.score);
	}
}

//实例化对象：
var s1 = new Student('xiaolan',25,98);
s1.sayHi();
s1.sayScore();



