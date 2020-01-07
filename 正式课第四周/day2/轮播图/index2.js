let wrapper=document.getElementsByClassName('wrapper')[0]
let list=document.getElementById('list')
let outer=document.getElementById('outer')
let data=null
let xhr=new XMLHttpRequest()
xhr.open('get','banner.json',false)
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
        data=JSON.parse
        (xhr.responseText)
    }
}
xhr.send()
console.log(data);


let bindHtml=()=>{
    let divs=``
    let lis=``
    data.map((item,index)=>{
        divs+=`<div><img src="${item.img}"></div>`;
        lis+=` <li></li>`
       

   })
   divs+=`<div><img src="${data[0].img}"></div>`
  wrapper.innerHTML=divs
  list.innerHTML=lis
}
bindHtml()

//实现自动轮播 2000ms滑动一张
// 让wrapper这个元素向左移动800px;
let step=0
let autoMove=()=>{
    step++
    if(step===5){
        wrapper.style.left="0px"
        step=1
    }
    changeTip()
    utils.animate(wrapper,{left:-800*step},300)
}
let timer=setInterval(autoMove,2000)

outer.onmouseover=function(){
    clearInterval(timer)
}
outer.onmouseout=function(){
    timer=setInterval(autoMove,2000)
}
//焦点跟随； 显示哪一张图片，给对应的li加上class名select;   
let oLis=document.getElementsByTagName('li')

let changeTip=()=>{
    for(let i=0;i<oLis.length;i++){
        if(step==i){
            oLis[i].classList.add('select')
        }else{
            oLis[i].classList.remove('select')
        }
        if(step===4){
            oLis[0].classList.add('select')
        }
    }
}
changeTip()

//点击焦点，图片跟随
let forcus=()=>{
    for(let i=0;i<oLis.length;i++){
         oLis[i].onclick=function(){
             autoMove(i)
         }
    }


}
forcus()

let left=document.getElementById('left')
let right=document.getElementById('right')
right.onclick=function(){
    autoMove()
}
left.onclick=function(){
    step--
    if(step===-1){
         // 当step=-1时，让其瞬间回到最后一张，也是第一张上；
        wrapper.style.left='-3200px'
        step=3
    }
    utils.animate(wrapper,{left:-800*step},300)
    changeTip()
}