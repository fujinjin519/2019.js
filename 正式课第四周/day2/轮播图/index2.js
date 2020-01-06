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

let bindHtml=()=>{
    let divs=``
    let lis=``
    data.map((item,index)=>{
        divs+=`<div><img src="${item.img}"></div>`
        lis+=`<li></li>`

   
    })
    divs+=


}
