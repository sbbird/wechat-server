var wechat = require('wechat');

var config = {
  token: 'sbbird',
  appid: 'wx1cd6277c7c72ee8f',
  encodingAESKey: 'Q2rGiDCetH0eN9E3afoeggSYzwdBnh1ogFtJhg8RsVk'
};



module.exports = wechat(config, function (req, res, next) {
  var message = req.weixin;
  console.log(message);
  var content = message.Content;
  var user = message.OpenID;

  if (content.match('抽奖')) {
    isGood(user) ? res.reply('恭喜') : res.reply('谢谢参与');
  } else {
    res.reply('hehe');
  }
});

function isGood(theUser) {
  answerdb[theUser] = answerdb[theUser] || { count: 0 };
  answerdb[theUser]['count']++;
  return (answerdb[theUser]['count'] % 3 === 0);
}