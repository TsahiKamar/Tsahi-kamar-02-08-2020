
const http = require('http');
const app = require('./app'); 


const port = process.env.port || 3000 ; //3000 is default
const server = http.createServer(app);

server.listen(port);

