import React from "react"
import ReactDOM from "react-dom";
class Foo extends React.Component{//foo继承react上面的component
    //    constructor和render都是react组件的一个生命周期钩子函数
    constructor(props){  //
        //类声明有状态的，有this,还有生命周期
        super();
    //    console.log(this);//这个this有foo里面有个props
    //    console.log(this.props); //undifined拿不到。如果想拿到传参数
    //    console.log(props); //拿到了100给super也得传参数
          console.log(1);
            
     } 
    render(){//react定义类，必须在原型上放一个render函数，并且这个render函数的返回值，最后放到根元素
        // console.log(this.props); //100

        console.log(2);
        
        return <div>{this.props.a}</div>

    
    }
}
let obj={c:1,d:2}

let  a = <div>

    <Foo a="100" b="eee"></Foo>
    <Foo a="200" {...obj}></Foo>
</div>

ReactDOM.render(a,document.getElementById("root"))