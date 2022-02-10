const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 创建HTML文件插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除dist目录插件

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(process.cwd(), "./dist/demo"), // 输出路径
    publicPath: "", // 打包后的前缀路径
    filename: "[name].[hash:8].bundle.js", // 打包文件命名
    chunkFilename: "[name].[hash:8].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "组件本地测试",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: "./dist/demo",
    },
    host: "0.0.0.0",
    port: 8989,
    hot: true,
  },
};
