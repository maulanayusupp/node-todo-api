const {SHA256} = require("crypto-js");

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'secretCode');
console.log(token);

var decoded = jwt.verify(token, 'secretCode');
console.log(decoded);

var message = 'I am user number 3';

var hash = SHA256(message).toString();

/*console.log(`Message: I am user ${message}`);
console.log(`Hash: ${hash}`);*/

