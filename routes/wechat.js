/**
 * Created by sbbird on 8/15/16.
 */
var express = require('express');
var router = express.Router();
var _ = require('lodash');



var answers = {};



router.get('/', function (req, res, next) {
  var params = req.query;
  var signature = params['signature']
    , timestamp = params['timestamp']
    , nonce = params['nonce']
    , echostr = params['echostr'];
  if (checkSignature(signature, timestamp, nonce, token)) {
    res.status(200).send(echostr);
  } else {
    res.status('500').send('invalid request');
  }
});


module.exports = router;
