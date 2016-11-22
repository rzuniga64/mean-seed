var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var mongoose = require('mongoose');
var config = require('./config/config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, "public", 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB using mongoose.
mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);
app.use('/', index);

app.use(function(req, res, next) {
    res.render('index');
});

module.exports = app;
