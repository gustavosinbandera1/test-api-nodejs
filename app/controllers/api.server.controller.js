var mongoose = require('mongoose');
/* var Nota = require('../models/notas.server.model'); */
var NotaModel = mongoose.model('Nota');



/*show the current curs */
exports.readStudent = (req, res) => {
   res.json(req.notas);
};

exports.readCurso = (req, res) => {
    res.json(
        {
           promedio: req.promedio
        })
}

exports.promedioCursoById = (req, res, next, id) => {
    var query = NotaModel.where({id_curso: req.params.idCurso});
    var promedio = 0;
    var suma = 0;
    query.find((err, notas) => {
        if(err) return next(err); 
        if(!notas) return next('Failed to load notes');
        req.notasCurso = notas;
        console.log('las notas del curso son', notas);
        //necesitamos sumarlas y promediarlas
        notas.forEach(function(valor, indice, array) {
            console.log('estos son los valores de foreach',valor, indice);
            suma = suma + valor.calificacion;
            index = indice;
        });
        promedio = suma/(index+1).toPrecision(3);
        console.log('el promedio ',promedio);
        req.promedio = promedio;
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

