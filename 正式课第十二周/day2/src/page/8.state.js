import React, { Component } from "react";
import ReactDOM from "react-dom";
//组件的数据来源有两个地方。一个是props属性 一个是state状态
//props:从组件外面传过来的
//state:组件自己私有的
//在react:数据更新视图。在react中只有属性或者state发生改变，才会引发视图的更新
class Bar extends Component{
    constructor(){
        super();
        this.state={num:60} //初始化该组件状态
    }
    add=(val)=>{
  
        // console.log(this);//数据变了50.但是视图不变，想更新视图调用render，需要更新状态。通过组件实例setstate执行，视图会更新.两种写法一个是对象，一个是函数
        
        // this.state.num=50
        //this.setState({num:this.state.num+1}) //效果实现
        // this.setState({num:this.state.num+val}) //val传参问题，在行内改,在外层套一个箭头函数每次加2
         //或者用bind,因为bind默认返回一个函数也可以，另一种写法
        //  this.setState({num:this.state.num+2}) //在加这一行，并不会执行两次，更改状态会发生合并。后面会覆盖前面的，要解决写成函数的形式
        this.setState((prevState)=>{
            return {num:prevState.num+1}
            //这个函数的返回值会覆盖原有的state

        })//函数的写法不会覆盖，
        this.setState((prevState)=>{
            return {num:prevState.num+1}
           

        })
    }
    render(){

         return <div>
           <p>{this.state.num}</p>
           {/* <button onClick={()=>{this.add(2)}}>新增</button> */}
           <button onClick={this.add.bind(null,1)}>新增</button> 
       </div>

    }
}


ReactDOM.render(<Bar></Bar>,document.getElementById("root"))