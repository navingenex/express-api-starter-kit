// server.js

const express = require("express");
const app = express();
const path = require("path");
app.get("/", function(req, res) {
  // res.send({ hello: "hello me" });
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/api/getData", (req, res) => {
  res.send({ hello: "hello" });
  res.end();
});

app.listen(process.env.PORT || 4000, function() {
  console.log("Your node js server is running");
});
