const {
  resolve
} = require('path')

module.exports = (options, ctx) => ({
  name: "vuepress-plugin-yuque-sidebar",
  enhanceAppFiles: resolve(__dirname, "./enhanceAppFile.js"),
  globalUIComponents: [
    'YuqueSidebar'
  ]
});