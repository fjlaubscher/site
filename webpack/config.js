require('dotenv').config();
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');

const publicPath = process.env.PUBLIC_URL || '/';
const buildPath = path.join(__dirname, '..', 'build');
const assetsPath = path.join(__dirname, '..', 'src', 'assets');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: buildPath,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer(), postcssPresetEnv()],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([{ from: assetsPath, to: buildPath }]),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      publicPath,
    }),
    isProduction &&
      new WorkboxPlugin.GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true,
      }),
  ].filter(x => x !== false),
};
