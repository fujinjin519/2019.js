let data=null
let xhr=new XMLHttpRequest
xhr.open('GET','jason/product.json',false)
xhr.onreadystatechange=function(){
    if(xhr.status===200&&xhr.readyState===4){
        data=xhr.responseText
        
    }
}
xhr.send()
data=JSON.parse(data)
renderHtml()


