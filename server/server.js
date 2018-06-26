var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppMongoose');

/* User */
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

var newUser = new User({
	email: 'maulanayusupp@gmail.com',
	first_name: 'Maulana Yusup',
	last_name: 'Abdullah'
})
newUser.save().then((doc) => {
	console.log('Saved user', doc);
}, (err) => {
	console.log('Unable to save user', err);
})

/* Todo */
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		trim: true,
		minglength: 1
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
})

var newTodo = new Todo({
	text: 'Cook dinner'
})
newTodo.save().then((doc) => {
	console.log('Saved todo', doc);
}, (err) => {
	console.log('Unable to save todo', err);
})