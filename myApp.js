let express = require('express');
let app = express();

absolutePath = __dirname + '/relativePath/file.ext';
app.get("/", function(req, res) {
    res.send("Hello Express");
    res.sendFile(absolutePath);
  });
































 module.exports = app;
