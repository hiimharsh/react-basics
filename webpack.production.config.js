const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin('app.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
}