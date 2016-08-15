/**
 * Created by sbbird on 8/15/16.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var _ = require('lodash');

var token = 'sbbird';
/* GET users listing. */
router.get('/', function(req, res, next) {
  var params = req.query;
  console.log("=======");
  console.log(JSON.stringify(params));
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

function checkSignature(signature, timestamp, nonce, token) {
  var tmpArray = [token, timestamp, nonce];
  var tmpString = _.sortBy(tmpArray).join("");
  console.log(_.sortBy(tmpArray));
  var shasum = crypto.createHash('sha1');
  var checkSum = shasum.update(tmpString).digest('hex');
  console.log(checkSum);
  console.log("==========");
  return checkSum === signature;

}

module.exports = router;
