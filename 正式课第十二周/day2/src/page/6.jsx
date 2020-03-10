import React from "react";
import ReactDoM from "react-dom";


// let ary=[{name:"小花",age:18},{name:"蜜芽",age:1}]
// let list=<ul>
//     {ary.map((item,index)=>{
//         return <li key={index}>{item.name}{item.age}</li>

//     })}


// </ul>

let a=<div>中国</div>
console.log(a);

ReactDoM.render(a,document.getElementById("root")) // root元素就是public中index.html中id为root的元素；
// ReactDOM.render(foo,document.getElementById("root1")) //在public中index.html中div加一个root1就不会被覆盖
console.log(ReactDoM);
