/**
 *  A model that specifies the attributes af a todo list.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: {type: String, required: true},
    content: {type: String, required: true},
    isDone: {type: Boolean},
    hasAttachment: {type: Boolean}
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;