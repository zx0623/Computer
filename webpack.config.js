const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-plugins-px2rem')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			options: {
				postcss: function () {
					return [
						autoprefixer({
							browsers: [
								'last 3 versions',
								'ios >= 6',
								'android >= 4.4',
							]
						}),
						px2rem({remUnit: 75})
					]
				}
			}
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'url-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap'
			},
			{
				test: /\.less$/,
				loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap!less-loader?sourceMap'
			}
		]
	}
}
