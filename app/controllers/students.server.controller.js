var mongoose = require('mongoose');
var Student = require('../models/student.server.model'),
 StudentModel = mongoose.model('Student'),
_ = require('lodash');



//  List of Students
 
exports.list = function(req, res) {
    console.log('entramos a listar usuarios ');
	 StudentModel.find({}, function(err,students){
         if(err) {
             res.json({
                 message: 'Error trying to List students'
             });
         }else {
             res.json(students);
         }
     })  
}        

 exports.create = function(req, res) {
     console.log('entramos a crear estudiante');
     console.log(req.body.name, req.body.age);
     
     
    var student = new StudentModel(req.body);
        student.name = req.body.name;
        student.age = req.body.age;

     student.save(function(err) {
        if(err) {
            return res.status(400).send({
                message: 'error to trying create student register',
                error:err
            })
        }else {
            res.json(student);
        }
    })    
}; 

//show the current student 
exports.read = function(req, res) {
    res.send(req.student);
};

//update student 
exports.update = function(req, res) {
    var student = req.student;
    console.log('vamos a imprimir el estudiante', student);
    

    student = _.extend(student, req.body);

    student.save(function(err) {
        if(err) {
            return res.status(400).send({
                message: 'error trying to update student'
            });
        } else {
            res.json(student);
        }
    }); 
}



 // Delete a Student
 
exports.delete = function(req, res) {
	var student = req.student ;

	student.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: 'error trying to delete student'
			});
		} else {
			res.json(student);
		}
	});
};


//middleware to find student by ID
exports.studentByID = function(req, res, next, id) {
    var query  = StudentModel.where({ _id: req.params.studentId }); // <-- Use the correct param name
    query.findOne(function (err, student) {
        if (err) return next(err);
        if(!student) return next('failed to load student');
        req.student = student;
        next();
    });
};