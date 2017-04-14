var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My App Heyo',
    message1: "Ay Lmao"});
});

module.exports = router;
