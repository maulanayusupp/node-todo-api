const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
	{
		_id: userOneId,
		email: 'maulanayusupp@gmail.com',
		password: 'asdfasdf',
		first_name: 'Maulana',
		last_name: 'Yusup',
		tokens: [
			{
				access: 'auth',
				token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
			}
		]
	},
	{
		_id: userTwoId,
		email: 'adeneling@gmail.com',
		password: 'asdfasdf',
		first_name: 'Dodo',
		last_name: 'Maulana',
		tokens: [
			{
				access: 'auth',
				token: jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
			}
		]
	}
];

const todos = [
	{
		_id: new ObjectID(),
		text: 'First test todo'
	},{
		_id: new ObjectID(),
		text: 'Second test todo',
		completed: true,
		completedAt: 333
	}
];

const populateUsers = (done) => {
	User.remove({}).then(() => {
	var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
	}).then(() => done());
};

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

module.exports = {
	todos, populateTodos, users, populateUsers
}