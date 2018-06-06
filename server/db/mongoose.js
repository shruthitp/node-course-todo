var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://todoapp:todoapp08@ds151180.mlab.com:51180/todoapp');

module.exports = { mongoose };