import React from "react";
import ReactDoM from "react-dom";
let obj = { name: "zhufeng" }
// let a=<div>{obj.name}</div>
// let b=<div>{</div>
let ary=[<span>1</span>,<span>2</span>]

let d = <div>
    <div>{obj.name}</div>
    <div>{3 > 1 ? "珠峰" : "培训"}</div>
    <div>{100 + 100}</div>
    <div>{null}</div>
    <div>{undefined}</div>
    <div>{false}</div>
    {/* <div>{fn()}</div> */}
    <div>{ary}</div>
    <label htmlFor='a'></label>
   <div className='abc' style={{color:"red"}}>1234</div>
</div>
//1.通过{}去取值
//2.大括号中支持三元运算符号以及表达式
//3.大括号可以放数组，数组的每一项可以是rect元素，最后被渲染到页面上
//4.函数和对象空间地址不能直接作为react子元素，不能放在{}中，可以放函数的执行结果，不能放函数
//5.行间属性不能使用class, 使用lable标签时候for 要写成htmlFor,驼峰命名
//6.要是写样式，行内属性style的属性值需要{{}}包起来，如果样式中有“-”。需要写成驼峰命名
ReactDoM.render(d, document.querySelector("#root"));

