const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/, // tells webpack "hey, treat this filename as a module"
        use: ['style-loader', 'css-loader', 'sass-loader'], // defines what loaders are applied to the file, order is important! are
        // loaded from right to left
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // we say webpack to take our html file, supply our
      // template
    }),
  ],
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  target: 'web',
};
