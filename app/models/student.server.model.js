var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    

/**
 * Student Schema
 */
var StudentSchema = new Schema({
	name: {
		type: String,
		lowercase: true,
		trim: true,
		default: '',
		ref: '_id',
        required: 'please ingress your name'
	},
	age: {
		type: Number,
		trim: true,
        default: 0,
        required: 'please ingress your age'
		},
	studentCode: {
		type: Number,
		required: true,
	}

});



var model = mongoose.model('Student', StudentSchema);

module.exports = model; 