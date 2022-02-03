const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [new HtmlWebpackPlugin({template: "index.html"})],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
