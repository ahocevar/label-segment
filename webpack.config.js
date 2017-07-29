const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    filename: 'dist/label-segment.js',
    library: "labelSegment"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: [
              'add-module-exports'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
