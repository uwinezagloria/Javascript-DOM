const element=document.getElementById('first')
const radio=document.getElementsByName("info")
const input=document.getElementsByTagName("inpt")
const elem=document.querySelectorAll("input")
const heading=document.querySelectorAll("#heading")
console.log(element)
console.log(radio)
console.log(input)
console.log(elem)
console.log(heading)
console.log(document.querySelectorAll("[required]")[0])
const tag=document.createElement("div")
tag.id="div1"
tag.innerHTML="<p>hy</p>"
tag.className="first-div"
document.body.appendChild(tag)
const image=document.createElement("img")
tag.appendChild(image)

image.setAttribute("alt","profile")
console.log(tag)