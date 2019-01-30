'use strict'
var express = require('express');
var cursosRouter = express.Router();
var curso = require('../controllers/cursos.server.controller');

//students Routes
 cursosRouter.get('/', curso.list)
            .post('/', curso.create);

 cursosRouter.get('/:cursoId', curso.read)
               .put('/:cursoId', curso.update)
               .delete('/:cursoId', curso.delete);    

cursosRouter.param('cursoId', curso.cursoByID); 

  module.exports = cursosRouter;