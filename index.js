var http = require('http');
const port=3005;
const server =http.createServer(function(req,res) {
    if(req.url==='/route1') {
        res.write('Route1 Test successfull');
        res.end();
    }
    else if(req.url==='/route2') {
        res.write('Route2 Test successfull');
        res.end();
    }
    else if(req.url!='/route1' && req.url!='/router2') {
        res.writeHead(404);
        res.write('page not found');
        res.end();
    }
});
server.listen(
    {
        port :port,
        host : 'localhost',
        exclusive :true
    }
);
server.on('listening',() => {
    console.log("Listening server" ,port);
});
server.on('error',()=> {
    console.error('error',port);
});