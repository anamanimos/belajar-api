"use strict";

var response = require("./res");
var connection = require("./database");

exports.index = function (req, res) {
  response.ok("App running");
};
