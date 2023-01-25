const increase = document.querySelector('.plus-btn');
const decrease = document.querySelector('.minus-btn');
const body = document.querySelector('body');
increase.addEventListener('click' ,function(){
    let globalFontSize = window.getComputedStyle(body).fontSize.slice(0,-2)
    if (globalFontSize < 100) {
        body.style.fontSize = `${(globalFontSize*1)+2}px`  
    }
})

decrease.addEventListener('click' , function(){
let globalFontSize = window.getComputedStyle(body).fontSize.slice(0,-2)
if (globalFontSize > 6) {
    body.style.fontSize = `${globalFontSize - 2}px`
}
})