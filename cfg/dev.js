const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let baseConfig = require('./base');
let defaultSettings = require('./default');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let webPackDate = new Date();

let config = Object.assign({}, baseConfig, {
	devtool: 'source-map',
	entry: './index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/common.js'
		}),
	],
	module: defaultSettings.defaultModule()
});

config.module.rules.push({
  test: /\.css$/,
  use: [
  	{
  		loader: 'style-loader'
  	},
  	{
  		loader: 'css-loader'
  	}
  ]
});


module.exports = config;