const mongoose = require('mongoose');
const validator = require('validator')l];

var User = mongoose.model('User', {
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		default: null,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minglength: 1,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	},
	password: {
		type: String,
		required: true,
		minglength: 6
	},
	tokens: [
		{
			access: {
				type: String
				required: true
			},
			token: {
				type: String
				required: true
			}
		}
	]
});

module.exports = {User};