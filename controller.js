"use strict";

var response = require("./res");
var connection = require("./database");

exports.index = function (req, res) {
  response.ok("App running", res);
};

exports.getAllUser = function (req, res) {
  connection.query("SELECT * FROM users", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
