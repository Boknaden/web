const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, './'),
		compress: true,
		port: 3000
	},
	entry: {
		'bundle': './index.js',
		'bundle.min': './index.js'
	},
	devtool: 'inline-source-map',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
	    rules: [
		    {
		    	test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
		    }
		]
	},
	optimization: {
		minimizer: [
			new UglifyJSPlugin({
				include: /\w+\.min\.js$/,
	            uglifyOptions: {
	                ecma: 5,
	                warnings: true,
	                mangle: false,
	                keep_fnames: true,
	            }
	        })
		]
	}
}