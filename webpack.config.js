let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

const DOCS_DIR = path.resolve(__dirname, 'docs');
const SRC_DIR = path.resolve(__dirname, 'src');
const isPROD = process.env.NODE_ENV === 'prod';

console.log('------------------');
console.log(isPROD);
console.log(process.env.NODE_ENV);
console.log('------------------');

let plugins = [
  new ExtractTextPlugin('style.css')
];

let config = {
  devtool: !isPROD ? 'inline-sourcemap' : false,
  devServer: {
    historyApiFallback: true,
    port: 9090
  },
  entry: {
    app: `${SRC_DIR}/app/index.js`
  },
  output: {
    path: `${DOCS_DIR}/app`,
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-2']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(jpg|png)$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
              //publicPath: 'docs/'
            }
          }
        ]
      }
    ]
  },
  plugins: !isPROD ? plugins : [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    new CleanWebpackPlugin(['docs'])
  ]
};

module.exports = config;