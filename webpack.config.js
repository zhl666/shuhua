const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const allowedEnvs = ['dev', 'pro', 'test'];
let env;

if(args._.length > 0 && args._.indexOf('start') !== -1) {
	env = 'test'
} else if (args.env) {
	env = args.env;
} else {
	env = 'dev';
}

function buildConfig(wantedEnv) {
	let isValid = wantedEnv && wantedEnv.length >= 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
	let validEnv = isValid ? wantedEnv : 'dev';
	let config = require(path.join(__dirname, 'cfg/' + validEnv));
	console.log(config)
	return config;
}

module.exports = buildConfig(env);