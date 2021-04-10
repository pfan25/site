module.exports = {
	extends: ['plugin:@next/next/recommended'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		sourceType: 'module',
		babelOptions: {
			presets: ['next/babel'],
		},
	},
};
