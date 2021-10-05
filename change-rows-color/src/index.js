// 使用es6导入语法,导入jQuery
import $ from 'jquery'
// 定义jQuery的入口函数
$(function(){
    //奇数行为红色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','green')
})