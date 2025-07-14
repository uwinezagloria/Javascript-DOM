const unorderedList=document.createElement("ul")
function listing(text){
    var list=document.createElement("li")
    list.textContent=text
    unorderedList.appendChild(list)
}
listing("banana")
listing("vocado")
listing("apple")
unorderedList.setAttribute("type","none")
console.log(document.body.appendChild(unorderedList))
//(textcontent ()and innertext())
function gettingList(){
return unorderedList.textContent
}
//inner html
const body=document.querySelector("body")
console.log(gettingList())
function innerHtml(){

    return body.innerHTML
}
console.log(innerHtml())