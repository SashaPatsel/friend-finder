var bodyParser = require('body-parser')
var express = require("express");
var app = express()
var path = require("path");
var friends = require("../data/friends.js")

module.exports = function(app){
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/api/friends", function(req, res) {
    return res.json(friends)
  });
}
