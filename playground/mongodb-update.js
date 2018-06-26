const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server')
	const db = client.db('TodoApp');

	db.collection('users').findOneAndUpdate({
		_id: new ObjectID('5b31eadcc52d1324a84d3aff')
	}, {
		/* set new value */
		$set:{
			age: 20
		}
	}, {
		/* if fail */
		returnOrignal: false
	}).then((result) => {
		console.log(result);
	});

	client.close();
});