const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT || 4000, function() {
  console.log("Your node js server is running");
});

//Run app, then load http://localhost:port in a browser to see the output.
