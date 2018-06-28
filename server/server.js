var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`Started on port ${PORT}`);
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
})

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
})


module.exports = {app};