import React, { Component } from "react";
import ReactDOM from "react-dom";
class Bar extends Component{
    constructor(){
        super();

    }
    add=(e)=>{
        console.log(100);
        console.log(this); //this指undifined,一般希望指向实例，需要用bind,改变this指向，或者直接写箭头函数,也可以改变this,指向bar
        console.log(e.target); //事件对象
        
       
        
        

    }
    render(){ //add绑定
        return <div>
            <button onClick={this.add}>按钮</button>
        </div>
    }
}
ReactDOM.render(<Bar></Bar>,document.getElementById("root"))