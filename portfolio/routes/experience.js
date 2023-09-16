var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('experience', { title: 'Mahmood Ahmed' });
});
module.exports = router;
