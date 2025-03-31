btn = document.querySelector('.btn')
search = document.querySelector('.search')
element1 = document.getElementById('element1')


btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
})

element1.addEventListener('click', ()=> {
    window.location.href = "https://aidenrutzen.github.io/CS50/index.html"
})
