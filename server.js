// var express = require('express');
// var app = express();
//
// app.get('/build/app.js', function(req, res) {
//   res.sendFile('app.js', {
//      root: __dirname + '/build/',
//   })
// });
//
// app.get('*', function(req, res) {
//   res.sendFile('index.html', {
//      root: __dirname + '/src/',
//   })
// });
// app.listen(3000);

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  contentBase: 'build/',
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
