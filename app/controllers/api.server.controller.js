var mongoose = require('mongoose');
var Nota = require('../models/notas.server.model');
var NotaModel = mongoose.model('Nota');


/*show the current curso */
exports.readStudent = (req, res) => {
   res.json(req.notas);
};

exports.readCurso = (req, res) => {
    res.json(req.notasCurso);
}

exports.promedioCursoById = (req, res, next, id) => {
    var query = NotaModel.where({id_curso: req.params.idCurso});
    query.find((err, notas) => {
        if(err) return next(err); 
        if(!notas) return next('Failed to load notes');
        req.notasCurso = notas;
        next();
    });
}

//middleware to find student notes by ID
exports.notaByID = (req, res, next, id) => {
    console.log('notas de estudiantes');
    
    var query  = NotaModel.where({ id_estudiante: req.params.idEstudiante }); // <-- Use the correct param name
    query.find( (err, notas) => {
        if (err) return next(err);
        if(!notas) return next('failed to load notas');
        req.notas = notas;
        console.log('listo..............');
        
        next();
    }).populate('id_estudiante'/*, ['name']*/)
        .populate('id_curso');
};

