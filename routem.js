//var express=require('express');
var routem=require('./route');

app.use('/route',routem);

var server= app.listen(
    {
        port :port,
        host : 'localhost',
        exclusive :true
    }
);
server.on('listenig',() => {
    console.log('listening',port)
});
server.on('error',() => {
    console.log('error',port)
});




