var express = require('express');
var router = express.Router();

//monicotodo: sort by date desc
var listings = require('./listings').filter(function(elem){
  return elem.displayFlag;
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { listingsData : JSON.stringify(listings) });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about');
});

module.exports = router;
