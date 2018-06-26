const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server')
	const db = client.db('TodoApp');

	/* fetch all users */
	db.collection('users').find().toArray().then((docs) => {
		console.log('Fetch all users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unabel to fetch users ', err);
	});

	/* fetch all todos */
	db.collection('todos').find().toArray().then((docs) => {
		console.log('Fetch all todos');
		// console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unabel to fetch todos ', err);
	});

	/* count todos */
	db.collection('todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unabel to fetch todos ', err);
	});

	var todoParams = {
		// _id: new ObjectID('string'),
		completed: true
	};
	/* query where */
	db.collection('todos').find(todoParams).toArray().then((docs) => {
		console.log('Query where');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unabel to fetch todos ', err);
	});

	client.close();
});