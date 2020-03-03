// import  export 
import Vue from "vue";// 引入的是vue.runtime.common.js
// 导入App.vue;
// 如果是自己的模块，记得加上"./";同级如果不加，无法找到对应的模块；
import App from "./App.vue";

new Vue({
    el:"#app",
    render:function(h){
        // h：createElement 这个函数；可以传入组件对象；
        // h(App) : 这个是一个虚拟的DOM节点；{type:"div",children:[]} VNode
        // render 函数一个虚拟的DOM节点，当new Vue进行编译时，会把这个虚拟的DOM节点转成真实的DOM，挂载到对应的元素中；
        return h(App);
    }
})

