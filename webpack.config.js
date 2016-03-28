module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        // "test" is commonly used to match the file extension
        test: /\.js$/,

        // "exclude" should be used to exclude exceptions
        // try to prefer "include" when possible

        // the "loader"
        loader: "babel"
      }
    ]
  }
}
