const webpack = require('webpack');
const path = require('path');

const entry = {
  reaxvue: './src/index.jsx'
};

if (process.env.NODE_ENV === 'development') entry.hotload = 'react-hot-loader/patch';
console.log(`running in ${process.env.NODE_ENV}`);

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: process.env.NODE_ENV === 'development' ?
    [new webpack.HotModuleReplacementPlugin()] : [],
  devServer: {
    contentBase: './dist',
    hot: process.env.NODE_ENV === 'development'
  }
};
