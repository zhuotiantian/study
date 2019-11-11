const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const {
  STYLELINT
} = require("./index.js");
module.exports = {
  mode: "development",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "../build/")
  },
  plugins: [
    ...STYLELINT ? [new StylelintPlugin({
      files: ["**/*.css", "**/*.less", "**/*.html", "**/*.vue", "**/*.scss", ]
    })] : [],
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html")
    }),
    new VueLoaderPlugin({})
  ]
}
