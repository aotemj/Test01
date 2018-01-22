// //文件的流式操作（大文件操作）
// //fs.createReadStream(path[,options]);
// //fs.createWriteStream(path[,options]);

// const fs = require('fs');
// const path = require('path');

// let cpath = path.join(__dirname,'bigfile.zip');
// let dpath = path.join('c:\\users\\zhaoxinlei\\Desktop','bigfile.zip');


// let readStream = fs.createReadStream(cpath);
// let writeStream = fs.createWriteStream(dpath);

// //写入数据
// //num用来记录写入数据的次数：
// // let num =1;
// // readStream.on('data',(chunk)=>{
// // 	num++;
// // 	writeStream.write(chunk);
// // });

// // // 检测写入文件是否完成：
// // readStream.on('end',()=>{
// // 	console.log('写入文件完成');
// // 	console.log('共写入数据'+num+'次');
// // });

// //pipe(管道)方式写入：

// //方式1
// // readStream.pipe(writeStream);

// //方式2
// fs.createReadStream(cpath).pipe(fs.createWriteStream(dpath));


// 文件流式操作
//fs.createReadStream(path);
//fs.createWriteStream(path);

const fs = require('fs');
const path = require('path');

// 原始路径
let cpath = path.join(__dirname,'bigfile.zip');
// 目标路径
let dpath = path.join('c:\\users\\zhaoxinlei\\desktop','bigfile.zip');

//读文件流
let readStream = fs.createReadStream(cpath);

// 写文件流
let writeStream = fs.createWriteStream(dpath);

// 读文件
let num =0;//num 用于记录读文件的次数
// readStream.on('data',(chunk)=>{ //chunk 为文件的每一个块
// 	num++;
// 	writeStream.write(chunk);
// });

// // 检测读文件是否结束

// readStream.on('end',(err)=>{
// 	if(!err){
// 		console.log('读文件完成');
// 		console.log('读文件共执行了'+num+'次');
// 	}
// });

//pipe(方式)实现文件读写
//1
// readStream.pipe(writeStream);

//2
fs.createReadStream(path.join(__dirname,'bigfile.zip')).pipe(fs.createWriteStream(path.join('c:\\users\\zhaoxinlei\\desktop','bigfile.zip')));













