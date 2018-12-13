//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error){
        return console.log('Unable to connect to the MongoDB database server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5c12481eb60d4c142fae9d74')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c123f987a8cbd0d14fe18b6')
    },{
        $set: {
            name: 'Mike'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal:false
    }).then((result) =>{
        console.log(result);
    });


    //client.close();
});