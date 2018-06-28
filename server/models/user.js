const _ = require('lodash');
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
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
				type: String,
				required: true
			},
			token: {
				type: String,
				required: true
			}
		}
	]
});

/* default send data */
UserSchema.methods.toJSON = function () {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'email', 'first_name', 'last_name']);
};

/* generate auth token */
UserSchema.methods.generateAuthToken = function () {
	console.log("Generate Auth Token");
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'node-todo-api').toString();

	// user.tokens.push({access, token});
	user.tokens = user.tokens.concat([{access, token}]);
	return user.save().then(() => {
		return token;
	});
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};