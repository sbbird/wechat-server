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
  res.render('quiz');
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
