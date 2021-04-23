var express=require('express');
var router =express.Router();
var app=router();

router.get('/route1', function(req, res) {
    res.send('Route1 Test successfull');
  });
  
  
  router.get('/route2', function(req, res) {
    res.send('Route2 Test successfull');
  });
  
  module.exports = router;