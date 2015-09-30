var expect   = require('chai').expect;
var assert   = require('chai').assert;
var request  = require('supertest');
var mongoose = require('mongoose');
var GitHubApi = require('github');


describe('api/auth', function () {


  describe('/signin', function () {
    // not sure how to test api and dont want to get hung on it while i could be
    // doing other things
    // it('should send back a header with an access token', function (done) {
    //   request('http://localhost:3000/api/auth/signin')
    //     .get('/')
    //     .expect(200)
    //     .end(function (err, res) {
    //       if (err) return done(err);
    //       console.log(res);
    //       expect(res.header.location).to.eql('/');
    //       done();
    //     });
    // });

    // it('should redirect the user to the base route', function () {
    
    // });


  });


});