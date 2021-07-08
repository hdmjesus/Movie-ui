/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const DotEnv = require('dotenv-webpack');
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		assetModuleFilename: 'assets/images/[hash][ext][query]',
		chunkFilename: 'js/[id].[chunkhash].js',
		clean: true,
	},

	mode: 'production',
	// watch: true,
	devtool: 'source-map',

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
		},
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' },
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
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

		// new DotEnv(),
		// new BundleAnalyzerPlugin(),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		port: 3001,
		open: true,
	},
};
