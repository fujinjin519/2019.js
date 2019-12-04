let data = null
let cardbox=document.getElementById('cardbox')
let xhr = new XMLHttpRequest
xhr.open('GET', './json/product.json', false)
xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
        data = xhr.responseText

    }
}
xhr.send()
data = JSON.parse(data)


renderHtml()
function renderHtml() {
    let htmStr = ``
    data.forEach((item) => {
        htmStr += `     
        <li data-time="${item.time}"
        data-hot="${item.hot}" 
         data-price="${item.price}">
        <img src="${item.img}" alt="">
        <span>${item.time}</span>
        <span>${item.hot}</span>
        <span>${item.price}</span>
        <span>${item.title}</span>
    </li>`
      
    })
    cardbox.innerHTML=htmStr

}

let navlist=document.getElementsByTagName('a')
let cardlist=cardbox.getElementsByTagName('li')

cardlist=utils.toArray(cardlist)

for(var i=0;i<navlist.length;i++){
    navlist[i].flag=-1
    navlist[i].index=i
    navlist[i].onclick=function(){
        this.flag*=-1
        sortlist.call(this)
    }
}

 function sortlist(){
     let dataAry=['data-time', 'data-hot', 'data-price']
     cardlist.sort((a,b)=>{
       
         a=a.getAttribute(dataAry[this.index])
         b=b.getAttribute(dataAry[this.index]);
         if(this.index===0){
             console.log(1)
             a=a.replace(/-/g,'')
             b=b.replace(/-/g,'')

         }
         return(a-b)*this.flag
     })

 
 for(var i=0;i<cardlist.length;i++){
      
    cardbox.appendChild(cardlist[i])
 }
  
}
