'use strict'
var express = require('express');
var apiRouter = express.Router();
var api = require('../controllers/api.server.controller');

//students Routes
  //apiRouter.get('/', api.list)
    //           .post('/', api.create);

 apiRouter.get('/notas/:idEstudiante', api.readStudent);
 apiRouter.get('/promedio_curso/:idCurso',api.readCurso);
               //.put('/:notaId', api.update)
               //.delete('/:notaId', api.delete);    

apiRouter.param('idEstudiante', api.notaByID);  
apiRouter.param('idCurso', api.promedioCursoById);
  module.exports = apiRouter;