// 使用es6导入语法,导入jQuery
import $ from 'jquery'
import { CleanPlugin } from 'webpack'
// 导入样式，在webpack中一切皆模块，都可以通过es6进导入
// 找不到对应的loader会报错，需要配置相关的style-loader css-loader
// 如果某个模块中接收到from的成员为undefined，则没必要接收
import './css/index.css'
import './css/index.less'
//导入图片
import logo from './images/logo.png'
// 给src赋值
$('.box').attr('src',logo)
// 定义jQuery的入口函数

$(function(){
    //奇数行为红色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','green')
})