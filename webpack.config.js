const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
module.exports = {
  entry: './client/client.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader!resolve-url!sass-loader?sourceMap&sourceComments'
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader?importLoaders=1'
			}
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './',
    hot: true
  }

};
