var expect    = require('chai').expect;
var assert    = require('chai').assert;
var sinon     = require('sinon');
var supertest = require('supertest');
var mongoose  = require('mongoose');
var GitHubApi = require('github');
var router    = require('express').Router();
var http      = require('http');
var request   = require('request');


//scant testing, but should at least confirm that routes are up and responding.


describe('api/mygrumps/', function () {

  describe('/', function () {

    it('should stonewall you on GET if you dont have a valid token', function (done) {
       supertest('http://localhost:3000/api/mygrumps')
        .get('/')
        .expect("You are not signed in")
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });

    it('should stonewall you on PUT if you dont have a valid token', function (done) {
       supertest('http://localhost:3000/api/mygrumps')
        .put('/')
        .expect("You are not signed in")
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });  


    it('should stonewall you on DELETE if you dont have a valid token', function (done) {
       supertest('http://localhost:3000/api/mygrumps')
        .delete('/')
        .expect("You are not signed in")
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });

  });
});