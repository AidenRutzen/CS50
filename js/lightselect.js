const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "Changing to dark mode..."
    element1.style.color = "white"
    element1.style.backgroundColor = "#000000"
    body.css.backgroundColor = "#000000"
})

element2.addEventListener('click', ()=>{
    element2.innerHTML = "Changing to light mode..."
    element2.style.color = "black"
    element2.style.backgroundColor = "#FFFFFF"
    body.css.backgroundColor = "#FFFFFF"
})
