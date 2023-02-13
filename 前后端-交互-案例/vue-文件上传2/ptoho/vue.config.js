// cli
// 配置一些信息
// cli -> webpack
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
