let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html';
app.get("/", function(req, res) {
    res.send("Hello Express");
    res.sendFile(absolutePath);
  });
































 module.exports = app;
