const path = require("path");
module.exports = {
    //编译模式development:开发模式  可以输出测试信息  proccess.env.NODE_ENV可以查看当前编译模式
    // production:产品模式  启用压缩   自动忽略错误
    mode: "development",
    //入口路径
    // entry: "./src/index.js",
    entry: {
        index: "./src/index",
        news: "./src/news"
    },
    //输出
    output: {
        //使用node引入规则
        //path必须使用绝对路径，所以需要引入path包将相对路径转换为绝对路径
        //__dirname:当前文件所在的路径
        path: path.resolve(__dirname, "./build"),
        // filename: "bundle.min.js"
        filename: "[name].bundle.min.js"
    }
}