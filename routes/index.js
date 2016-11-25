/**
 * Backend route to render the homepage.
 */
var express = require('express');
var router = express.Router();
var Todo = require('../models/todoModel');

router.get('/', function(req,res, next){
        res.render('index');
});

module.exports = router;
