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
  var user = message.FromUserName;

  if (content.match('抢答')) {
    isFirst() ? res.reply('抢答成功, 少侠好身手 d(>_< )Good!!') : res.reply('');
  } else {
    res.reply('T T');
  }
});

function isFirst() {
  if (dbstore['replied']){
    dbstore['replied'] = false;
    return true;
  }
  return false;
}