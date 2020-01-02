let wrapper = document.getElementsByClassName('wrapper')[0]
let list = document.getElementById('list')
let outer=document.getElementById('outer')
let data = null
let xhr = new XMLHttpRequest()
xhr.open('get', 'banner.json', false)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText)
    }
}
xhr.send()

let bindHtml = () => {
    let divs = ``
    let lis = ``
    data.map((item, index) => {
        divs += `<div><img src="${item.img}" ></div>`;
        lis += `<li></li>`

    })
    divs += `<div><img src="${data[0].img}" ></div>`;

    wrapper.innerHTML = divs;
    list.innerHTML = lis;
    

}
bindHtml()
//轮播
let step=0
let autoMove=()=>{
    step++
    if(step===5){
        wrapper.style.left='0px'
        step=1  //索引

    }
    changeTip()

    utils.animate(wrapper,{left:-800*step},300)
  }
let timer=setInterval(autoMove,2000)


//鼠标划上停止轮播
outer.onmouseover=function(){
    clearInterval(timer)
}
//鼠标离开继续轮播
outer.onmouseout=function(){
    timer=setInterval(autoMove,2000)
}

let olis=document.getElementsByTagName('li')
let changeTip=()=>{
    for(let i=0;i<olis.length;i++){
       if(step===i){
           olis[i].classList.add('select')
       }else{
        olis[i].classList.remove('select')
        }
        if(step===4){
            olis[0].classList.add("select")
        
        }
        olis[i].onclick=function(){
              step=i-1
              autoMove() //焦点跟随
        }
       
    }

}
changeTip()

//点击左右，实现切换
let left=document.getElementById('left')
let right=document.getElementById('right')

right.onclick=function(){
    autoMove()

}
left.onclick=function(){
    step--;

    if(step===-1){
        wrapper.style.left="-3200px"
        step=3;


    }
    utils.animate(wrapper,{left:-800*step},300)
    changeTip()


 }
