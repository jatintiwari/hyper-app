const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV ? "production" : "development",
  entry: "./src/index.js",
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  }, module: {
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
        },
      }
    ]
  }, resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [".js"],
  }, performance: {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  }, devtool: "source-map",
  context: __dirname,
  target: "web"
}
