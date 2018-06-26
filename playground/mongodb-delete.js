const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server')
	const db = client.db('TodoApp');

	/* delegate many */
	/*db.collection('todos').deleteMany().then((result) => {
		console.log(result);
	});*/

	/* delegate one */
	/*db.collection('todos').deleteOne({text: 'wakwak'}).then((result) => {
		console.log(result);
	});*/

	/* find one and delete */
	db.collection('todos').findOneAndDelete({text: 'wokwow'}).then((result) => {
		console.log(result);
	});

	client.close();
});