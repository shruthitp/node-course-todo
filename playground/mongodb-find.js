//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://Shruthi:tangled08@ds247310.mlab.com:47310/todos-node-app', (err, client) => {
    if (err) {
        return console.log("Unable to connect to Monodb server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('todos-node-app');

    // db.collection('Todos').find({ _id : new ObjectID('5b178747e7179a5e9b65716c') }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count ${count}`);
        

    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection('Users').find({name : 'Shruthi'}).count().then( (res) =>{
        console.log(res);
    },(err) =>{
        console.log(err);
    })

    //client.close();
});