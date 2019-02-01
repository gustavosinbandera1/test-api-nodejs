'use strict'
var express = require('express');
var apiRouter = express.Router();
var apiController = require('../controllers/api.server.controller');


apiRouter.get('/notas/:idEstudiante', apiController.readStudent);
apiRouter.get('/promedio_curso/:idCurso',apiController.readCurso);
    

apiRouter.param('idEstudiante', apiController.notaByID);  
apiRouter.param('idCurso', apiController.promedioCursoById);
  
module.exports = apiRouter;