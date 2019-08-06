// server.js

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

//View engine
// app.use(express.static(__dirname + '/public'));
app.set("view engine", "pug"); //extension of views

app.get("/", function(req, res) {
  // res.send({ hello: "hello me" });
  res.render("index", { data: { hello: "hello me" } });
});
app.get("/api/getData", (req, res) => {
  res.render("index", { data: { hello: "hello hello" } });
});

app.listen(process.env.PORT || 4000, function() {
  console.log("Your node js server is running");
});
