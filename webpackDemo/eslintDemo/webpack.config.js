// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: 'development',
    entry: "./src/js/index",
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)/i,
            loader: "eslint-loader",
            //排除
            exclude: /node_modules|bower/,
            options: {

            }
        }]
    }
}




// module.exports = function (env, argv) {
//     env = env || {
//         development: true
//     };
//     return {
//         entry: "./src/js/index",
//         module: {
//             rules: [{
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader']
//             }, {
//                 test: /\.(png|jpg|jpeg|gif)$/i,
//                 use: {
//                     loader: "url-loader",
//                     options: {
//                         outputPath: "images/",
//                         limit: 4 * 1048
//                     }
//                 }
//             }]
//         },
//         ...env.production ? require("./config/webpack.pro") : require("./config/webpack.env"),
//         plugins: [
//             new HtmlWebpackPlugin({
//                 template: path.join(__dirname, "./index.html")
//             })
//         ]
//     }
// }