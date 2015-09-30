var express   = require('express');
var path      = require('path');
var router    = express.Router();
var Package   = require('../models/Package');
var http      = require('http');
var request   = require('request');

// recives the code from github and then gets the token for the user
router.get('/signin', function(req, res, next) {
  var options = 
    {
      url: 'https://github.com/login/oauth/access_token',
      
      headers: {
        Accept: 'application/json'
      },
      
      formData : {
        code: req.query.code,
        client_secret: process.env.GRUMP_GITHUB_API_SECRET,
        client_id:'61c332d3744979e21dfc',
        scope: "user:email"
      }
    };

  //make post request with code to get token
  request.post(options, function (err, postRes) {
    if (err) { console.error('upload failed:', err); }

    var token = JSON.parse(postRes.body).access_token;
    
    res.setHeader("x-access-token", token);
    console.log(token);
    res.redirect('/#/access_token=' + token);

  });


});

module.exports = router;
