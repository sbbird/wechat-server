/**
 * Created by sbbird on 8/15/16.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var _ = require('lodash');

var xmlparser = require('express-xml-bodyparser');
var token = 'sbbird';
/* GET users listing. */
router.get('/', function(req, res, next) {
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

router.post('/', xmlparser({trim: false, explicitArray: false}), function(req, res, next){
  console.log(req.body);
  res.status(200).send("success");
});

function checkSignature(signature, timestamp, nonce, token) {
  var tmpArray = [token, timestamp, nonce];
  var tmpString = _.sortBy(tmpArray).join("");
  var shasum = crypto.createHash('sha1');
  var checkSum = shasum.update(tmpString).digest('hex');
  return checkSum === signature;

}

module.exports = router;
