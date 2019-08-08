const path = require('path');

module.exports = {
  entry: './sample.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sample.js'
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use:{
        loader: "babel-loader"
      }}
    ]
  }
};