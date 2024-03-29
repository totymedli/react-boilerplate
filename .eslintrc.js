module.exports = {
	env: {
		browser: true,
		es6: true,
    node: true,
	},
	extends: 'eslint:recommended', // or 'plugin:react/recommended'
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/jsx-uses-react': 'error',   
    'react/jsx-uses-vars': 'error',
	},
}