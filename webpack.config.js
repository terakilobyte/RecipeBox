// var Webpack = require('webpack'); You aren't using this import
var babelPresets = {presets: ['react', 'es2015']};
var path = require('path');

module.exports = {
  context: __dirname,
  entry: ['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server', './src/App.js'],
  output: {
    path: __dirname + "/src",
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    stats: 'errors-only' // get rid of all that terminal spam, we only care about errors
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelPresets)],
      include: path.join(__dirname, 'src'),
    },{
      test: /\.scss$/,
      exclude:/(node_modules)/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    },{
      test:/\.json$/,
      loader: 'json-loader'
    }]
  },
  node: {
    console: true,
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  }
}
