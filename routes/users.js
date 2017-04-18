var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({a:1, b:2, c:3});
});

module.exports = router;
