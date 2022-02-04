var express = require("express");
var router = express.Router();
var fs = require("fs");





router.get("/", (req, res) => {
    console.log("index page");
    res.render("index.ejs");
  });
  

module.exports = router;