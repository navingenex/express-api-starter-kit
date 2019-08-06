const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Example app listening on port port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
