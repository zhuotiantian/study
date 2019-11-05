const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: 'development',
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            //注意路径问题
            template: path.resolve(__dirname, "../index.html")
        })
    ]
}