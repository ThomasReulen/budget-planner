const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Budget Planner',
      template: './src/index.html'
    }),
  ],
  watchOptions: {
    poll: 2000,
    aggregateTimeout: 1000,
    ignored: /node_modules/
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'www/'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
        {
           test: /\.(html)$/,
           use: ['html-loader']
        },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss)$/i,
        use: [ {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          { 
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader' 
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          },        
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
        "@adminlte": path.resolve(__dirname,"node_modules/admin-lte/")
    },
    extensions: ['*', '.js', '.jsx'],
  },
};