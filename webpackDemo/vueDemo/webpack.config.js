const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
  STYLELINT
} = require("./config/index");
module.exports = function (env, argv) {
  env = env || {
    development: true
  };
  let conf = null;
  if (env.production) {
    conf = require("./config/webpack.pro")
  } else if (env.development) {
    conf = require("./config/webpack.dev")
  } else {
    conf = require("./config/webpack.test")
  }
  return {
    entry: ['@babel/polyfill', './src/index'],
    ...conf,
    //加载loader
    module: {
      rules: [
        //js
        {
          test: /\.(js|jsx)$/i,

          use: [{
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
            ...STYLELINT ? [{
              loader: 'eslint-loader',
              options: {
                exclude: /node_modules|bower/,
              },
            }] : [],
          ],
        },
        //css
        {
          test: /\.css$/i,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')],
              },
            },
          ],
        },
        //less
        {
          test: /\.less$/i,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        //images
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'images/',
              limit: 4 * 1024,
            },
          },
        },
        //fonts
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'fonts/',
              limit: 4 * 1024,
            },
          },
        },
        //vue
        {
          test: /\.vue$/i,
          use: 'vue-loader'
        }
      ]
    },
    //别名
    resolve: {
      alias: {
        "vue": "vue/dist/vue.esm",
        "@": path.resolve(__dirname, './src/js/')
      }
    }
  }

};
