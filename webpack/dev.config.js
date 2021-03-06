/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const config = require('./config');

const port = process.env.PORT || 3000;

module.exports = Object.assign(
  {
    mode: 'development',
    devServer: {
      stats: 'minimal',
      hot: true,
      port,
      writeToDisk: true,
      overlay: true,
      historyApiFallback: true
    }
  },
  config
);
