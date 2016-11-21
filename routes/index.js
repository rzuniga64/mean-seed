var express = require('express');
var router = express.Router();
var Todo = require('../models/todoModel');

router.get('/', function(req,res, next){
    Todo.find({}, function(err, docs){
        todos = [];
        docs.forEach(function(doc){
            todos.push(doc.todo);
        });
        console.log(todos);
        res.render('index', {todos: todos});
    });
});

router.post('/', function(req, res, next){
    var name = req.body.name;
    var todo = req.body.todo;
    var newTodo = new Todo({
        username: name,
        todo: todo,
        isDone: true,
        hasAttachment: true
    });
    newTodo.save();
    res.redirect('/');
});

module.exports = router;
