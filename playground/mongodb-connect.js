const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server')
	const db = client.db('TodoApp');

	db.collection('users').insertOne({
		first_name: 'Maulana Yusup',
		last_name: 'Abdullah',
		age: 23,
		location: 'Bandung'
	},(err, result) => {
		if (err) {
			console.log('Unable to insert user ', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.collection('todos').insertOne({
		name: 'Cooking',
		completed: 'Cooking'
	},(err, result) => {
		if (err) {
			console.log('Unable to insert todo ', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	client.close();
});