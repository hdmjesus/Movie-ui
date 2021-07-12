const path = require('path');
const webpack = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		modules: [
			'react',
			'react-dom',
			'firebase',
			'react-redux',
			'redux',
			'redux-thunk',
			'react-router-dom',
			'react-router',
		],
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[contenthash].dll.js',
		library: '[name]',
	},

	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.join(__dirname, '[name]-manifest.json'),
		}),
		new ScriptExtHtmlWebpackPlugin({
			async: ['modules'],
			defaultAttribute: 'async',
		}),
	],
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
	},
};
