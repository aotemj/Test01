### buffer（字节数组）基本操作
	1.构造方法（类）
	2.静态方法
	3.实例方法

- 实例化：
	+ Buffer.from(string,'utf8'); 其中'utf8'为默认的编码格式，
	+ Buffer.alloc(number);
````js
	let buf = new Buffer(5);//不推荐使用

	let buf1 = Buffer.alloc(5);//推荐使用

	let buf2 = Buffer.from('hello');//这里的from中不可以填写Number类型数据

	let buf3 = Buffer.from([0x62,0x63,0x64,0x65,0x66,0x67,0x68]);
````
- 静态方法:
	+ Buffer.isEncoding();
		作用： 验证是否支持某种编码格式
````js
		Buffer.isEncoding('utf8');//true
		Buffer.isEncoding('gbk');//false, 不支持gbk这种编码格式
````
	+ Buffer.isBuffer();
		作用： 验证传入的对象是否为Buffer的实例对象
````js
		let buf = Buffer.from('hello');
		let isBuf = Buffer.isBuffer(buf);//true
		let obj = {};
		let isBuf2 = Buffer.isBuffer(obj);//false,obj 不是Buffer的实例对象
````
	+ Buffer.byteLength();
		作用：返回被检测buffer实例对象的字节长度
````js
	let buf = Buffer.from('你好');
	console.log(Buffer.byteLength(buf));//6，默认编码utf8格式下一个汉字占一个字节

	let buf2 =Buffer.from('你好','ascii');
	console.log(Buffer.byteLength(buf2));//2,ascii编码格式下一个汉字占一个字节，但此时的buf2中的内容已经不是汉字了，所以这种方式不推荐使用
````
	+ Buffer.concat();
		作用： 拼接多个buffer实例对象
````js
		let buf1 = Buffer.from('hello');
		let buf2 = Buffer.from('world');
		let buf3 = Buffer.concat([buf1,buf2]);
		console.log(buf3.toString());//'helloworld'
````
- 实例方法：
 + write();
 	作用： 在buffer实例对象中写入内容
````js
	let buf = Buffer.alloc(5);
	buf.write('hello');
````

 + slice(start,end);
	作用： 将原始buffer从start坐标切割，切割到end坐标，不改变原始buffer对象，新对象需要保存
````js
	let buf = Buffer.from('hello');
	let buf1 = Buffer.slice(1,2);//'e'， 将buf 从第1位开始切割，切割到第2位，新切割的值保存在buf1中
	console.log(buf1);
````
+ toJSON();
	作用：将buffer实例对象转换成json形式的字符串，这个方法不需要显示的调用，当JSON.stringify方法调用的时候会自动调用toJSON方法

````js
	let buf = Buffer.from('hello');
	let bufJson = JSON.stringify(buf);
	console.log(bufJson);//
````
### 路径操作
	进行路径操作之前首先要引入path模块：
````js
	const path = require('path');
````
- path.filename
	作用： 获取文件的全路径
````js
	console.log(__filename);//全路径即绝对路径：'D:\wamp\www\Test\nodeJsTest\05.js'
````
- path.basename(目标路径);
	作用：获取目标路径的最后一部分（文件名）；
````js
	path.basename('foo/123/456/index.html');//'index.html'
````

- path.dirname(目标路径)：
	作用： 获取目标路径的文件路径（不包含文件名）
````js
	path.dirname('foo/123/456/index.html');//'foo/123/456'
````

- 获取当前文件的文件名
 '__dirname';
- path.extname(目标路径);
	作用： 获取目标路径的扩展名
````js
	console.log(path.extname('index.html'));//'.html'
	console.log(path.extname('foo/123/456/index.html'));//'.html'
````
- 路径的格式化：
 + path.format();
 	作用： 将对象转成字符串：（obj-->string）

````js
	const filename = __filename;
	let filenameObj = path.parse(filename);
	let filenameStr = path.format(filenameObj);
	console.log(filenameStr);//'D:\wamp\www\Test\nodeJsTest\05.js'
````
 + path.parse();
 作用： 将字符串转成对象： （string-->obj）
