import React from "react";
import ReactDoM from "react-dom"; //固定散步
let foo=<div id="a">
    你很好
</div>
let bar=<div id="b">
大家好,才是真的好
</div>





ReactDoM.render(foo,document.querySelector("#root"),function(){
    console.log(100);
    
});
// ReactDoM.render(bar,document.querySelector("#root"))
// var divs=document.getElementById("a")
// console.log(divs.id);
console.log(ReactDoM);


