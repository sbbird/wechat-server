/**
 * Created by sbbird on 8/21/16.
 */

var wechat = require('wechat');

var config = {
  token: 'sbbird',
  appid: 'wx1cd6277c7c72ee8f',
  encodingAESKey: 'Q2rGiDCetH0eN9E3afoeggSYzwdBnh1ogFtJhg8RsVk'
};

module.exports = wechat(config, function (req, res, next) {
  var message = req.weixin;
  res.reply('hehe');
});