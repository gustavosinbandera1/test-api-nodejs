var app = require('./config/app');//all server route configuration
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var http = require('http');
var server = http.createServer(app);





server.listen(config.server.port,  () => {
  console.log(`Api running on localhost:${config.server.port}`);
});

