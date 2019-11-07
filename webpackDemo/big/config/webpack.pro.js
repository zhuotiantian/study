const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "../build/")
  },
  plugins: [
    new StylelintPlugin({
      files: ["**/*.css", "**/*.less", "**/*.html", "**/*.vue", "**/*.scss", ]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html")
    })
  ]
}
