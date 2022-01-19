const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = (env, argv) => ({
	// Base directory for resolving entry points.
	context: path.resolve(__dirname, 'src'),
	// Where to start building the dependency tree.
	entry: [
		//'core-js/modules/es.promise',
		//'core-js/modules/es.array.iterator',
		'/',
	],
	// Where to transpile the final JS file.
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js',
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
	},
	target: 'web',
	// Webpack auto-enables some plugins depending on this value. See: https://webpack.js.org/concepts/mode
	mode: 'development',
	// Options for resolving module requests.
	resolve: {
		// Directories where to look for modules.
		modules: [
			'node_modules',
			path.join(__dirname, 'src'),
		],
		alias: {
			scenes: path.join(__dirname, 'src/scenes'),
			components: path.join(__dirname, 'src/components'),
			services: path.join(__dirname, 'src/services'),
		},
	},
	// Configure webpack-dev-server.
	devServer: {
		hot: 'only', // Don't hard refresh on build errors
		static: {
			directory: path.join(__dirname, 'src/assets'),
			publicPath: '/',
		},
  },
	module: {
		rules: [
			// Transpile JS/JSX.
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader',
				],
				exclude: /node_modules/
			},
			// Transpile (S)CSS.
			{
				test: /\.(sass|scss|css)$/,
				use: [
					argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader?modules',
						options: {
							modules: {
								localIdentName: '[name]-[local]--[hash:base64:5]',
								// Everything imported from node_modules will have their name unchanged. Same as:
								// import '!style-loader!css-loader!react-grid-layout/css/styles.css'
								/*getLocalIdent: (loaderContext, localIdentName, localName) => (
									loaderContext.resourcePath.includes('node_modules') ? localName : localIdentName
								),*/
							},
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		// Enable HMR
		new webpack.HotModuleReplacementPlugin(),
		// Plugin to create the separate CSS bundle file.
		new MiniCssExtractPlugin({ filename: 'bundle.css' }),
		// Enable the fancy CLI dashobard.
		new DashboardPlugin(),
	],
	// A SourceMap is added as DataUrl to the JavaScript file.
	devtool: 'inline-source-map',
});
