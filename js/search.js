btn = document.querySelector('.btn')
search = document.querySelector('.search')
const element1 = document.getElementbyId('element1')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
})

element1.addEventListener('click', ()=>{
    window.location.href = "https://aidenrutzen.github.io/CS50/index.html"
})
