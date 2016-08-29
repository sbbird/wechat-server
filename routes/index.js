var express = require('express');
var router = express.Router();

/* GET home page. */


currentPage = 0;

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/answers', function (req, res, next) {
  res.send(JSON.stringify(answerdb));
});

router.get('/quiz', function (req, res){
  currentPage = 0;
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
    }, {
      title: "这是第四题"
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
