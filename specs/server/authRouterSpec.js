var expect    = require('chai').expect;
var assert    = require('chai').assert;
var sinon     = require('sinon');
var supertest = require('supertest');
var mongoose  = require('mongoose');
var GitHubApi = require('github');
var router    = require('express').Router();
var http      = require('http');
var request   = require('request');

// honestly i dont know how to mock out the api shit, 
// so for now this isnt going to be covered by the tests 
// i am choosing to spend my time writing tests i know how to write