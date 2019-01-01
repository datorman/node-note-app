const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    console.log(salt);
    bcrypt.hash(password, salt, (err, hash) =>{
        console.log(hash);
    })
});

var hashedPassword = '$2a$10$zOnv6d2kBkuH2mHtd35Hh.5amPhIhPvZ6OBNH2Sid5RwNmpTvf11C';


bcrypt.compare(password,hashedPassword, (err, res)=> {
    console.log(res);
});

// var data = {
//     id: 5
// };



// //jwt.sign
// var token = jwt.sign(data,'123abc');
// console.log(token);

// //jwt.verify
// var decoded = jwt.verify(token,'123abc');
// console.log('decoded',decoded);

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