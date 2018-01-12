//读文件操作：
// 引入文件操作模块：

let fs = require('fs');

let path = __filename;

//方法1
// fs.readFile(path,(err,data)=>{
// 	if(err) return;
// 	console.log(data.toString());
// });

//方法2
// fs.readFile(path,'utf8',(err,data)=>{
// 	if(err) return;
// 	console.log(data);
// });

//方法3（同步）
// let res = fs.readFileSync(path);
// console.log(res.toString());

//方法4（同步）
let res = fs.readFileSync(path,'utf8');
console.log(res);
