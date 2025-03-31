loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')
element1 = document.getElementById('element1')

load = 0;

int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100
    bg.style.filter = `blur(${30-(load/100)*30}px)`
}

element1.addEventListener('click', ()=>{
    window.location.href = "https://aidenrutzen.github.io/CS50/index.html"
})
