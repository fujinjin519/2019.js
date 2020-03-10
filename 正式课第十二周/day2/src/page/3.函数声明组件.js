import React from "react";
import ReactDOM from "react-dom";

//组件，两种方式1.函数声明   2.类声明

function Foo(props) {  //1.函数创建组件， 
                 //2.组件的名字必须是大写，为了和内置的区分开Foo
                 //3.组件每使用一次，当前组件函数会执行一次
//    console.log(100);
    console.log(props);


   
   return <div>
        <span>{props.a}</span>  
    </div> //4. 当使用组件时，会把行间属性组合成一个对象传给当前组件的第一个参数
   
} 
let obj={a:"你们我们",b:"哈喽"}// 如果需要传入一个对象，那么需要对对象进行...展开，然后放入行间属性

let day=<div>

   <Foo a="你们我们" b="哈喽"></Foo>
    <Foo a="大家好"/>
    <Foo {...obj}></Foo>
</div>
ReactDOM.render(day,document.getElementById("root"))