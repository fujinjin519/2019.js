let data=null
let xhr=new XMLHttpRequest
let cardbox = document.getElementById('cardbox')
xhr.open('GET','json/product.json',false)
xhr.onreadystatechange=function(){
    if(xhr.status ===200 && xhr.readyState===4){
        data=xhr.responseText
    }
}
xhr.send()
data=JSON.parse(data)
console.log(data)
readerHtml()
function readerHtml(){
    let htmlStr=``;
    data.forEach((item)=>{
        htmlStr=`
        <li data-time="${item.time}" data-hot = "${item.hot}" data-price="${item.price}">
        <img src="${item.img}" alt="">
        <span>${item.title}</span>
        <span>${item.time}</span>
        <span>${item.hot}</span>
        <span>${item.price}</span>
    </li>
 
        `
    })
    cardbox.innerHTML = htmlStr
}
let navlist=document.getElementsByTagName('a')
let cardlist=document.getElementsByTagName('li')
cardlist = utils.toArray(cardlist)



