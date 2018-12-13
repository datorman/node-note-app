//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error){
        return console.log('Unable to connect to the MongoDB database server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5c12424db60d4c142fae9b7a"
    // }).toArray().then((documents)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents,undefined,2));
    // }, (error)=>{
    //     console.log('Unable to fetch todos',error)
    // });
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos');
    //     console.log(count);
    // }, (error)=>{
    //     console.log('Unable to fetch todos',error)
    // });
    db.collection('Users').find({"name":"Mand Shutov"}).toArray().then((documents)=>{
        console.log('Users');
        console.log(JSON.stringify(documents,undefined,2));
    }, (error)=>{
        console.log('Unable to fetch todos',error)
    });
    //client.close();
});