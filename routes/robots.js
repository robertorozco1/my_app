var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var d3 = require('d3');

//List Robots
router.get('/robots', function(req, res, next) {
  var url = "https://southernct-443-robots-api.herokuapp.com/api/robots"

  d3.json(url, function(json) {

    try {
          console.log("LISTING ROBOTS", json);
          res.render('robots/index', {robots: json, title: "All Robots"});
        } catch(err){
      console.log("GOT AN ERROR:", err)
      res.send({error: `OOPS - SERVER ERROR ${err}`});
    }
  });
});


router.get('/robots/:id', function(req, res, next) {
  var robotId = req.params.id;
  var errorMessage = `OOPS - COULDN'T FIND ROBOT ${robotId}`
  var url = `https://southernct-443-robots-api.herokuapp.com/api/robots/${robotId}`
/* Vanilla JS Fetch
  fetch(url)
    .then(function(response) {
      response.json()
        .then(function(json){
          console.log("SHOWING ROBOT", json)
          res.render('robots/show', {robot: json, title: `Robot ${robotId}`});
        })
        .catch(function(err){
          console.log("JSON PARSE ERROR", err)
          res.send(errorMessage)
        })
    })
    .catch(function(err){
      console.log(errorMessage)
      res.send(errorMessage)
    })
});
*/
  d3.json(url, function(json) {
    console.log("SHOWING ROBOT", json);
    res.render('robots/show', {robot: json, title: `Robot ${robotId}`});
  });
});

module.exports = router;
