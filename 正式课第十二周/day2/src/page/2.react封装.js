class Element{
    constructor(type,attr,children){ //类型  对象
        this.type=type; //给实例新增简直对 ，this指向element的实例
        this.props={...attr,children:children}
     }
    //放到Element的原型上，实例可以调用
    render(){
        //将虚拟转成真实
        //这个this指向Element的实例，也就是ele,它可以拿到childern
        let ele=document.createElement(this.type);
        return ele;
        

    }

}





let obj={
    ////可以放无限，从第三个参数开始都是子节点。把节点放在一个数组中,收缩运算符
    // createElement执行创建一个虚拟的dom
   
    createElement(type,attr,...children){ 
        return new Element(type,attr,children)
        // //children:这是一个数组 ，返回Element的实例

    }
};
//render,1将虚拟的dom,转成真实的dom,把真实dom插入容器中。
let objDoM={
    //ele:虚拟的dom对象
    //ele：是Element的一个实例
    //container:将要挂载的dom元素
    render(ele,container,callback){
        //ele.render()将虚拟转成真实
        container.appendChild(ele.render())
        callback();


    }
}