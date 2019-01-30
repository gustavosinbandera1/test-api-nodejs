var mongoose = require('mongoose');
var Nota = require('../models/notas.server.model');
var NotaModel = mongoose.model('Nota'),
_ = require('lodash');



//  List of Notas
 
 exports.list = function(req, res) {
    console.log('entramos a las notas ');
	 NotaModel.find({}, function(err,notas){
         if(err) {
             res.json({
                 message: 'Error trying to List notas'
             });
         }else {
             res.json(notas);
         }
     })  
}        

/*
{
"id_estudiante": "5c50f771c004294d000246fb",
"id_curso": "5c50da8f38607e3550f127ad",
"nombre_evaluacion": "parcial1",
"calificacion": 3
}
*/
 exports.create = function(req, res) {
     var nota = new NotaModel(req.body);
     nota.save(function(err) {
        if(err) {
            return res.status(400).send({
                message: 'error to trying create nota register',
                error:err
            })
        }else {
            res.json(nota);
        }
    })    
}; 

//show the current nota 
exports.read = function(req, res) {
    res.send(req.nota);
};

//update nota 
exports.update = function(req, res) {
    var nota = req.nota;

    nota = _.extend(nota, req.body);

    nota.save(function(err) {
        if(err) {
            return res.status(400).send({
                message: 'error trying to update nota'
            });
        } else {
            res.json(nota);
        }
    });  
}



// Delete a Nota
 
exports.delete = function(req, res) {
	 var note = req.nota ;

	note.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: 'error trying to delete note'
			});
		} else {
			res.json(note);
		}
	}); 
};


//middleware to find nota by ID
exports.notaByID = function(req, res, next, id) {
    var query  = NotaModel.where({ _id: req.params.notaId }); // <-- Use the correct param name
    query.findOne(function (err, nota) {
        if (err) return next(err);
        if(!nota) return next('failed to load nota');
        req.nota = nota;
        next();
    }).populate('id_estudiante', ['name'])
      .populate('id_curso');
}; 