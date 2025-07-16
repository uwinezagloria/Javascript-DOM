function changeAllArticleColors(){
    const articles=document.querySelectorAll("#products")
    for(let article of articles){
        article.classList.add("sale")
    }
}
changeAllArticleColors()