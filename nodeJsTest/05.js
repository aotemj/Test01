// 路径操作
//引入path模块
const path = require('path');

//basename: 获取路径的最后一部分，文件名：
// console.log(path.basename('/foo/bar/az/sa/index.html'));

//1、获取文件的全路径：
//__filename
// console.log(__filename);

//2、获取当前文件的路径：
//__dirname
// console.log(__dirname);
//获取目标路径的文件路径（不包含文件名）：
// console.log(path.dirname('/foo/www/123/zxz/index.txt'));

//3、获取目标文件的扩展名:
// console.log(path.extname('index.html'));//'.html'

// console.log(path.extname('foo/www/123/546/index.html'));//'.html'

//4、 路径的格式化；
//path.parse();将string转换成obj
// const filename = __filename;
// console.log(path.parse(__filename));

//path.format();将obj转换成string
// let filenameObj = path.parse(__filename);
// console.log(path.format(filenameObj));

//5、拼接路径
//path.join(多个路径);忽略单个路径中的'\'和'/', ".."表示上层目录
// console.log(path.join('/foo','\add','yel','/abc','..'));//'\foo\add\yel'
// console.log(path.join('..123','foo,/','abc','zzz'));//..123\foo,\abc\zzz

//6、规范化路径：
//path.normalize
// console.log(path.normalize('foo/,123/abgc\zz.index'));//foo\,123\abgczz.index
// console.log(path.normalize('c:\\foo/,123/abgc\zz.index'));//c:\foo\,123\abgczz.index

//7、两个特殊的属性：
//7.1 path.delimiter
	console.log(path.delimiter);//;  表示路径分隔符：window中是\ Linux中是/
//7.2 path.sep
	console.log(path.sep);//\  表示环境变量分隔符（window中使用; linux中使用:）
