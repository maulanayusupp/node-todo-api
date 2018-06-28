const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* Todo.remove - all */
Todo.remove({}).then((result) => {
	console.log(result);
});

Todo.findOneAndRemove({_id: id}).then((result) => {
	console.log(result)
});

Todo.findByIdAndRemove(id).then((result) => {
	console.log(result)
});