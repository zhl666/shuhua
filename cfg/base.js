let path = require('path');
let webpack = require('webpack');
let defaultSettings = require('./default');


module.exports = {
	output: {
		path: path.join(__dirname, '/../dist'),
		filename: '[name].js',
		publicPath: defaultSettings.publicPath
	},
	module: defaultSettings.defaultModule,
	devServer: {
		port: defaultSettings.port,
		hot: true,
		publicPath: defaultSettings.publicPath
	}
}