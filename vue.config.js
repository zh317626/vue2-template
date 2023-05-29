const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 输出文件目录
  outputDir: process.env.outputDir || 'dist',
  productionSourceMap: false,
})
