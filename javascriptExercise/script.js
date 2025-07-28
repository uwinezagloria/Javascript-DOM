/*
//selecting elements exercise and change the color
function changeAllArticleColors(){
    const articles=document.querySelectorAll("#products")
    for(let article of articles){
        article.classList.add("sale")
    }
}
changeAllArticleColors() 
//events exercise
function attachBuyEvents(){
const button=document.querySelectorAll(".buy");
button.forEach((button)=>{
button.addEventListener("click",function(event){
    console.log('BUY!' )
    console.log(event.target)
    console.log(this)
})
})

}
attachBuyEvents() */
function attachBuyEvents(){
 const button=document.querySelectorAll(".buy");
 const table=document.querySelector("table")
 let tbody=document.querySelector("tbody")
 if(!tbody){
  tbody=document.createElement("tbody")
table.appendChild(tbody)
  } 
button.forEach((button)=>{
   
//console.log(button.parentElement)
   const parent=button.parentElement
  // parent.classList.toggle("sale")
  const name=parent.firstElementChild.textContent
  var dataId=parent.getAttribute("data-id")
   const quantity=(button.previousElementSibling).value
   //console.log("quantity: ",quantity)
  const price=button.previousElementSibling.previousElementSibling.textContent
  //console.log("price : ", price)
  
 

button.addEventListener("click",function(){
    //console.log(button.parentElement)
   const parent=button.parentElement
  // parent.classList.toggle("sale")
  const name=parent.firstElementChild.textContent
  var dataId=parent.getAttribute("data-id")
   const quantity=(button.previousElementSibling).value
   //console.log("quantity: ",quantity)
  const price=button.previousElementSibling.previousElementSibling.textContent
  //console.log("price : ", price)
function tableDefinitions(id,name,quantity,price){
    const tr=document.createElement("tr")
    tr.classList.add("definition");
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    const td3=document.createElement("td")
    const td4=document.createElement("td")
    const td5=document.createElement("td")

    td1.textContent=id
    td2.textContent=name
    td3.textContent=quantity
    td4.textContent=price
    td5.textContent=parseInt(price*quantity)
    tr.append(td1,td2,td3,td4,td5)
    return tr
        
}
const newChild=tableDefinitions(dataId,name,quantity,price)
const oldChild=document.querySelectorAll("tr .definition")
const tr=document.querySelectorAll("definition")
let found=false
tr.forEach((row)=>{
    const id=row.firstElementChild.textContent
    console.log("Existing row ID:", id, "Clicked ID:", dataId);

    if(parseInt(id)===parseInt(dataId)){
tr.replaceChild(newChild,oldChild)
found=true
    }
    
})
if(!found){

        tbody.append(newChild)
}
    
})
})

}
attachBuyEvents()