const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV ? "production" : "development",
  entry: {
    app: "./src/index.js",
    vendor: ['hyperapp', '@hyperapp/router']
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/dist/'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "vendor.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [".js", ".css"],
  },
  performance: {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  // devtool: "source-map",
  context: __dirname,
  // externals: ["hyperapp", "@hyperapp/router"],
  target: "web",
}
