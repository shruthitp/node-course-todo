const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://Shruthi:tangled08@ds247310.mlab.com:47310/todos-node-app', (err, client) => {
    if (err) {
        return console.log("Unable to connect to Monodb server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('todos-node-app');

    //deleteMany
    // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((res)=>{
    //     console.log(res);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((res)=>{
    //     console.log(res);
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed : false}).then((res)=>{
    //     console.log(res);
    // });

    // db.collection('Users')
    // .deleteMany({ name: 'Shruthi' })
    // .then((res) => {
    //     console.log(res);
    // });

    db.collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5b177f56997eda29182974b6') })
    .then((res) => {
        console.log(res);
    });
    //client.close();
});