````js
const filename = __filename;
console.log(path.parse(__filename));
//得到的结果：
/*{ root: 'D:\\', //文件根目录
  dir: 'D:\\wamp\\www\\Test\\nodeJsTest',//文件全路径（不包括扩展名）
  base: '05.js',//文件名、扩展名
  ext: '.js',//扩展名
  name: '05' }//文件名
  */
````
- 拼接路径：
	+ path.join();
	作用： 将多个路径拼接为一个路径,这个方法会忽略单个路径中的'\'和'/','..'表示上层目录
````js
console.log(path.join('/foo','\add','yel','/abc','..'));//'\foo\add\yel'
console.log(path.join('..123','foo,/','abc','zzz'));//..123\foo,\abc\zzz
````
- 规范化路径：
+ path.normalize();
作用：将不符合规范的路径规范化,这个方法不够智能，不能将路径中不应该存在的符号去掉，使用时需要注意
````js
console.log(path.normalize('foo/,123/abgc\zz.index'));//foo\,123\abgczz.index
console.log(path.normalize('c:\\foo/,123/abgc\zz.index'));//c:\foo\,123\abgczz.index
````

- 两个特殊的属性：
	+ path.delimiter
		作用：表示路径分隔符： window 中是\  linux 中是/
	+ path.sep
		作用： 表示环境变量分隔符：windowh中是 ; linux 中使用 :

### 异步I/O(input/output)

- 文件操作
	文件操作之前要引入文件系统模块：
````js
	const fs = require('fs');
````

	+ 文件信息获取

	fs.stat(path,callback);

	path为传入的要获取的文件信息的路径,callback为这个path的回调函数

	callback中有两个参数： err,stat

	err为错误信息 如果传入的path有错误则返回错误信息，否则返回null

	stat为当前path的对象信息，stat所包含的常用方法有：

	stat.isFile();判断当前传入的path是否为一个文件

	stat.isDirectory();判断当前传入的path是否为一个文件夹

	stat.atime; 文件的访问时间

	stat.ctime; 文件的状态信息发生变化的时间（如文件权限）

	stat.mtime; 文件数据发生变化的时间

 	stat.birthtime; 文件创建的时间

````js
	fs.stat('../nodeJsTest/10.js',(err,stat)=>{
		//第一个参数为错误信息：
		console.log(err);
		//如果有错误，输出错误信息，否则输出null
		/*
		{ Error: ENOENT: no such file or directory, stat 'D:\wamp\www\Test\nodeJsTest\10.js'
		  errno: -4058,
		  code: 'ENOENT',
		  syscall: 'stat',
		  path: 'D:\\wamp\\www\\Test\\nodeJsTest\\10.js' }
		 */
		});
		if(err) return;// 如果有错误，直接返回，后续的操作没有意义
		// stat.isFile()用来判断path参数传入的是 否为一个文件
		// stat.isDirectory()用来判断path参数传入的是否为一个目录
		if(stat.isFile()){
			console.log('这是一个文件');
			}else if(stat.isDirectory()){
			console.log('这是一个目录');
		}

````
	+ 读文件操作：
		fs.readFile();
````js
	let fs = require('fs');
	let path = __filename;
	//方法1 :
	fs.readFile(path,(err,data)=>{
		if(err) return;
		console.log(data.toString());
	});

	//方法2 :
	fs.readFile(path,'utf8',(err,data)=>{
		if(err) return;
		console.log(data);
		});

	//方法3(同步):
	let data = fs.readFileSync(path);
	console.log(data.toString());

	//方法4（同步）；
	let data = fs.readFileSync(path,'utf8');
	console.log(data);
````

+ 写文件操作

	fs.writeFile(文件路径,写入的内容,回调函数);

````js
	const fs = require('fs');
	const path = require('path');

	let strpath = path.join(__dirname,'data.txt');

	//写入字符串
	fs.writeFile(strpath,'hello',(err)=>{
			console.log(err); //如果打印的是null，则说明写文件成功，否则说明写文件失败
			if(!err){
				console.log('写入文件成功');
			}
		});

	//写入buffer对象:
	let buf = Buffer.from('hello1');
	fs.writeFile(strpath,buf,(err)=>{
		if(!err){
			console.log('写入文件成功');
		}
		});
	//同步操作：
	fs.writeFileSync(strpath,'syncWriteFile');
````

- 网络操作


