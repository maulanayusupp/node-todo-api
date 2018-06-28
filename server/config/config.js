const env = process.env.NODE_ENV || 'development';
console.log('env *****', env);

if (env === 'development') {
	process.env.PORT = 8000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppMongoose';
} else if (env === 'test') {
	process.env.PORT = 8000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppMongooseTest';
}