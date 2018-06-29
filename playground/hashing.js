const {SHA256} = require("crypto-js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/* BCRYPT */
var password = 'asdfasdf';
bcrypt.hash(password, 10, function(err, hash) {
  // Store hash in your password DB.
  console.log(hash)
});
var hashedPassword = '$2a$10$BMaw3ICaBrEMCwf2DM79Y.1ZJg6SUumTY5p62DlHYmuKNxFEngtxe';
bcrypt.compare(password, hashedPassword, function(err, res) {
    console.log(res);
});

/* JWT */
var token = jwt.sign({ foo: 'bar' }, 'secretCode');
console.log("JWT Encode", token);
var decoded = jwt.verify(token, 'secretCode');
console.log("JWT Decode", decoded);


/* SHA */
var message = 'I am user number 3';
var hash = SHA256(message).toString();

/*console.log(`Message: I am user ${message}`);
console.log(`Hash: ${hash}`);*/

