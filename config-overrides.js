const {
  addLessLoader,
  fixBabelImports,
  addBabelPlugins,
  override
} = require("customize-cra");

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true
    }),
    //自动引入插件
    fixBabelImports("babel-plugin-import", {
      libraryName: "antd",
      style: true,
        libraryDirectory: "es",
    }),
    addBabelPlugins([ "@babel/plugin-proposal-decorators", { "legacy": true } ])
  )
};