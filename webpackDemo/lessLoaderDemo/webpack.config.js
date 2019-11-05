const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/js/index",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.min.js"
    },
    module: {
        rules: [{
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(js|jsx)/i,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    //启用source-map开发工具
    devtool: 'source-map'
}