//写文件操作
// 引入文件操作模块：
const fs = require('fs');
const path = require('path');

// console.log(__dirname);

let strpath = path.join(__dirname,'data.txt');

// 写入字符串
	// fs.writeFile(strpath,'hello',(err)=>{
	// 	// console.log(err);//如果打印null 则说明写文件成功
	// 	if(!err){
	// 		console.log('写入文件成功');
	// 	};
	// });

//写入buffer对象：
// let buf = Buffer.from('hello1');

// fs.writeFile(strpath,buf,(err)=>{
// 	// console.log(err);
// 	if(!err){
// 		console.log('写入文件成功');
// 	}
// });

//同步操作：

fs.writeFileSync(strpath,'sync writeFile');

