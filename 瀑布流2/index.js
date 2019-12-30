
var oUl=document.getElementsByTagName('ul') //获取ul
var arr=Array.from(oUl) //类数组转数组
let data = null;
let xhr = new XMLHttpRequest();
xhr.open('get','data.txt',false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText);
    }
}
xhr.send();


function bindHtml(){
    for(var i=0;i<50;i++){ //自定义 //自己随意写的50让更多图片展示占满屏幕
        var num=Math.round(Math.random()*7) 
        var cur=data[num]  //cur随机取数据
        var li=document.createElement('li')//动态创建元素节点
        var a=document.createElement('a')
        a.innerHTML="采集"
        a.href="javascript:;"
        li.appendChild(a)//把节点插入到容器的末尾
        var img=document.createElement('img')
        img.setAttribute("trueImg",cur.src)
         //在元素结构中设置属性，把真实路径给了当前图片的行间属性
        img.style.height=Math.round(Math.random()*(350-200)+200)+"px"//设置图片的宽高
        li.appendChild(img)
        var p=document.createElement('p')
        p.innerHTML=cur.title;
        li.appendChild(p);
        //在li放入ul前进行排序
        arr.sort(function(a,b){
            return a.scrollHeight-b.scrollHeight  //高度进行排序
            //当前元素的高度，文本不溢出的化
          })
          arr[0].appendChild(li) 
        
    } 


}
bindHtml()
//多张图片延迟加载
var imgs=document.getElementsByTagName('img')

function delay(){
      // 当滚动条拉动时，循环每一张图片，判断是否应该显示加载出来；
    for(var i=0;i<imgs.length;i++){
       
        
        checkImg(imgs[i])

  }

}
var winH=utils.win("clientHeight")

//检验一张图片是否该显示
function checkImg(curImg){
     // checkImg: 检测该图片是否应该加载出来；
    // 如果该图片已经加载成功，不需要再次校验；
    if(curImg.load){
        return;
    }
     var curH=curImg.offsetHeight
     var curT=utils.offset(curImg).t
     var winT=utils.win("scrollTop")
     console.log(winT);
     
  
     // 如果卷起的高度+可视窗口的高度>当前盒子底边框距离body上边的高度时，让该盒子显示真实的图片；
     if(winH+winT>curH+curT){
         var address=curImg.getAttribute("trueImg")//在元素结构中获取属性
         var img=new Image; ////实例就是一个img的DOM元素对象
         img.src=address;
         // 当图片路径没有问题，会执行下面的onload事件；
         img.onload=function(){
             curImg.src=address
             curImg=true;
         
             
         }

     }

}
delay()
var container=document.getElementsByClassName("container")[0]//获取元素集合

window.onscroll=function(){
    // 时时刻刻获取最新的container的高度
    var containerH=container.offsetHeight
    var curT=utils.win("scrollTop")
    if(curT+winH+300>containerH){
        // 如果滚动条卷起的高度+可视窗口的高度 如果距离页面底端还有300像素，就立即再次执行绑定数据
        bindHtml()
    }

    
    delay();
}