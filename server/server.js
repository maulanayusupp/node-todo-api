const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var PORT = process.env.PORT || 8000;

var app = express();

app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`Started on port ${PORT}`);
});

/* users*/
app.get('/users', (req, res) => {
	User.find().then((users) => {
		res.send({
			users,
			code: 0
		});
	}, (err) => {
		res.status(400).send(err);
	});
});
app.post('/users', (req, res) => {
	var newUser = new User({
		email: req.body.email,
		first_name: req.body.first_name,
		last_name: req.body.last_name
	})
	newUser.save().then((doc) => {
		console.log('Saved user', doc);
	}, (err) => {
		console.log('Unable to save user', err);
	})
});

/* todos */
app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({
			todos,
			code: 0
		});
	}, (err) => {
		res.status(400).send(err);
	});
});

app.post('/todos', (req, res) => {
	var newTodo = new Todo({
		text: req.body.text
	})
	newTodo.save().then((doc) => {
		console.log('Saved todo', doc);
		res.send(doc);
	}, (err) => {
		res.status(400).send('Unable to save todo', err);
	})
});

// Get /todos/1231
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	// is valid
	if (!ObjectID.isValid(id)) {
		res.status(404).send('ID is not valid', id);
	}

	// findById
	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send('Id not found');
		}
		res.send(todo);
	}).catch((e) => {
		res.status(400).send('Unable to get todo', e);
	});
});

module.exports = {app};