var express   = require('express');
var path      = require('path');
var router    = express.Router();
var User      = require('../models/User');
var http      = require('http');
var request   = require('request');
var utils     = require('../helpers/route-utils');

// recieves the code from github and then gets the token for the user
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
    if (err) { console.error('req failed:', err); }
    var token = JSON.parse(postRes.body).access_token;
    
    //get the user data from gitHub
    utils.gitGetUser(token, function(userData) {
      var userInfo = {
        token : token,
        name  : userData.name,
        login : userData.login,
        email : userData.email
      };
      
      //instantiate a new user
      var user = new User(userInfo);

      //save the user to the database and send back a token
      user.save(function(err){
        if(err) { res.send(err); }
        else res.redirect('/#/access_token=' + token);
      });
    });
  });
});

router.post('/checkAuth', function (req, res, next) {
  // checking to see if the user is authenticated
  // grab the token in the header is any
  // then decode the token, which we end up being the user object
  // check to see if that user exists in the database
  var token = req.headers['x-access-token'];
  if (!token) {
    next(new Error('No token'));
  } else {
      User.find({token:token}, function (err, result) {
        if(err) { 
          res.send(false); 
        } else if(result.length === 0) {
          res.send(false);
        } else if(result.length === 1) {
          res.send(true);
        }
    });
  }
});

module.exports = router;
