//buffer基本操作
//实例化buffer对象：

let buf = new Buffer(5); //不推荐使用
console.log(buf);

let buf1 = Buffer.alloc(5);// 推荐使用
console.log(buf1);

let buf2 = Buffer.from('hello');
// let buf2 = Buffer.from(5);//报错，这里from中只可以填写字符串，不可以填写数值
console.log(buf2);

let buf3 = Buffer.from([0x62,0x63,0x64,0x65,0x66,0x67]);
console.log(buf3);//62,63,64,65,66,67
console.log(buf3.toString());//bcdefg
