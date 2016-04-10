var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    "./src/index.js"
  ],
  output: {
    path: __dirname + "/build",
    filename: "app.js",
    publicPath: '/kooft/'
  },
  module: {
    loaders: [
      {
        // "test" is commonly used to match the file extension
        test: /\.js$/,

        // "exclude" should be used to exclude exceptions
        // try to prefer "include" when possible
        exclude: /node_modules/,
        // the "loader"      
        loaders: ['react-hot', "babel"]
      },
      {
          test: /\.css$/,
          loaders: [
              'style?sourceMap',
              'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]
      }
    ]
  },
  plugins: [
       new webpack.HotModuleReplacementPlugin()
   ]
}
