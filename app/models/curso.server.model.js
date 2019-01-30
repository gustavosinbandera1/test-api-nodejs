var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    

/**
 * Student Schema
 */
var CursoSchema = new Schema({
	name: {
		type: String,
		trim: true,
        default: '',
        required: 'please ingress your name'
	},
	cusroCode: {
		type: Number,
		required: true
	}
});



var model = mongoose.model('Curso', CursoSchema);

module.exports = model; 