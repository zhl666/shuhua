const path = require('path');
const srcPath = path.join(__dirname, '/../src');
let dlftPort = 8085;

function getDefaultModule() {
	return {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react']
						}
					}
				]
			}
		]
	}
}


module.exports = {
	srcPath: srcPath,
	publicPath: '',
	port: dlftPort,
	defaultModule: getDefaultModule
};