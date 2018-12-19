const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5c125065a248e63590858d28';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// };

//Returns all matching
// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos: ',todos);
// });

// //Returns First match
// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo first: ',todo);
// });

// // Find by passing id
// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by id: ',todo);
// }).catch((e) => {
//     console.log('Error: ',e);
// });

var userid = '5c13948ec1fb0c11447e16cf';

User.findById(userid).then((user) =>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User',user);
}).catch((e)=>{
    console.log('Error Querying for User');
});