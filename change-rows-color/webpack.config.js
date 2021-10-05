
const { dirname } = require('path')
// 1.导入html-webpack-plugin这个插件
const HtmlPlugin=require('html-webpack-plugin')
// 2.创建插件的实例对象
const htmlPlugin=new HtmlPlugin({
    // 指定要复制哪个页面
    template: './src/index.html',
    // 指定要复制到哪儿
    filename: './index.html'
})
const path = require('path')
// 使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports={
    mode: 'development', //代表webpack的运行模式，可选development和production
    // 生产的时候打包出来的体积会变小，但是打包时间会变慢

    // entry指定要处理哪个文件
    entry: path.join(__dirname,'/src/index.js'), //默认不配置也是这个选项
    output: { 
        path: path.join(__dirname,'dist'), //默认输出路径
        filename: 'main.js' // 默认输出文件名
    },
    // 插件的数组 ,webpack在运行时候会调用这些插件
    plugins:[htmlPlugin]
}