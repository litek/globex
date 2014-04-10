"use strict";
var glob = require("glob"),
    path = require("path");

module.exports = function(patterns, opts) {
  opts = opts || {};
  var exp = {};
  
  glob.sync(patterns, opts).forEach(function(file) {
    if (opts.cwd) {
      file = path.join(opts.cwd, file);
    }

    var inc = require(file);

    Object.keys(inc).forEach(function(key) {
      if (exp.hasOwnProperty(key)) {
        throw new Error("Export '"+key+"' is already defined");
      }

      exp[key] = inc[key];
    });
  });

  return exp;
};
