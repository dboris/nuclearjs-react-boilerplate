var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'app.js',
    publicPath: 'http://localhost:3000/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: process.env.NODE_ENV !== 'production',
    }),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
}
