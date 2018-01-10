//
// 	浏览器中也存在异步操作：

// - 定时任务

// - 事件处理

// - Ajax回调处理

// 	js的运行时单线程的 引入事件队列机制
// 	Node.js中的事件模型与浏览器中的事件模型类似， 单线程 + 事件队列
// 	Node.js中异步执行的任务：

// - 文件I/O

// - 网络I/O

// 	基于回调函数的编码风格
//文件操作（file system）
//1、文件信息获取
//2、

//引入文件操作模块：
const fs = require('fs');

//1.1、fs.stat(path,callback);
fs.stat('../nodeJsTest/02.js',(err,stat)=>{
	//第一个参数为错误信息：
	console.log(err);//如果有错误，输出错误信息,否则输出null
	/*
	{ Error: ENOENT: no such file or directory, stat 'D:\wamp\www\Test\nodeJsTest\10.js'
	  errno: -4058,
	  code: 'ENOENT',
	  syscall: 'stat',
	  path: 'D:\\wamp\\www\\Test\\nodeJsTest\\10.js' }
	 */
	if(err) return;

	console.log(stat);
	console.log(stat.atime);
	if(stat.isFile()){
		console.log('文件');
	}else if(stat.isDirectory()){
		console.log('目录');
	};
});
