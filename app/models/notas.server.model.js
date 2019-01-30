var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    

/**
 * Student Schema
 */
var NotasSchema = new Schema({
	 id_estudiante: {
        type: Schema.ObjectId,
        ref: 'Student',
        required: true
     }, 
	id_curso: {
        type: Schema.ObjectId,
        ref: 'Curso',
        required: true
    },
     nombre_evaluacion: {
        type: String,
        default: '',
        trim: true,
        required: 'please Ingress evaluation name'
    },

    calificacion: {
        type: Number,
        default: 0,
        required: true
    } 
	
});



var model = mongoose.model('Nota', NotasSchema);

module.exports = model;