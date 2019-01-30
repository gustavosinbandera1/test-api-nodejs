var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var app = express();

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

mongoose.connect(config.database.db, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => {
    console.log('success connect to database');
    
    })
    .catch((err) => {
      console.log('Failed to connected to', db);
      
});


  app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
  
      next();
  });
//bodyparser midleware for parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/**require application routes */
var studentsRouter = require('../app/routes/students.server.router');
var cursosRouter = require('../app/routes/cursos.server.router');
var notasRouter = require('../app/routes/notas.server.router');
var apiRouter = require('../app/routes/api.server.router');
 

////Set our api routes for crud access
 app.use('/students',studentsRouter);
 app.use('/cursos', cursosRouter);
 app.use('/notas', notasRouter);
 app.use('/api', apiRouter);
//set port  I dont use this in project, I use config file 
//but I can get por using app.get('port) in server file
app.set('port',process.env.PORT || 3000);


app.use(express.static(path.join(__dirname, '../dist/testAPI')));
//catch all others routes and return any message
//in order to send dist file for web application
 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html') );
}) 


module.exports = app;
