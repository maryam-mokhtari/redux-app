var express = require('express');
var app = express();

app.get('/build/app.js', function(req, res) {
  res.sendFile('app.js', {
     root: __dirname + '/build/',
  })
});

app.get('*', function(req, res) {
  res.sendFile('index.html', {
     root: __dirname + '/src/',
  })
});
app.listen(3000);
