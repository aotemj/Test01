1. ERPL环境：(read-eval-print-loop):读取代码-执行-打印结果-循环这个过程
2. 进入ERPL环境： cmd -> node 回车
3. 在ERPL中 _ 表示最后一个一次代码执行的结果
4. 退出ERPL环境： .exit (点号不可以省略)
5. cmd 中运行 js文件： node 文件名
6. 全局成员概述：
	 01. __filename: 包含文件名称的全路径
	 02. __dirname: 文件的路径，不包括文件名
	 03. setTimeout: 定时函数:

		 	 `setTimeout(function(){
		 	 		//要执行的代码
	 			});`
