/**
 * webpack.config.js
 */

const common = require('./webpack.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ShakePlugin = require('webpack-common-shake').Plugin;
const path = require('path');

// webpack main configration
const webpackConfig = {
  mode: 'production',
  plugins:[
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 1000}),
    new ShakePlugin()
  ],
  module:{
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile : 'tsconfig.json'
          }
        }],
        exclude: path.join(__dirname, 'node_modules') // exclude: /node_modules/
      }
    ]
  }
};

module.exports = (env, argv) => {
  if(argv.mode !== 'production') throw new Error('Not production mode!!');

  const config = merge.smart(common.webpackConfig, webpackConfig);
  config.output.filename = common.webpackConfig.output.filename.replace(/\.js$/, '.min.js');

  return config;
};

