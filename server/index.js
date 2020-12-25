const http = require('http')

// event emitters
// streams
// clusters

const server = http.createServer();

server.on('request', (req, res)=> {
  res.write("Hello World\n");

  setTimeout(() => {
    res.write("still running....\n");
    res.end();
  }, 3000);

});

server.listen(8080);
