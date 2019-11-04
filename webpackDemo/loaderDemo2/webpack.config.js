const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/js/index',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.min.js',
    },
    module: {
        //不同的loader规则
        rules: [{
            test: /\.css/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|jpg|gif)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'images/', //相对于output的path
                    publicPath: '../build/images/', //输出到css的路径,相对于入口html的路径
                },
            },
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/i,
            use: {
                loader: "url-loader",
                options: {
                    outputPath: "fonts",
                    publicPath: "../build/fonts",
                    limit: 4 * 1024
                }
            }
        }],
    },
};