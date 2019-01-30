'use strict'
var express = require('express');
var studentsRouter = express.Router();
var student = require('../controllers/students.server.controller');

//students Routes
 studentsRouter.get('/', student.list)
               .post('/', student.create);

 studentsRouter.get('/:studentId', student.read)
               .put('/:studentId', student.update)
               .delete('/:studentId', student.delete);    

studentsRouter.param('studentId', student.studentByID);

  module.exports = studentsRouter;