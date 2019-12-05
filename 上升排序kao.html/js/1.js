let data =null
let xhr=new XMLHttpRequest
let cardbox=document.getElementById('cardbox')
xhr.open('GET','json/product.json',false)

xhr.onreadystatechange=function(){
    if(xhr.status===200&& xhr.readyState===4){
        data=xhr.responseText
    }
}
xhr.send()
data=JSON.parse(data)
console.log(data)
readerHtml()
function readerHtml(){
    let htmStr=``
    data.forEach((item)=>{
        htmStr+=` 
        <li data-time="${item.time}"
        data-hot="${item.hot}" 
         data-price="${item.price}">
        <img src="${item.img}" alt="">
        <span>${item.time}</span>
        <span>${item.hot}</span>
        <span>${item.price}</span>
        
    </li>`

    })
        cardbox.innerHTML=htmStr
    } 
  
let navlist=document.getElementsByTagName('a')
let cardlist=document.getElementsByTagName('li')
console.log(cardlist)
cardlist=utils.toArray(cardlist)


for(var i=0;i<navlist.length;i++){
    navlist[i].flag=-1
    navlist[i].index=i
    navlist[i].onclick=function(){
        this.flag*=-1
        sortlist.call(this)
        addArrow.call(this)
        clearArrow.call(this)
    }
}

function sortlist(){
    let dataAry=['data-price','data-hot','data-time']
    cardlist.sort((a,b)=>{
     
         a=a.getAttribute(dataAry[this.index])
         b=b.getAttribute(dataAry[this.index])
         if(this.index===0){
             a=a.replace(/-/g,'')
             b=b.replace(/-/g,'')
         }
         return (a-b)*this.flag
     
    })
  
     for(var i=0;i<cardlist.length;i++){
         cardbox.appendChild(cardlist[i])

     } 
  }

function addArrow(){
   let  up=this.children[0]
   let  down=this.children[1]
    if(this.flag>0){
        up.classList.add('bg')
        down.classList.remove('bg')
    }else{
        up.classList.remove('bg')
        down.classList.add('bg')
    }
}

function clearArrow(){
    for(var i=0;i<navlist.length;i++){
        if(this !==navlist[i]){
            navlist[i].children[0].classList.remove('bg')
            navlist[i].children[1].classList.remove('bg')
            navlist[i].flag=-1
        }
    }
}