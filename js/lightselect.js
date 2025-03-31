const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')


element1.addEventListener('click', ()=>{
    element1.innerHTML = "Dark Mode"
    element1.style.color = "white"
    element1.style.backgroundColor = "#000000"
    document.body.style.backgroundColor = "#000000"
})

element2.addEventListener('click', ()=>{
    element2.innerHTML = "Light Mode"
    element2.style.color = "black"
    element2.style.backgroundColor = "#ffffff"
    document.body.style.backgroundColor = "#ffffff"
})

element3.addEventListener('click', ()=>{
    window.location.href = "https://aidenrutzen.github.io/CS50/index.html"
})
