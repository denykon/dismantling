const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: [
                'react',
                'es2015'
              ]
            }
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['css-loader', 'sass-loader']
          },
          {
            test: /\.(jpg|png)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'file-loader'
              }
            ]
          }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    },
    //logLevel: config.LOG_DEBUG,
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    }
  });
};