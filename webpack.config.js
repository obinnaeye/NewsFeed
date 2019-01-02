require('dotenv').config();
const webpack = require('webpack');

const path = require('path');


const envsDefinePlugin = new webpack.DefinePlugin({
  'process.env.APIKey': JSON.stringify(process.env.APIKey)
});

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : 'cheap-eval-source-map',
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'pages', 'IndexEntry.jsx'),
    main: path.resolve(__dirname, 'src', 'js', 'pages', 'NewsPageEntry.jsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=/img/[name].[ext]' },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    envsDefinePlugin,
  ],
};
