//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error){
        return console.log('Unable to connect to the MongoDB database server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat dinner'}).then((result)=>{
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:"Mand Shutov"}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id : new ObjectID('5c123fc7fa6fe81f74a5de3f')}).then((result)=>{
        console.log(result);
    });

    //client.close();
});