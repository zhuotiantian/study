const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "bundle.min.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            //注意路径问题
            template: path.resolve(__dirname, "../index.html")
        })
    ]
}