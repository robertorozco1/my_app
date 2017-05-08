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


//New Robots
router.get('/robots/new', function(req, res, next) { // handle GET requests to the robots/new URL path
  res.render('robots/new', { // render the robots/new.ejs view
    title: "New Robot"
  });
});

//Show Robots
router.get('/robots/:id', function(req, res, next) {
  var robotId = req.params.id;
  var errorMessage = `OOPS - COULDN'T FIND ROBOT ${robotId}`
  var url = `https://southernct-443-robots-api.herokuapp.com/api/robots/${robotId}`
  d3.json(url, function(json) {
    console.log("SHOWING ROBOT", json);
    res.render('robots/show', {
      robot: json,
      title: `Robot ${robotId}`,
      requestUrl: url
    });
  });
});

//Edit Robot
router.get('/robots/:id/edit', function(req, res, next) {
  const robotId = req.params.id
  const endpointUrl = `https://southernct-443-robots-api.herokuapp.com/api/robots/${robotId}`
  d3.json(endpointUrl, function(json){
    console.log("loading Bot Details", json);
    res.render('robots/edit', {
      robot: json,
      title: `Robot ${robotId}`,
      requestUrl: endpointUrl,
      requestMethod: "PUT"
    });
  });
});



module.exports = router;
