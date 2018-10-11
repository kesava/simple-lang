var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

var entrypoint = process.env.npm_lifecycle_event === 'dev' ?
  'webpack-dev-server/client?http://localhost:8080' :
  './app/js/index.js';

module.exports = {
  entry: entrypoint,
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        include: __dirname + '/app',
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
}
