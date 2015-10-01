var expect    = require('chai').expect;
var assert    = require('chai').assert;
var sinon     = require('sinon');
var supertest = require('supertest');
var mongoose  = require('mongoose');
var GitHubApi = require('github');
var router    = require('express').Router();
var http      = require('http');
var request   = require('request');


// describe('api/auth', function () {

//   describe('GET at /signin', function () {
//     beforeEach(function(){
//         //mocking out are request function
//         sinon.stub(request, 'post', function(options, cb) {
//             var resp = {access_token:'tokinToken', scope: "user:email"};
//             var err  = null;
//             cb(err, resp);
//         });

//         sinon.stub(router, 'get', function(arg, cb) {
//             var req = arg;
//             var res = {};
//             cb(req,res);
//         });
//     });

//     afterEach(function () {
//         request.post.restore();
//     });

//     it('should build the correct options object', function (done) {
//         supertest('http://localhost:3000')
//         .get('/signin?code=ghostofbarryblaha')
//         .end(function(req, res){
//             console.log(req);
//             done();
//         });
    
//     });

//   });


// });