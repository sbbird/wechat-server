var wechat = require('wechat');

var config = {
  token: 'sbbird',
  appid: 'wx1cd6277c7c72ee8f',
  encodingAESKey: 'Q2rGiDCetH0eN9E3afoeggSYzwdBnh1ogFtJhg8RsVk'
};

var admintoken = "sbbirdsbbirdsbbird";

var adminUsers = new Set();

var List = require('wechat').List;
List.add('view', [
  ['回复{a}查看我的性别', function (info, req, res) {
    res.nowait('我是个妹纸哟');
  }],
  ['回复{b}查看我的年龄', function (info, req, res) {
    res.nowait('我今年18岁');
  }]
]);

module.exports = wechat(config, wechat.text(function (info, req, res, next) {
  console.log(info);
  var content = info.Content;
  var user = info.FromUserName;

  /*if (admintoken === content){
    adminUsers.add(user);
    return res.reply("你已经成为管理员");
  }*/


  if (info.Content === 'list') {
    res.wait('view');
  } else {
    res.reply('hehe');
    // 或者中断等待回复事务
    // res.nowait('hehe');
  }

  if (content == "list")  {
    return res.wait('view');
  } else {
    return res.reply('hehe');
  }
/*  if (content.startsWith("sswd")) {
    // 谁是卧底
  }
  /*if (content === '抢答') {
    isFirst() ? res.reply('抢答成功, 少侠好身手 d(>_< )Good!!') : res.reply('被人抢先了 T T');
  } else {
    danmakudb.push(content);
    res.reply('');
  }*/
}));

function isFirst() {
  if (dbstore['replied']){
    dbstore['replied'] = false;
    return true;
  }
  return false;
}