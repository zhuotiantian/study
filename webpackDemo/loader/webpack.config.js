const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.min.js"
    },
    module: {
        //定义遇到不同文件的处理规则
        rules: [{
            test: /\.css$/i,
            //use从后往前执行，需要注意先后顺序
            //css-loader:读取并且解析css文件   原理：将css文件中的样式转换成字符包含在打包好的文件中
            //style-loader:把样式输出到页面style标签中
            use: [
                "style-loader",
                "css-loader",
                // 'postcss-loader' 
                //需要为loader添加配置时的写法
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: [
                            require('autoprefixer')
                        ]
                    }
                }
            ]
        }]
    }
}