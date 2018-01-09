### buffer（字节数组）基本操作
	1.构造方法（类）
	2.静态方法
	3.实例方法

- 实例化：
	+ Buffer.from(string,'utf8'); 其中'utf8'为默认的编码格式，
	+ Buffer.alloc(number);
````js
	let buf = new Buffer(5);//不推荐使用

	let buf1 = Buffer.alloc(5);//推荐使用

	let buf2 = Buffer.from('hello');//这里的from中不可以填写Number类型数据

	let buf3 = Buffer.from([0x62,0x63,0x64,0x65,0x66,0x67,0x68]);
````
- 静态方法:
	+ Buffer.isEncoding();
		作用： 验证是否支持某种编码格式
````js
		Buffer.isEncoding('utf8');//true
		Buffer.isEncoding('gbk');//false, 不支持gbk这种编码格式
````
	+ Buffer.isBuffer();
		作用： 验证传入的对象是否为Buffer的实例对象
````js
		let buf = Buffer.from('hello');
		let isBuf = Buffer.isBuffer(buf);//true
		let obj = {};
		let isBuf2 = Buffer.isBuffer(obj);//false,obj 不是Buffer的实例对象

````
	+ Buffer.byteLength();
		作用：返回被检测buffer实例对象的字节长度
````js
	let buf = Buffer.from('你好');
	console.log(Buffer.byteLength(buf));//6，默认编码utf8格式下一个汉字占一个字节

	let buf2 =Buffer.from('你好','ascii');
	console.log(Buffer.byteLength(buf2));//2,ascii编码格式下一个汉字占一个字节，但此时的buf2中的内容已经不是汉字了，所以这种方式不推荐使用
````
	+ Buffer.concat();
		作用： 拼接多个buffer实例对象
````js
		let buf1 = Buffer.from('hello');
		let buf2 = Buffer.from('world');
		let buf3 = Buffer.concat([buf1,buf2]);
		console.log(buf3.toString());//'helloworld'
````

