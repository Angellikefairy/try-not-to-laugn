const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECT_PATH = path.resolve(__dirname, '../');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  perfomance: {
    hints: 'error', // 对于体积大的资源提示报错
  },
  devtool: 'eval-source-map', // 使用 eval 执行，映射为源代码
  devServer: {
    compress: true, // 启用 gzip 压缩
    contentBase: path.resolve(PROJECT_PATH, 'public'), // 提供静态文件访问目录
    host: '0.0.0.0',
    hot: true,
    noInfo: true, // 屏蔽启动时和每次保存之后的包信息，但是仍然显示错误和警告
    open: true,
    openPage: '', // 打开浏览器要浏览的页面
    overlay: {
      warnings: true,
      errors: false,
    },
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'try-not-to-laugh',
      filename: 'index.html',
      template: path.resolve(PROJECT_PATH, 'src/index.ejs'),
      inject: true,
    })
  ],
});