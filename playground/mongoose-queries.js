const { ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5b1902b90b35872a901735a9';

// if(!ObjectID.isValid(id)){
//     console.log('id not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) =>{
//     console.log("todos ",todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) =>{
//     console.log('todo ', todo);
// });

// Todo.findById(id).then((todoByid)=>{
//     if(!todoByid){
//         return console.log('Id not valid');
//     }
//     console.log('todo by id ', todoByid);
// }).catch((e)=> console.log(e));

User.findById('5b180541c5130e353cfbd9e8').then((user)=>{
    if(!user){
        return console.log("Unable to find user");
    }
    console.log("User ", user.Email);
},(e) =>{
    console.log(e);
});