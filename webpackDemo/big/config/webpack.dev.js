const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new StylelintPlugin({
      files: ["**/*.css", "**/*.less", "**/*.html", "**/*.vue", "**/*.scss", ]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html")
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: true
      }
    })
  ],
  devtool: "source-map"
}
