//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error){
        return console.log('Unable to connect to the MongoDB database server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (error,result) =>{
    //     if(error){
    //         return console.log('Unable to insert Todo',error);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('Users').insertOne({
    //     name:'Mike Shutov',
    //     age: 28,
    //     location: 'Toronto'
    // }, (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert user', error);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    client.close();
});