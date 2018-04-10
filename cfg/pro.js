const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let baseConfig = require('./base');
let defaultSettings = require('./default');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let webPackDate = new Date();


let config = Object.assign({}, baseConfig, {
  // devtool: 'source-map',
  entry: {
    index: ['./index.js'],
    vender: ['react', 'react-dom'],
  },
  plugins: [
    new HtmlWebpackPlugin({
     template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      parallel: 4,
      output: {
        comments: false,
        preamble: "/* "+ webPackDate +" */"
      },
      uglifyOptions: {
        ie8: true,
        compress: true
      }
    }),
    new webpack.optimize.splitChunks({
     names: ['index', 'vender'],
     filename: 'js/[name].js'
    }),
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['../dist/*.*','../dist/js/*.*','../dist/css/*.*'], {
      allowExternal: true
    }),
    new webpack.BannerPlugin({
      banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
    })
  ],
  module: defaultSettings.defaultModule()
});

config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: true,
          sourceMap: true
        }
      }
    ]
  })
});

module.exports = config;