const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.css']
    })
  ]
}
