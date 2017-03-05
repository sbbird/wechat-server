var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechat = require('wechat');

var index = require('./routes/index');
var wechat2route = require('./routes/wechat2');
var danmakuroute = require('./routes/danmaku');
var answer = require('./routes/answer');

var app = express();


// global variable
answerdb = {};
danmakudb = ['测试弹幕'];
// view engine setup
dbstore = {
  replied: false
};



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', true);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.session({secret: 'keyboard cat', cookie: {maxAge: 60000}}));
app.use('/', index);
app.use('/wechat2', wechat2route);
app.use('/danmaku', danmakuroute);
app.use('/answer', answer);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;