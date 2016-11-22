var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: {type: String, required: true},
    todo: {type: String, required: true},
    isDone: {type: Boolean},
    hasAttachment: {type: Boolean}
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;