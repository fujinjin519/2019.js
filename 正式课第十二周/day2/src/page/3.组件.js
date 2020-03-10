import React from "react";
import ReactDOM from "react-dom";
let a=<div></div>
//组件，函数声明   类声明
function foo() {
    return <div>
        <span></span>
    </div>
}
ReactDOM.render(<foo></foo>,document.getElementById("root"))