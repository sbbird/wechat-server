/**
 * Created by sbbird on 8/15/16.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var _ = require('lodash');
var xmlparser = require('express-xml-bodyparser');
var js2xmlparser = require("js2xmlparser");


var token = 'sbbird';
var XML_OPTIONS = {
  declaration: {
    include: false
  }
};


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


router.post('/', xmlparser({trim: false, explicitArray: false}), function (req, res, next) {
  console.log(req.body);
  var messageEvent = req.body;
  var full = messageEvent['xml'];
  var message = messageEvent['xml']['content'];
  var theUser = full['fromusername'];

  var reply = {
    ToUserName: full['fromusername'],
    FromUserName: 'sbbird_zhu',
    CreateTime: Date.now(),
    MsgType: 'test',
    Content: "not support"
  };

  if (message.match("抽奖")) {

    answers[theUser] = answers[theUser] || {
        count: 0
    };

    if ( answers[theUser]['count'] % 3 === 1) {
      reply['Content'] = '恭喜你, 中奖了';
    } else {
      reply['Content'] = '谢谢参与';
    }
    answers[theUser]['count']++;




    res.set('Content-Type', 'text/xml');
    res.send(js2xmlparser('xml', reply, XML_OPTIONS))

  } else {
    res.status(200).send("success");
  }
});


function checkSignature(signature, timestamp, nonce, token) {
  var tmpArray = [token, timestamp, nonce];
  var tmpString = _.sortBy(tmpArray).join("");
  var shasum = crypto.createHash('sha1');
  var checkSum = shasum.update(tmpString).digest('hex');
  return checkSum === signature;

}

module.exports = router;
