## web前端发展史
-  web1.0时代（2013）：网页制作
-  web2.0时代
    + 弱前端时代（服务端渲染）
    + 客户端渲染
- 全面进军移动端
- node.js

## 浏览器
- 打开控制台（F12、ctrl+F12，右击，检查元素）
- Elements：显示页面中的结构和样式（还可以临时修改）
- Console: 可以运行代码，可以打印页面中代码的内容，可以输出页面的报错
- Sources: 存放的是页面的静态资源文件
- NetWork：里边是所有的数据请求

## 浏览器的分类
QQ、360、火狐（FireFox）、谷歌（Chrome）、IE、欧朋（Opera）、safari
- webkit（v8引擎）
    + Chrome
    + safari
    + 手机浏览器
    + 国产浏览器
- Gecko
    + FireFox
- Prosto
    + Opera
- Trident
    + IE
    + IE EDGE（Chrome mini）

## js
> js作为一门客户端开发语言，不仅要操作浏览器的某些功能，还要操作页面中的dom元素
- ECMAScript3/5（老版本）(6/7)（新版本）：规定了js的语法、变量、操作语句等
- DOM：（document object model）提供了一些js的属性和方法，用来操作页面中的dom元素
- BOM：（browser object model）提供了一些js的属性和方法，用来操作浏览器

## js创建变量的几种形式
- 1、var 创建一个变量
- 2、let 创建一个变量
- 3、const 创建常量(不允许被修改)（ES6）
- 4、function创函数变量
- 5、import导入
- 6、class创建类
- 7、Symbol创建唯一值

## js中的命名规范
- 严格区分大小写
- 变量名由数字，字母，$,_组成，不能以数字开头
- 遵循驼峰命名法（变量名的第一个单词首字母小写，以后每一个有意义的单词首字母大写）
- 不能以关键字或者保留字作为变量名

## js的数据类型
- 基本数据类型
    + number 数字类型 2,1.2， -2， +4
    + string 字符串 'fdjfjd'  "hsjbozckdbcs" `中国` 
    + boolean 布尔 true false
    + null 空对象指针 
    + undefined 未定义
- 引用数据类型
    + object对象
        + 普通对象 {name: 'xxxx'}
        + 数组 ['1', 1, true, null, undefined]
        + Math 数学对象
        + Date 日期对象
        + /^$/ 正则
    + function 函数

    ## number数字类型
    > 有效数字 3， 5.5 ， -4.4 ， 0， +7
    > NaN（not a number）不是一个数，但是他是number数据类型的

    ### 把其他数据类型转数字类型 Number(val)
    - 把字符串转数字：
        + 只要字符串中出现了非有效数字，那结果就是NaN（第一个小数点不算，第一个-、+不算）
        +  如果左右有空格，会自动去掉
        +  空字符串转数字是0

    - 把布尔转数字
        + true转数字是1
        + false转数字是0
    - 把null和undefined转数字
        + null转数字是0
        + undefined转数字是NaN

    - 把对象还转数字

        + 把普通对象转数字，先把值转换为字符串，在把字符串转换为数字
            + 所有的普通对象转字符串都是 '[object Object]'
            + 所有的普通对象转数字都是NaN
            
        + 把数组转数字先，把值转换为字符串，在把字符串转换为数字
            + 把数组转字符串是把左右两边的中括号去掉，替换为引号即可


