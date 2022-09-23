"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/getusers").get(jsonku.getAllUser);

  app.route("/getuser/:id").get(jsonku.getUserById);
};
