// // 文件操作案例（初始化目录结构）
// //需求： 创建项目模板（css文件夹，js文件夹，index.html文件）

// const path = require('path');
// const fs = require('fs');

// let dpath = path.join('c:\\users\\zhaoxinlei\\desktop');

// let fileContent = `
// 	<!DOCTYPE html>
// 	<html lang="en">
// 		<head>
// 			<meta charset="UTF-8" />
// 			<title>Document</title>
// 		</head>
// 		<body>
// 		<div>demo</div>
// 		</body>
// 	</html>
// `
// // 创建根目录
// // fs.mkdir(dpath,(err)=>{
// // 	if(!err){
// // 		console.log('创建根目录完成');
// // 	}
// // })

// 	//创建子结构（css文件夹、js文件夹、index.html文件）
// 	let initData={
// 		projectName:'demo',
// 		data:[
// 			{
// 				type:'dir',
// 				name:'css'
// 			},
// 			{
// 				type:'dir',
// 				name:'js'
// 			},
// 			{
// 				type:'file',
// 				name:'index.html'
// 			}
// 		]
// 	}

// 	fs.mkdir(path.join(dpath,initData.projectName),(err)=>{
// 		if(err) return;
// 		initData.data.forEach((item,index)=>{
// 			if(item.type=='dir'){
// 				fs.mkdir(path.join(dpath,initData.projectName,item.name),()=>{});
// 			}else if(item.type=="file"){
// 				fs.writeFile(path.join(dpath,initData.projectName,item.name),fileContent,()=>{});
// 			}
// 		});
// 	});

//文件操作实例

const fs = require('fs');
const path = require('path');

	// index.html 文件的内容
	let fileContent = `
		<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<title>Document</title>
				</head>
				<body></body>
			</html>
	`

	let dpath = 'c:\\users\\zhaoxinlei\\desktop';

	// 项目数据：
	let projectName = {
		parentDir:'demo',
		data:[
			{
				'type':'dir',
				'name':'css'
			},
			{
				'type':'dir',
				'name':'js'
			},
			{
				'type':'file',
				'name':'index.html'
			}
		]
	}

	fs.mkdir(path.join(dpath,projectName.parentDir),(err)=>{
		if(err)return;
		projectName.data.forEach((item,index)=>{
			// 文件夹
			if(item.type=='dir'){
				fs.mkdir(path.join(dpath,projectName.parentDir,item.name),(err)=>{
					if(err) return;
				});
			}else if(item.type=='file'){
				// 文件
				fs.writeFile(path.join(dpath,projectName.parentDir,item.name),fileContent,(err)=>{
					if(err) return;
				});
			}
		});
	});
