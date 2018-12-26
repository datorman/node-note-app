const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require('./../server/models/user');

// .remove({})
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.deleteOne().then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id:'5c1b83bfb60d4c142faf31c3'}).then((result) => {

});

Todo.findByIdAndDelete('5c1b83bfb60d4c142faf31c3').then((result) => {
    console.log(result);
});