const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data = {
    id: 5
};



//jwt.sign
var token = jwt.sign(data,'123abc');
console.log(token);

//jwt.verify
var decoded = jwt.verify(token,'123abc');
console.log('decoded',decoded);

// var message = 'I am a user message';

// var hash = SHA256(message).toString();
// console.log(`Message: ${message} and hash: ${hash}`);

// // var data = {
// //     id: 4
// // };

// // var token = {
// //     data,
// //     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// // };

// // var resultHash = SHA256(JSON.stringify(token.data)+'somesecrett').toString();

// // if(resultHash === token.hash){
// //     console.log('Data was not changed');
// // } else{
// //     console.log('Data was changed, dont trust ANYONE!');
// // }