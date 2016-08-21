/**
 * Created by sbbird on 8/21/16.
 */

var wechat = require('wechat');

var config = {
  token: 'sbbird',
  appid: 'wx1cd6277c7c72ee8f',
  encodingAESKey: 'Q2rGiDCetH0eN9E3afoeggSYzwdBnh1ogFtJhg8RsVk'
};

var answers = {};

module.exports = wechat(config, function (req, res, next) {
  var message = req.weixin;

  var content = message.content;
  var user = message.OpenID;
  if (message.match("抽奖")) {
    isGood(user) ? res.reply('恭喜') : res.reply('谢谢参与');
  } else {
    res.reply('hehe');
  }
});

function isGood(theUser) {
  answers[theUser] = answers[theUser] || { count: 0 };
  answers[theUser]['count']++;
  return (answers[theUser]['count'] % 3 === 0);
}