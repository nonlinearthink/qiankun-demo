module.exports = {
  publicPath: `//localhost:${process.env.VUE_APP_PORT}`,
  devServer: {
    port: process.env.VUE_APP_PORT, // 重点6
    headers: {
      // 重点7：同重点1，允许子应用跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${process.env.VUE_APP_PACKAGE_NAME}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${process.env.VUE_APP_PACKAGE_NAME}`,
    },
  },
};
