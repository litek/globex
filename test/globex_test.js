"use strict";
var globex = require("..");

describe("globex", function() {
  it("consolidates exports", function() {
    globex(__dirname+"/fixtures/*.js").should.eql({
      "foo": "foo",
      "bar": "bar",
      "baz": "baz"
    });
  });

  it("passes glob options", function() {
    globex("foo.js", {cwd: __dirname+"/fixtures"}).should.eql({"foo": "foo"});
  });

  it("throws on duplicates", function() {
    (function() {
      globex(__dirname+"/fixtures/foo.*");
    }).should.throw();
  });
});
