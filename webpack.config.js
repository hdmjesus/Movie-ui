/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		assetModuleFilename: 'assets/images/[hash][ext][query]',
		chunkFilename: 'js/[id].[chunkhash].js',
		clean: true,
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@templates': path.resolve(__dirname, 'src/templates'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@images': path.resolve(__dirname, 'src/assets/images'),
		},
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(s*)css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|gif|jpg|svg|webp)$/,
				exclude: /node_modules/,
				use: [
					// {
					// 	loader: 'file-loader',
					// 	options: {
					// 		outputPath: 'assets/[name].[ext]',
					// 	},
					// },
					{
						loader: 'url-loader',
						// options: {
						// 	mimetype: 'image/png',
						// 	limit: 90000,
						// },
					},
				],
			},

			// {
			// 	test: /\.(woff|woff2)$/,
			// 	use: {
			// 		loader: 'url-loader',
			// 		options: {
			// 			limit: 10000,
			// 			MimeType: 'aplication/font-woff',
			// 			name: '[name].[contenthash].[ext]',
			// 			outputPath: './assets/font',
			// 			publicPath: '../assets/font',
			// 			esModule: false,
			// 		},
			// 	},
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, './public/index.html'),
			filename: './index.html',
			//Asi agregamos el favicon
			// favicon: path.resolve(__dirname, 'src/statics/favicon.png'),
		}),
		new ScriptExtHtmlWebpackPlugin({
			async: ['app'],
		}),
		new AddAssetHtmlPlugin({
			filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
			outputPath: 'js',
			publicPath: 'js/',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css',
			chunkFilename: 'css/[id].[chunkhash].css',
		}),
		new HtmlCriticalPlugin({
			base: path.join(path.resolve(__dirname), 'dist/'),
			src: 'index.html',
			dest: 'index.html',
			inline: true,
			minify: true,
			extract: true,
			width: 375,
			height: 565,
			penthouse: {
				blockJSRequests: false,
			},
		}),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: path.resolve(__dirname, 'src', 'assets/images'),
		// 			to: 'assets/images',
		// 		},
		// 	],
		// }),
		new webpack.DllReferencePlugin({
			manifest: require('./modules-manifest.json'),
			// context: path.resolve(__dirname, '.src/'),
		}),
	],
	optimization: {
		minimizer: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
