const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://Shruthi:tangled08@ds247310.mlab.com:47310/todos-node-app', (err, client) => {
    if (err) {
        return console.log("Unable to connect to Monodb server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('todos-node-app');

    // db.collection('Todos')
    //     .findOneAndUpdate({ _id: new ObjectID('5b17a934e7179a5e9b6577f9') }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //             returnOriginal: false
    //         })
    //     .then((res) => {
    //         console.log(res);
    //     });

    db.collection('Users')
        .findOneAndUpdate({ _id : new ObjectID('5b177f3a0c87a4366c7d7465')},{
            $set : {
                name : 'Shru',

            },
            $inc : {
                age : 1
            }
        },{
            returnOriginal : false
        }).then((res)=>{
            console.log(res);
        });

    //client.close();
});