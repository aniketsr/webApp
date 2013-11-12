var http = require('http');
var _return = 'Bing Bong';

  http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hiiiiiiiiiiiiii!!!!');
}).listen(8282,"localhost");