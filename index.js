var express = require("express");
var app = express();

const port = process.env.PORT || 8080;

app.use(express.static("public"));

const server = app.listen(port, async () => {
  console.log(`Listening on port ${server.address().port}`);
});
