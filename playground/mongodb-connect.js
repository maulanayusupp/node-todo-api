// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// object id
var objectId = new ObjectID();

// structuring
var user = {
	first_name: 'Maulana Yusup',
	last_name: 'Abdullah',
	email: 'maulanayusupp@gmail.com',
	age: 23,
	location: 'Bandung'
};
var {first_name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server')
	const db = client.db('TodoApp');

	db.collection('users').insertOne(user,(err, result) => {
		if (err) {
			console.log('Unable to insert user ', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	var todoParams = {
		name: 'Cooking',
		completed: true
	};
	db.collection('todos').insertOne(todoParams,(err, result) => {
		if (err) {
			console.log('Unable to insert todo ', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	client.close();
});