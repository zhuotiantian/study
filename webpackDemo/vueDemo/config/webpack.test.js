const StylelintPlugin = require("stylelint-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const {
  STYLELINT
} = require("./index.js");
module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    ...STYLELINT ? [new StylelintPlugin({
      files: ["**/*.css", "**/*.less", "**/*.html", "**/*.vue", "**/*.scss", ]
    })] : [],
    new VueLoaderPlugin({})
  ]
}
