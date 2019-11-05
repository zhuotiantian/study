const path = require("path");
/*
module.exports = {
    mode: "development",
    entry: "./src/js/index",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.min.js"
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/i,
            use: {
                loader: "url-loader",
                options: {
                    outputPath: "imgs",
                    //配置
                    //publicPath: "/imgs",
                    limit: 4 * 1024
                }
            }
        }]
    }
}*/

//env:环境配置
//argv:webpack中所有选项
module.exports = function (env, argv) {
    env = env || {
        development: true
    }
    return {
        entry: "./src/js/index",
        ...env.production ? require('./config/webpack.production') : require('./config/webpack.development'),
        module: {
            rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        outputPath: "imgs",
                        limit: 4 * 1024
                    }
                }
            }]
        }
    }
}