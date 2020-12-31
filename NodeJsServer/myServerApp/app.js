var createError = require('http-errors');
var express = require('express');
var path = require('path');
const fs = require("fs");

const rawData = fs.readFileSync('programs.json');
const json = JSON.parse(rawData);
const port = 8000;

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/json', (req, res) =>{
  res.json(json);
  console.log("Sent response");
})

app.listen(port);
console.log(`Programs server listening on ${port}`);

module.exports = app;
