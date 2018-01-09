### buffer（字节数组）基本操作
	1.构造方法（类）
	2.静态方法
	3.实例方法

####buffer对象实例化：
````js
	let buf = new Buffer(5);//不推荐使用

	let buf1 = Buffer.alloc(5);//推荐使用

	let buf2 = Buffer.from('hello');//这里的from中不可以填写Number类型数据

	let buf3 = Buffer.from([0x62,0x63,0x64,0x65,0x66,0x67,0x68]);


````

