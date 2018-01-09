//buffer基本操作
//实例化buffer对象：

// let buf = new Buffer(5); //不推荐使用
// console.log(buf);

// let buf1 = Buffer.alloc(5);// 推荐使用
// console.log(buf1);

// let buf2 = Buffer.from('hello');
// // let buf2 = Buffer.from(5);//报错，这里from中只可以填写字符串，不可以填写数值
// console.log(buf2);

// let buf3 = Buffer.from([0x62,0x63,0x64,0x65,0x66,0x67]);
// console.log(buf3);//62,63,64,65,66,67
// console.log(buf3.toString());//bcdefg


// Buffer 静态方法
//1  Buffer.isEncoding(编码格式);//验证是否支持当前编码格式
// let buf4 = Buffer.isEncoding('utf8');
// console.log(buf4);//true

// let buf5 = Buffer.isEncoding('gbk');
// console.log(buf5);//false

// let buf6 = Buffer.isEncoding('base64');//true
// console.log(buf6);

//2.Buffer.isBuffer();//验证当前传入的实例对象是否为Buffer的实例
// let buf7 = Buffer.from("hello");
// let isBuf = Buffer.isBuffer(buf7);//true
// console.log(isBuf);

// let obj = {};
// let isBuf2 = Buffer.isBuffer(obj);//false
// console.log(isBuf2);

//3.Buffer.byteLength()
// let buf8 = Buffer.from('你好');
// console.log(Buffer.byteLength(buf8));//6,默认使用utf8格式，一个汉字占3个字节

// let buf9 = Buffer.from('你好','ascii');
// console.log(Buffer.byteLength(buf9));//2, 使用ascii方式的时候，一个汉字占1 个字节，但此时的汉字已被改变，不推荐这种方式
// console.log(buf9);
// console.log(buf9.toString());//乱码

//4. Buffer.concat();
	let buf10 = Buffer.from('hello');
	let buf11 = Buffer.from('world');
	let buf12 = Buffer.concat([buf10,buf11]);
	console.log(buf12);
	console.log(buf12.toString());
