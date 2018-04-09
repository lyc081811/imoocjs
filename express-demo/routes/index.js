var express = require('express');
var router = express.Router();
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/png', function(req, res, next) {
  res.download('public/img/1.png');
});


module.exports = router;
