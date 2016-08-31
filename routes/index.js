var express = require('express');
var router = express.Router();

/* GET home page. */


currentPage = 0;

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/photo', function (req, res, next) {
  res.render('photo', {title: 'Express'});
});

router.get('/answers', function (req, res, next) {
  res.send(JSON.stringify(answerdb));
});

router.get('/quiz', function (req, res){
  currentPage = 0;
  res.render('quiz', {
    quiz: [{
      title: '我们之间的相互称呼是什么?'
    }, {
      title: '我们是哪一年开始交往的?',
      selections: {
        1: 2009,
        2: 2010,
        3: 2011,
        4: 2012
      }
    }, {
      title: "鸟哥哥和女仆姐姐分别是哪里人?"
    }, {
      title: "鸟哥哥和女仆姐姐本科分别在哪个大学, 专业分别是什么?"
    }, {
      title: "鸟哥哥和女仆姐姐研究生分别在哪个大学, 专业分别是什么?"
    }, {
      title: "鸟哥哥第一份正式工作在哪家公司, 现在哪家公司?"
    }, {
      title: "女仆姐姐第一份正式工作在哪家公司, 现在哪家公司?"
    }, {
      title: "以下哪些国家和地区不是我们一起去过的?",
      selections: {
        1: '英国',
        2: '泰国',
        3: '北海道',
        4: '台湾',
        5: '内蒙'
      }
    }, {
      title: '鸟哥哥和女仆姐姐的弟弟年龄差是多少?',
      selections: {
        1: '4岁',
        2: '5岁',
        3: '6岁',
        4: '7岁'
      }
    }, {
      title: '以下哪项是我们约会中最常见的活动?',
      selections: {
        1: 'K歌',
        2: '买买买',
        3: '抓娃娃',
        4: '看电影'
      }
    }, {
      title: '鸟哥哥和Bee同学同时掉到水里, 女仆姐姐先救谁?'
    }, {
      title: '下面哪几项是女仆姐姐的忌口?',
      selections: {
        1: '葱',
        2: '蒜',
        3: '香菜',
        4: '姜'
      }
    }, {
      title: '下面哪几项是鸟哥哥的忌口?',
      selections: {
        1: '葱',
        2: '蒜',
        3: '香菜',
        4: '姜'
      }
    }, {
      title: '以下哪项是鸟哥哥最近参加的体育比赛?',
      selections: {
        1: '马拉松',
        2: '飞镖',
        3: '台球',
        4: 'Dota2'
      }
    }, {
      title: '"鸟哥哥在惠比寿买甜点"系列更新到第几弹?'
    }, {
      title: '以下谁跑得最快?',
      selections: {
        1: '鸟哥哥',
        2: '博尔特',
        3: '女仆姐姐',
        4: '香港记者'
      }
    }, {
      title: "附加问题"
    }]
  });
});



router.get('/shouldGoNext', function(req, res){
  res.json({
    'currentPage': currentPage
  });
});

router.post('/goNext', function(req, res){
  if (currentPage < 20)
    currentPage++;
  res.json({
    currentPage: currentPage
  });
});

router.post('/goPrev', function(req, res){
  if (currentPage > 0)
    currentPage--;

  res.json({
    currentPage: currentPage
  });
});

router.get('/quiz-info', function(req, res) {
  res.json({
    title: '下面哪一只是我们家的兔子',
    selection: {
      1: '西罗比',
      2: 'Chibidan',
      3: 'まーぶりん',
      4: 'ちゃーっび'
    },
    answer: 4
  })
});

router.get('/adminsbbird', function(req, res){
  res.render('admin');
});

module.exports = router;
