var mongoose = require('mongoose');
var Curso = require('../models/curso.server.model'),
 CursoModel = mongoose.model('Curso'),
_ = require('lodash');


/**
 * List of Cursos
 */
exports.list = (req, res) => {
    console.log('entramos a listar cursos ');
	 CursoModel.find({}, (err,cursos) => {
         if(err) {
             res.json({
                 message: 'Error trying to List cursos'
             });
         }else {
             res.json(cursos);
         }
     })  
}        

 exports.create = (req, res) => {
    var curso = new CursoModel(req.body);
        curso.name = req.body.name;

     curso.save((err) => {
        if(err) {
            return res.status(400).send({
                message: 'error to trying create curso register',
                error:err
            })
        }else {
            res.json(curso);
        }
    })    
}; 

/*show the current curso */
exports.read = (req, res) => {
    res.send(req.curso);
};

/**\update curso */
exports.update = (req, res) => {
    var curso = req.curso;
    console.log('vamos a imprimir el curso', curso);
    

    curso = _.extend(curso, req.body);

    curso.save((err) => {
        if(err) {
            return res.status(400).send({
                message: 'error trying to update curso'
            });
        } else {
            res.json(curso);
        }
    }); 
}


/**
 * Delete a curso
 */
exports.delete = (req, res) => {
	var curso = req.curso;

	curso.remove((err) => {
		if (err) {
			return res.status(400).send({
				message: 'error trying to delete curso'
			});
		} else {
			res.json(curso);
		}
	});
};


//middleware to find curso by ID
exports.cursoByID = (req, res, next, id) => {
    var query  = CursoModel.where({ _id: req.params.cursoId }); // <-- Use the correct param name
    query.findOne( (err, curso) => {
        if (err) return next(err);
        if(!curso) return next('failed to load curso');
        req.curso = curso;
        next();
    });
};