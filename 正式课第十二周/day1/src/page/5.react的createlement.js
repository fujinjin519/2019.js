import React from "react" 
import ReactDoM from "react-dom";
// let a=<div>
//     <span>中国</span>
// </div> //这是一个react元素，也叫jsx元素
// console.log(a); //这个一个对象虚拟dom,当js解析时，会把这个标签通过React.createElemnt转成真实的dom.
// React.createElement("div")
//React里有一个createElement属性，里面传的参数，第一个参数是标签类型，第二个行间属性，第三个文本内容，第四个子节点
let a=React.createElement(
       "div",
       {a:"北京"},
       "回龙观",
       React.createElement("p",null,"懂大街")
       )
let b=<div a="北京">回龙观</div>

ReactDoM.render(b,document.getElementById("root"))