const path = require("path"); //引入node.js的path模块
module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    }
}