var express   = require('express');
var path      = require('path');
var router    = express.Router();
var Package   = require('../models/Package');

// Get all them grumps
router.get('/', function(req, res, next) {
  var grump = req.params.grump;
  
  Package.find({}, function (err, result) {
    console.log("Hi!");
    // console.log(JSON.stringify(result));
    if (err) { console.log(err); }
    if (result.length === 0) {
      res.sendStatus(404);
    } else {
      var data = {};
      data.user = [];
      data.grumps = result;
      res.send(data);
    }
  });

});

// Search for a specific grump or user in our DB
router.get('/:search', function(req, res, next) {
  var search = req.params.search;
  var data = {};

  // Query for user with name first
  Package.find({"author": search}, function (err, result) {
    if(err) console.log(err);
    data.user = result;

    // Now query for grumps with this name
    Package.find({"defaultCommand": search}, function (err, result) {
      if(err) console.log(err);
      data.grumps = result;

      res.send(data);
    });
  });
});

// Query if a specific user has a grump
router.get('/:owner/:grump', function(req, res, next) {
  var owner = req.params.owner;
  var grump = req.params.grump;

  //instead we need to query mongo
  Package.find({"author": owner, "defaultCommand": grump}, function (err, result) {
    if (err) { console.log(err); }
    if (result === null) {
      res.sendStatus(404);
    } else {
      var data = {};
      data.user = [];
      data.grumps = result;
      res.send(data);
    }
  });
});


module.exports = router;
