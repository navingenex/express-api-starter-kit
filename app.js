// server.js

const express = require("express");
const app = express();
const path = require("path");
app.get("/api/getData", (req, res) => {
  res.send({ hello: "hello" });
  res.end();
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 4000, function() {
  console.log("Your node js server is running");
});
