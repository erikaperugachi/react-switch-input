var webpack = require('webpack');
var path = require('path');

var config = {
	entry: {
		switch: './index.js'
	},
	output: {
		library: 'react-switch-input',
		libraryTarget: 'umd',
    	path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude : /node_modules/,
			use: ['babel-loader']
		},
		{
			test: /\.css$/,
			use: [
	          { loader: "style-loader" },
	          { loader: "css-loader" }
	        ]
		},
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
	        loader: ["file?name=[name].[ext]&limit=10000&mimetype=application/font-woff"]
		},
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
	        loader: ["file?name=[name].[ext]&limit=10000&mimetype=application/font-woff"]
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	        loader: ["file?name=[name].[ext]&limit=10000&mimetype=application/octet-stream"]
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	        loader: ["file?name=[name].[ext]"]
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	        loader: ["file?name=[name].[ext]&limit=10000&mimetype=image/svg+xml"]
		}]
  	},
  	plugins: [
	    new webpack.ProvidePlugin({
	        "React": "react"
	    })
	],
	externals: {
    	react: 'react'
	},
};

module.exports = config;