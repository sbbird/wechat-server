var express = require('express');
var router = express.Router();


router.get('/reset', function (req, res, next) {
  dbstore['isFirst'] = true;
  res.json({
    status: "OK"
  });
});

router.get('/hasAnswer', function (req, res) {
  res.send(JSON.stringify({
    status: 'OK',
    hasAnswer: !dbstore['replied']
  }));
});

router.get('/answer', function(req, res){
  if(isFirst()) {
    res.send('yesyes');
  } else {
    res.send('no');
  }
});

function isFirst() {
  if (dbstore['replied']){
    dbstore['replied'] = false;
    return true;
  }
  return false;
}



module.exports = router;

