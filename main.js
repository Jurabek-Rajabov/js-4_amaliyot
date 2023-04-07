let element = document.getElementById("element")
let btn = document.getElementById("btn")
let active = document.getElementById("active")
btn.addEventListener("click", function(){
    element.classList.toggle("active")
    console.log(element)
})



let select = document.getElementById("select")
select.addEventListener("change", function(event){
    document.body.style.background = event.target.value    
    document.body.style.transition = "2s ease all"
    
})