"use strict";

var response = require("./res");
var connection = require("./database");

exports.index = function (req, res) {
  response.ok("App running", res);
};

//get all user
exports.getAllUser = function (req, res) {
  connection.query("SELECT * FROM users", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//get user by id
exports.getUserById = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM users WHERE id=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
