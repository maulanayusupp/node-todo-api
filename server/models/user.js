var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minglength: 1
	},
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		default: null,
	}
});

module.exports = {User};