// 这个函数执行形成一个闭包，里面都是私有作用域
$(function(){
    let  power = localStorage.getItem("power");
    if(power===null){
        alert("当前操作属于非法进入，请重新登录！",{
            handled:()=>{
                window.location.href="login.html"
            }
        })
    }

    power=decodeURIComponent(power);
    console.log(power);
    
    // power : 存储权限的信息，根据power信息可以控制元素是否隐藏
    let str=`<div class="itemBox">
        <h3>
            <i class="iconfont icon-yuangong">员工管理</i>
        </h3>
        <nav class="item">
            <a href="page/userlist.html" target="_iframe">员工列表</a>
            ${power.includes("userhandle")?`<a href="page/useradd.html" target="_iframe">新增员工</a>`:``}
        </nav>

    </div>
    <div class="itemBox">
        <h3>
            <i class="iconfont icon-guanliyuan">部门管理</i>
        </h3>
        <nav class="item">
            <a href="page/departmentlist.html" target="_iframe">部门列表</a>
            ${power.includes("departhandle")?`<a href="page/departmentadd.html" target="_iframe">新增部门</a>`:``}
        </nav>
    </div>
    <div class="itemBox">
        ${power.includes("jobhandle")?`<h3>
            <i class="iconfont icon-zhiwuguanli">职务管理</i>
        </h3>
        <nav class="item">
            <a href="page/joblist.html" target="_iframe">职务列表</a>
            <a href="page/jobadd.html" target="_iframe">新增职务</a>
        </nav>`:``}
    </div>
    <div class="itemBox">
        ${power.includes("jobhandle")?`<h3>
            <i class="iconfont icon-zhiwuguanli">职务管理</i>
        </h3>
        <nav class="item">
            <a href="page/joblist.html" target="_iframe">职务列表</a>
            <a href="page/jobadd.html" target="_iframe">新增职务</a>
        </nav>`:``}
    </div>
    <div class="itemBox">
        <h3>
            <i class="iconfont icon-kehuguanli">客户管理</i>
        </h3>
        <nav class="item">
            <a href="page/customerlist.html" target="_iframe">我的客户</a>
            ${power.includes("allcustomer")?`<a href="page/customerlist.html?lx=all" target="_iframe">全部客户</a>`:``}
            <a href="page/customeradd.html" target="_iframe">新增客户</a>
        </nav>
    </div>`;
    $(".menuBox").html(str);
})