// 目录操作
//1.创建目录：
//fs.mkdir(path[,mode],callback)//异步方法
//fs.madirSync(path[,mode]);//同步方法

const fs = require('fs');
const path = require('path');

//创建目录（异步）：
// fs.mkdir(path.join(__dirname,'newDir'),(err)=>{
// 	if(!err){
// 		console.log('创建目录成功')
// 	}
// });

//创建目录（同步）
// fs.mkdirSync(path.join(__dirname,'newDir'));

//-----------------------------------
//读取目录（异步操作）：
//fs.readdir(path[,options],callback);
// fs.readdir(__dirname,(err,files)=>{
// 	// console.log(files);
// 	files.forEach((item,index)=>{
// 		fs.stat(path.join(__dirname,item),(err,stat)=>{
// 			if(stat.isFile()){
// 				console.log(item,'文件');
// 			}else if(stat.isDirectory()){
// 				console.log(item,'目录');
// 			}
// 		});
// 	});
// });

//读取目录（同步操作）
let files = fs.readdirSync(__dirname);
files.forEach((item,index)=>{
	fs.stat(path.join(__dirname,item),(err,stat)=>{
		if(stat.isFile()){
			console.log(item,'文件');
		}else if(stat.isDirectory()){
			console.log(item,'目录');
		};
	});
});
console.log(files);
