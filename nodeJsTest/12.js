/*
    初步实现服务器功能：
*/

//引入http模块
// const http = require('http');

// let server = http.createServer();

// server.on('request',(req,res)=>{
//     res.end('helloworld');
// });

// server.listen(3000);

// ----------------------------------
//简便写法：
// const http = require('http');
// http.createServer((req,res)=>{
//     res.end('ok');
// }).listen(3000);

//关于listten的参数:
//server.listen([port][, host][, backlog][, callback])

const http = require('http');
http.createServer((req,res)=>{
    res.end('hello world');
}).listen(3000,'192.168.42.227',()=>{
    console.log('running');
}); 
//此时只可以通过 192.168.42.227:3000 来访问服务器，使用localhost:3000时不可用 
