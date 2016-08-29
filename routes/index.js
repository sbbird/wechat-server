var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/answers', function (req, res, next) {
  res.send(JSON.stringify(answerdb));
});

router.get('/quiz', function (req, res){
  res.render('quiz', {
    quiz: [{
      title: '下面哪一只是我们家的兔子',
      selections: {
        1: '西罗比',
        2: 'Chibidan',
        3: 'まーぶりん',
        4: 'ちゃーっび'
      },
      answer: 4
    }, {
      title: '哈哈哈哈哈'
    }, {
      title: "我高中最喜欢的一项运动是什么?",
      selections: {
        1: "篮球",
        2: "足球",
        3: "健身",
        4: "跑步"
      }
    }]
  });
});

shouldNext = false;

router.get('/shouldGoNext', function(req, res){
  res.json({
    "shouldGoNext": shouldNext
  });
  if(shouldNext) {
    shouldNext = false;
  }
});

router.get('/goNext', function(req, res){
  shouldNext = true;
  res.json({});
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

module.exports = router;
