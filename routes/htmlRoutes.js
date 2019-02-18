var db = require("../models");
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/new", function(req, res) {
    res.render("partials/new");
  });


  app.get("/home", function(req, res) {
    console.log("get route");
    var d = db.Post;
    d.findAll({
      include: [db.User]
    }, function(data) {
      console.log("hello" + data);
    }).then(test => {
      res.render("partials/home", {test});
    })
  });

  app.get("/user/:id", function(req, res) {
    db.User.findAll({
      where: {id: req.params.id},
      include: [db.Post]
    }).then(data => {
      // console.log(data[0].dataValues.name);
      // var name = data[0].dataValues.name;
      // var data1 = data[0].Posts;
      var data1 = data[0];
      res.render("partials/user-homepage", {data1});
    })
  });

  app.get("/post/:title", function(req, res) {
    db.Post.findAll({
      where: {title: req.params.title},
      include: [db.User]
    }).then(data => {
      console.log(data[0].dataValues.createdAt);
      var data1 = data[0].dataValues;
      res.render("partials/post-page", {data1});
    })
  })

  app.get("/user-homepage", function(req, res) {
    res.render("partials/user-homepage");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
