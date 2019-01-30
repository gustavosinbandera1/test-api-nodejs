'use strict'
var express = require('express');
var notasRouter = express.Router();
var nota = require('../controllers/notas.server.controller');

//students Routes
  notasRouter.get('/', nota.list)
               .post('/', nota.create);

 notasRouter.get('/:notaId', nota.read)
               .put('/:notaId', nota.update)
               .delete('/:notaId', nota.delete);    

notasRouter.param('notaId', nota.notaByID); 

  module.exports = notasRouter;