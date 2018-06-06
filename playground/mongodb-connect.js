//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID}  = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://Shruthi:tangled08@ds247310.mlab.com:47310/todos-node-app', (err, client) => {
    if (err) {
       return console.log("Unable to connect to Monodb server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('todos-node-app');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false}, (err,result)=>{
    //         if(err){
    //             return console.log("Unable to insert document");
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     }
    // );

    // User document insesrt( name, age, location)

    // db.collection('Users').insertOne({
    //     name : 'Shruthi',
    //     age : 27,
    //     location : "AP"
    // }, (err,res) =>{
    //     if(err){
    //         return console.log("Unable to insert User document");
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    // });


    client.close();
});