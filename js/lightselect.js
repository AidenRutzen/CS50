const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "Dark Mode"
    element1.style.color = "white"
    element1.style.backgroundColor = "#000000"
    document.body.style.backgroundColor = "#000000"
})

element2.addEventListener('click', ()=>{
    element2.innerHTML = "Light Mode"
    element2.style.color = "black"
    element2.style.backgroundColor = "#FFFFFF"
    document.body.style.backgroundColor = "#FFFFFF"
})
