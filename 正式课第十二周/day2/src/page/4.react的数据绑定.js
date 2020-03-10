import React from "react";
import ReactDOM from "react-dom";
import "./4.index.css";
let ary=[{name:"小花",age:20},{name:"迷彩",age:16},{name:"明明",age:28}];
let list=<ul>
    {ary.map((item,index)=>{
        return <li key={index}>{item.name}{item.age}</li>
    
    })}

</ul>
//react数据绑定，
//1.需要使用数组的map的方法，将数据一一映射成react元素，
//2.需要将react元素上加上key属性，key的属性值是当前索引，代表唯一值，
 //page文件中是不支持less的，要想写样式，直接新建一个css文件
 //import语法需要放在当前js的上面

ReactDOM.render(list,document.getElementById("root"))