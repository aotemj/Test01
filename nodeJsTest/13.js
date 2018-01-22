/*
    处理请求路径的分发：
    1、req对象是Class:http.IncomingMessage的实例对象
    2、res对象是Class:http.ServerResponse的实例对象
*/ 
const http = require('http');

http.createServer((req,res)=>{
    if(req.url.startsWith('/index')){
        res.write('hello');

        res.write('helloworld');
        // res.write()方法可以写多次，多次写的代码拼接在一次响应给客户端
        
        res.end('index');
        // res.end()方法用于结束响应，只可以写一次，可以带参数也可以不带参数
    }else if(req.url.startsWith('/about')){
        res.end('about');
    }else{
        res.end('noContent');
    }
}).listen(3000);