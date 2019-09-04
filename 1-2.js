var http = require('http');

var server = http.createServer();

var port = 3000;
server.listen(port,3000,function(){
    console.log("Server is started: %d", +port)
})