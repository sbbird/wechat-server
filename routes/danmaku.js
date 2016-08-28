var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getDanmaku', function (req, res, next) {
  res.json({
    data: danmakudb
  });
  danmakudb = [];
});

router.get('/add', function(req, res){
  danmakudb.push(req.query.text);
  console.log(danmakudb);
  res.json({
    status: "OK"
  })
});

module.exports = router;